import './styleFooter.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nuestra Tienda</h3>
            <p>Dirección de la tienda</p>
            <p>Teléfono: +123 456 789</p>
            <p>Email: info@CodeStockers.com</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces útiles</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/ofertas">Ofertas</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Síguenos en redes sociales</h3>
            {/* Agrega aquí los enlaces a tus redes sociales */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>Todos los derechos reservados &copy; {new Date().getFullYear()} CodeStockers.com</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;