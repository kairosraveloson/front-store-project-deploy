import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import bgImage from '../public/notifications.gif';
import Link from 'next/link';

function Barre() {
  const enable_rush_mode = () => {
    if (document.getElementById('mode_rush').style.height === '6vh') {
      let normal_val = '95%';
      document.getElementById('mode_rush').style.height = '0vh';
      document.getElementById('rush_mode_text').style.color = 'white';
      document.getElementById('icon_mode_rush').style.color = 'white';

      document.getElementById('corps_orders').style.height = '91.5vh';
    } else {
      let rush_val = '92%';
      document.getElementById('mode_rush').style.height = '6vh';
      document.getElementById('rush_mode_text').style.color =
        'rgb(255, 111, 0)';
      document.getElementById('icon_mode_rush').style.color =
        'rgb(255, 111, 0)';

      document.getElementById('corps_orders').style.height = '85.5vh';
    }
  };

  const show_orders = () => {
    if (document.getElementById('list_order').style.width != '7%') {
      document.getElementById('list_order').style.width = '7%';
      document.getElementById('ready_orders').style.width = '7%';
    } else {
      document.getElementById('list_order').style.width = '0%';
      document.getElementById('ready_orders').style.width = '14%';
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ zIndex: '500' }}
    >
      <div className="container-fluid" id="top_brand">
        <div
          style={{
            backgroundColor: 'rgb(32,33,37)', //
            width: 170,
          }}
          id="logo_brand"
        >
          <button
            className="btn btn-sm"
            type="button"
            id="hide_list_orders"
            onClick={show_orders}
          >
            <i
              className="bi bi-list toggle-sidebar-btn  fa-lg"
              style={{
                fontSize: 28,
                fontWeight: 400,
                color: 'white',
                zIndex: 58,
              }}
            ></i>
            <i
              className="bi bi-2-circle-fill toggle-sidebar-btn  fa-lg"
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: 'rgb(191, 47, 47)', //rgb(191, 47, 47)
                position: 'fixed',
                zIndex: 600,
                backgroundColor: 'black',
                borderRadius: '50px',
              }}
            ></i>
          </button>
          {'  '}
          <span style={{ color: 'white', fontWeight: '500' }}>
            Active orders
          </span>

          {/* <Image 
            src={bgImage}
            width={134}
            height={40}
            alt="Image not found"
            id="image_logo"
            style={{ backgroundColor: "red" }}
          ></Image>*/}
        </div>

        <div id="left_brand">
          <button
            className="btn btn-sm"
            type="button"
            id="enable_rush_mode"
            style={{ color: 'white' }}
            onClick={enable_rush_mode}
          >
            <i
              className="bi bi-speedometer toggle-sidebar-btn  fa-lg"
              style={{
                fontSize: 18,
                fontWeight: 400,
                marginRight: '10px',
                color: 'white',
              }}
              id="icon_mode_rush"
            ></i>
            <span style={{ fontWeight: '500' }} id="rush_mode_text">
              Enable rush mode
            </span>
          </button>
          <button
            className="btn btn-sm"
            type="button"
            id="hide_restaurant_state"
          >
            <Link href="/Store/offline">
              <a
                style={{
                  textDecoration: 'none',
                }}
              >
                <i
                  className="bi bi-circle-fill toggle-sidebar-btn  fa-lg"
                  style={{
                    fontSize: 8,
                    fontWeight: 400,
                    marginRight: '10px',
                    color: 'green',
                  }}
                ></i>
                <span
                  style={{
                    color: 'white',
                    fontWeight: '500',
                  }}
                >
                  Restaurant open
                </span>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Barre;
