let section_1 = document.querySelector(".section_1");
section_1.innerHTML = `
<div class="seccion1">
<h1>Bloques</h1>
<table>
    <thead>
        <tr>
            <th>Etiqueta</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&lt;div&gt;</td>
            <td>Contenedor genérico</td>
        </tr>
        <tr>
            <td>&lt;header&gt;</td>
            <td>Encabezado de una sección o página</td>
        </tr>
        <tr>
            <td>&lt;footer&gt;</td>
            <td>Pie de página de una sección o página</td>
        </tr>
        <tr>
            <td>&lt;section&gt;</td>
            <td>Sección genérica de contenido</td>
        </tr>
        <tr>
            <td>&lt;article&gt;</td>
            <td>Artículo autónomo</td>
        </tr>
        <tr>
            <td>&lt;aside&gt;</td>
            <td>Contenido lateral o auxiliar</td>
        </tr>
        <tr>
            <td>&lt;nav&gt;</td>
            <td>Navegación</td>
        </tr>
    </tbody>
</table>
</div>
`;