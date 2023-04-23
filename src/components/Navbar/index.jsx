import styles from "./navbar.module.scss";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/images/LogoOpticaOnline.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    "Cristales",
    "Lentes de Contacto",
    "Recetados",
    "Anteojos de Sol",
  ];
  return (
    <div className={styles.container}>
      <Link to={"/"}>
        {" "}
        <img className={styles.logo} src={logo} />{" "}
      </Link>
      <div className={styles.categories}>
        {categories.map((categorie) => (
          <Link
            className={styles.link}
            key={categorie}
            to={`category/${categorie}`}
          >
            {categorie}
          </Link>
        ))}
      </div>

      <div className={styles.cart}>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
