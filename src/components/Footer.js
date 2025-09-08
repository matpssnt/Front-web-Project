export default function Footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
<footer class="text-center bg-black text-white">
  <!-- Grid container -->
  <div class="container pt-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      
    <!-- Facebook -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.linkedin.com/in/matpssnt"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-linkedin"></i
      ></a>

      <!-- Twitter -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Instagram -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.instagram.com/teushcp_"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Github -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://github.com/matpssnt"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(139, 139, 139, 0.15);">
    © 2025 Copyright:
    <a class="text-light" href="https://github.com/matpssnt">Mateus Possonato</a>
  </div>
  <!-- Copyright -->
</footer>`;
return footer;
}