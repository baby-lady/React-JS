import logo from "./assets/R.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>
                <img src={logo} alt="logo-letra-r" />
                Rhea's Online Shop
            </h3>
            <div>
                <button>Tops</button>
                <button>Bottoms</button>
                <button>Full body</button>
                <button>Accesories</button>
                <button>Sale!</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar