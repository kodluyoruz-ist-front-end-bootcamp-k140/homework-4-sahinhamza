import { useActions } from "../../hooks"
import { useNavigate } from "react-router-dom";

export function Header() {
  const { getCartCount } = useActions();
  const navigate = useNavigate();
  
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!" onClick={() => navigate('/')}>React Bootcamp Restaurant Menu</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          <div className="d-flex">
            <button
              onClick={() => navigate('/kategori')}
              className="btn btn-outline-success m-1">kategori 
            </button>
            <button
              onClick={() => navigate('/urunler')}
              className="btn btn-outline-success m-1">Ürünler 
            </button>
            <button
              onClick={ () => navigate('/sepetim')}
              className="btn btn-outline-success m-1">Sepetim {`(${getCartCount()})`}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}