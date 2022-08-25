import { Table } from 'reactstrap';
import Image from 'next/image';
import meal1 from '../src/images/food/meal1.jpg';
import meal2 from '../src/images/food/meal2.jpg';
import meal3 from '../src/images/food/meal3.jpg';
import meal4 from '../src/images/food/meal4.jpg';
import meal5 from '../src/images/food/meal5.jpg';
import des1 from '../src/images/deserts/specials-1.jpg';
import des2 from '../src/images/deserts/specials-2.jpg';
import des3 from '../src/images/deserts/specials-3.jpg';
import des4 from '../src/images/deserts/specials-4.jpg';
const listContenu = [
  {
    meal: meal1,
    designation: 'Meal 1',
    quantite: 4,
    prix: '100',
  },
  {
    meal: meal2,
    designation: 'Meal 2',
    quantite: 5,
    prix: '230',
  },
  {
    meal: meal3,
    designation: 'Meal 3',
    quantite: 14,
    prix: '250',
  },
  {
    meal: meal4,
    designation: 'Meal 4',
    quantite: 9,
    prix: '315',
  },
  {
    meal: meal5,
    designation: 'Meal 5',
    quantite: 14,
    prix: '750',
  },

  {
    meal: des1,
    designation: 'Desserts 1',
    quantite: 14,
    prix: '750',
  },

  {
    meal: des2,
    designation: 'Desserts 2',
    quantite: 7,
    prix: '140',
  },

  {
    meal: des3,
    designation: 'Desserts 3',
    quantite: 10,
    prix: '300',
  },

  {
    meal: des4,
    designation: 'Desserts 4',
    quantite: 24,
    prix: '490',
  },
];
export default function Corps() {
  return (
    <div id="tous_les_commandes">
      <div id="mode_rush">Vous êtes en mode rush</div>
      <div id="corps_orders">
        <div className="etat_orders" id="list_order">
          <div
            style={{
              color: 'white',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            Commandes
          </div>
          <div id="contenu_attente"></div>
        </div>
        <div className="etat_orders" id="incoming_orders">
          <div
            style={{
              color: 'white',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            Nouvelles commandes
          </div>
          <div id="list_contenu_order_nouvelles">
            {/* <Table className="tab_list_contenu text-nowrap mt-2 align-middle"> 
              <thead>
                <tr>
                  <th>Contenu</th>
                  <th>Designation</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="tb_contenu_order">
                {listContenu.map((lcontenu, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="text-center">
                      <div>
                        <Image
                          src={lcontenu.meal}
                          className="img-thumbnail"
                          alt="meal"
                          width={100}
                          height={70}
                        />
                      </div>
                    </td>
                    <td>{lcontenu.designation}</td>
                    <td>{lcontenu.quantite}</td>
                    <td style={{ fontSize: "26px", fontWeight: "700" }}>
                      <b style={{ color: "#263238" }}>$</b>
                      {lcontenu.prix < "250" ? (
                        <span className="text-secondary">{lcontenu.prix}</span>
                      ) : lcontenu.prix === "250" ? (
                        <span className="text-success">{lcontenu.prix}</span>
                      ) : (
                        <span className="text-danger">{lcontenu.prix}</span>
                      )}
                    </td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-outline-success btn-sm"
                        style={{ marginRight: "2px" }}
                      >
                        <i className="bi bi-bag-check"></i> Delivery
                      </button>
                      <button className="btn btn-outline-danger btn-sm">
                        <i className="bi bi-bag-dash"></i> Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>*/}
          </div>
        </div>
        <div className="etat_orders" id="outgoing_orders">
          <div
            style={{
              color: 'white',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            Commandes en cours
          </div>
          <div id="list_contenu_order_encours"></div>
        </div>
        <div className="etat_orders" id="ready_orders">
          <div
            style={{
              color: 'white',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            Prêt
          </div>
          <div id="contenu_pret"></div>
        </div>
      </div>
    </div>
  );
}
