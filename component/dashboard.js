import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function Dashboard_bar() {
  return (
    <nav className="flex-column dashboard-nav" id="content_data">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <FontAwesomeIcon icon="fa-solid fa-house-chimney" />
          <a className="nav-link" href="#Dashboard">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon="fa-solid fa-city" />
          <a className="nav-link" href="#Etablissement">
            Etablissement
          </a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
          <a className="nav-link" href="#Reporting">
            Reporting
          </a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon="fa-solid fa-list-check" />
          <a className="nav-link" href="#Commandes">
            Commandes
          </a>
        </li>
        <li className="nav-item" id="sub_shop_main">
          <FontAwesomeIcon icon="fa-solid fa-shop" />
          <a className="nav-link" href="#Shop">
            Shop
          </a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon="fa-solid fa-scale-balanced" />
          <a className="nav-link" href="#Paiement">
            Paiement
          </a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
          <a className="nav-link" href="#Paramètres">
            Paramètres
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Dashboard_bar;
