import './styleFooter.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="footer-section">
              <h3>Code Stokers</h3>
              <p>Dirección de la tienda</p>
              <p>Teléfono: +123 456 789</p>
              <p>Email: info@CodeStockers.com</p>
            </div>
            <div className="footer-links">
              <h3>Enlaces útiles</h3>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/productos">Productos</a>
                </li>
                <li>
                  <a href="/ofertas">Ofertas</a>
                </li>
                <li>
                  <a href="/contacto">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Nuestras Redes</h3>
              <div className="social-link">
                  <a href=""><i className="fab fa-facebook-f"></i></a>
                  <a href=""><i className="fab fa-instagram"></i></a>
                  <a href=""><i className="fab fa-twitter"></i></a>
                  <a href=""><i className="fab fa-linkedin"></i></a>
                  <a href=""><i className="fab fa-google-plus"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
            <p>Todos los derechos reservados &copy; {new Date().getFullYear()} CodeStockers.com</p>
          </div>
      </footer>
    );
  };
  
  export default Footer;