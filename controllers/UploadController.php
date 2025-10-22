<?php

class UploadController {
    static $maxSize = 1024 * 1024 * 5;
    static $typeFiles = [
        "image/png" => "png",
        "image/jpeg"=> "jpeg",
        "image/jpg"=> "jpg",
    ];
    static $path = __DIR__ . "/../uploads/";


    public static function normalizePictures($pictures) {
        $files = [];

        if (is_array($pictures['name'])) {
            foreach ($pictures['name'] as $index => $name) {
                $files[] = [
                    'name'=> $pictures['name'][$index],
                    'type'=> $pictures['type'][$index],
                    'tmp_name' => $pictures['tmp_name'][$index],
                    'error' => $pictures['error'][$index],
                    'size'=> $pictures['size'][$index],
                ];
            }
        }
        else {
            $files[] = $pictures;
        }

        return $files;
    }


    public static function randomName($extension) {
        $name = bin2hex(random_bytes(16));
        return $name .'.'. $extension;
    }


    public static function upload($pictures) {
        $files = [];
        $errors = [];
        $saves = [];

        if ($pictures) {
            $files = self::normalizePictures($pictures);
        }

        foreach ($files as $index => $photo) {
            $err = $photo['error'] ?? UPLOAD_ERR_NO_FILE;

            if ($err === UPLOAD_ERR_NO_FILE) continue;

            if ($err !== UPLOAD_ERR_OK) {
                $errors[] = "Erro no upload (photo: {$index})";
                continue;
            }

            if ( ($photo['size'] ?? 0) > self::$maxSize ) {
                $errors[] = "Excedeu o limite de" . self::$maxSize . "Mb - (photo: {$index})";
                continue;
            }

            $info = new \finfo(FILEINFO_MIME_TYPE);
            $mime = $info->file($photo['tmp_name']) ?: ($photo['type'] ?? "application/octet-stream");
            if ( !isset(self::$typeFiles[$mime])) {
                $errors[] = "Tipo do arquivo não é permitido!";
                continue;
            }

            $photoName = self::randomName(self::$typeFiles[$mime]);
            $destPath = self::$path . $photoName;

            if ( !move_uploaded_file($photo['tmp_name'], $destPath)) {
                $errors[] = 'Falha ao mover o arquivo';
                continue;
            }

            $saves[] = [
                "name" => $photoName,
                "type" => self::$typeFiles[$mime],
                "path" => "/uploads/" . $photoName
            ];
        }

        return [
            "files"=>$files, 
            "erros"=>$errors, 
            "saves"=>$saves
        ];
    }
    
}

?>