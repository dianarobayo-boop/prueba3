export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenidos a mi Tienda</h1>

      <div>
        <p>Esta aplicación web SPA está desarrollada con React, Vite y React Router 6 como ejemplo de SPA.</p>

        <p>SPA significa Single Page Application (Aplicación de Página Única).</p>

        <p>SPA es un tipo de aplicación web o sitio web que no recarga toda la página en el navegador cada vez que el usuario hace clic en un enlace o navega entre secciones (como ocurre en las páginas web tradicionales).</p>

        <h2>Características principales:</h2>

        <ul>
          <li><strong>Sin recarga de navegador:</strong> Al hacer clic en un menú (por ejemplo, de Inicio a Catálogo), solo cambia el contenido que necesita actualizarse sin volver a solicitar todo el HTML al servidor.</li>
          <li><strong>Fluidez y velocidad:</strong> La navegación se siente instantánea, similar a la de una aplicación móvil o de escritorio.</li>
          <li><strong>Uso de librerías como React:</strong> En este proyecto, utilizo React Router 6 (BrowserRouter, Routes, Route) para simular la navegación entre diferentes vistas sin refrescar la ventana del navegador.</li>
        </ul>
      </div>
    </div>
  );
}