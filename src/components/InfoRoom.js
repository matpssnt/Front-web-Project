export default function InfoRooms(){

    const DivPrincipal = document.createElement('div');
    DivPrincipal.className = 'DivPrincipal';
    DivPrincipal.style.padding = '20px 30px';
    DivPrincipal.style.width = '83%';
    DivPrincipal.style.marginLeft = '95px';
    DivPrincipal.style.borderRadius = '10px';
    DivPrincipal.style.display = 'flex';
    DivPrincipal.style.justifyContent = 'space-between';
    DivPrincipal.innerHTML = `
    <table class="table table-borderless">
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
        </tr>
        </tbody>
    </table>
    `;
    return DivPrincipal;

}   