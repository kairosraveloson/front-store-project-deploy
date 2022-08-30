import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Barre from "../component/barre";
import Dashboard_bar from "../component/dashboard";
import Wolt from "../public/wolt_white.svg";
import Link from "next/link";

export default function Home() {
  const chargement = () => {
    //  document.getElementById('wolt_logo').style.width = '50px';
    document.getElementById("wolt_logo").style.opacity = "1";
    setTimeout(() => {
      document.getElementById("merchant_writing").style.opacity = "1";
      document.getElementById("merchant_writing").style.marginTop = "230px";
      setTimeout(() => {
        document.getElementById("login_form").style.height = "230px";
        document.getElementById("wolt_logo").style.width = "230px";
        document.getElementById("merchant_writing").style.marginTop = "120px";
      }, 1000);
    }, 1000);
  };
  return (
    <>
      <style jsx global>
        {`
          #principale {
            width: 100vw;
            height: 100vh;
            background-color: rgb(32, 33, 37);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          html,
          body {
            height: 100%;
          }

          .header-login {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 350px;
            height: 150px;
          }
          h1,
          h4 {
            text-align: center;
          }
          h1 {
            color: #fafafa;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
          }
          h4 {
            color: #00b0ff;
            text-transform: uppercase;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-weight: "bold";
          }
          input[type="text"],
          input[type="password"] {
            background-color: #263238;
            color: #eee;
          }

          input[type="text"]:active,
          input[type="password"]:active > label {
            color: #263238;
          }

          label {
            color: #bdbdbd;
          }
          #sign_in {
            width: 350px;
            color: #fff;
            font-size: 22px;
          }

          .header-login > div {
            position: absolute;
          }
          #wolt_logo {
            width: 700px;
            opacity: 0;
            transition: width 800ms, opacity 3000ms;
            z-index: 100;
          }
          #merchant_writing {
            margin-top: 0px;
            transition: margin-top 1000ms;
            opacity: 0;
          }
          #login_form {
            height: 0px;
            transition: height 700ms;
          }
        `}
      </style>
      <div id="principale">
        <div className="row">
          <form className="form-signin" action="/Utilisateurs">
            <div className="header-login">
              <div id="wolt_logo">
                <Image src={Wolt} alt="wolt" onLoad={chargement} />
              </div>

              <div
                style={{
                  height: "50px",
                  overflow: "hidden",
                }}
                id="merchant_writing"
              >
                <h4>Merchant</h4>
              </div>
            </div>
            <div
              style={{
                height: "0px",
                overflow: "hidden",
              }}
              id="login_form"
            >
              <div className="form-floating mb-3 mt-3">
                <input
                  type="text"
                  id="infoUser"
                  className="form-control"
                  placeholder="Email or Username"
                  autoFocus="off"
                  required
                />
                <label htmlFor="infoUser">Username</label>
              </div>
              <div className="form-floating mb-3 mt-3">
                <input
                  type="password"
                  id="passuser"
                  className="form-control"
                  placeholder="Password"
                  autoFocus
                  required
                />
                <label htmlFor="passuser">Password</label>
              </div>
              <Link href="/Store">
                <a>
                  <button
                    className="btn btn-lg btn-primary"
                    type="submit"
                    id="sign_in"
                  >
                    Sign in
                  </button>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
