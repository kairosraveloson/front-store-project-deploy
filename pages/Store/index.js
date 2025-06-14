import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Barre from '../../component/barre';
import { Table } from 'reactstrap';
import lottieWelcome from '../../src/images/load_data.gif';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Store() {
  function changeOrderState() {
    fetch('https://eats-api-project.herokuapp.com/order').then((result) => {
      result.json().then((resp) => {
        setOrder_State(resp);
      });
    });
  }

  function UpdateOrders(id_Order, valeur, motif_refus) {
    // let id_Order = document.getElementById('numero_ticket').innerText;
    let item = { Current_state: valeur, Reject_reason: motif_refus };
    fetch(`http://localhost:4000/order/Orderstate/${String(id_Order)}`, {
      //${id_Order}
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }

  const { data: andrasana } = useSWR(
    'https://eats-api-project.herokuapp.com/order/created',
    fetcher,
    { refreshInterval: 1000 }
  );
  const { data: mikarakara } = useSWR(
    'https://eats-api-project.herokuapp.com/order/accepted',
    fetcher,
    { refreshInterval: 1000 }
  );
  const { data: vita } = useSWR(
    'https://eats-api-project.herokuapp.com/order/finished',
    fetcher,
    { refreshInterval: 1000 }
  );
  if (!andrasana && !mikarakara && !vita)
    return (
      <>
        <div
          className="main"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Image src={lottieWelcome}></Image>
        </div>
      </>
    );
  return (
    <>
      <Barre />
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
            <div id="contenu_attente">
              {andrasana?.map((order) => {
                return (
                  <div
                    key={order.Order_id}
                    style={{
                      border: '2px solid #eee',
                      cursor: 'pointer',
                      padding: '5px',
                    }}
                    onClick={() => show_orders(order)}
                    id="contenu_attente_liste"
                  >
                    {' '}
                    <h5>{order.Order_id}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="etat_orders" id="incoming_orders">
            <div
              style={{
                color: 'white',
                fontWeight: '500',
                marginTop: '10px',
              }}
            >
              Détails commandes
            </div>
            <div id="list_contenu_order_nouvelles">
              {andrasana?.map((order) => {
                return (
                  <div
                    key={order.Order_id}
                    className="tab_list_contenu"
                    style={{ marginBottom: '20px' }}
                  >
                    <Table
                      className=" table-borderless"
                      style={{ borderRadius: '20px' }}
                    >
                      <tbody
                        className="tb_contenu_order"
                        style={{ height: '100%' }}
                      >
                        <tr style={{ height: '18vh' }}>
                          <td>
                            <Table
                              className="table-borderless"
                              style={{
                                backgroundColor: 'white',
                                margin: '0',
                                borderRadius: '5px',
                              }}
                            >
                              <tbody>
                                <tr
                                  style={{
                                    textAlign: 'left',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'left',
                                  }}
                                >
                                  <td>
                                    <b id="numero_ticket">{order.Order_id}</b>
                                  </td>
                                  <td>
                                    <b id="intitule_client">
                                      {order.User_name}
                                    </b>
                                  </td>
                                  <td>
                                    <div
                                      data-bs-toggle="modal"
                                      data-bs-target="#Modal_en_cours"
                                      style={{
                                        backgroundColor: '#BBDEFB',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <i className="bi bi-arrows-fullscreen"></i>
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      style={{
                                        backgroundColor: '#BBDEFB',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <i
                                        className="bi bi-messenger"
                                        style={{ color: '#2979ff' }}
                                      ></i>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={4} style={{ textAlign: 'left' }}>
                                    {' '}
                                    <b
                                      style={{ color: '#888' }}
                                      id="telephone_client"
                                    >
                                      {order.User_phone}
                                    </b>
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={4}>
                                    <div
                                      style={{
                                        backgroundColor: 'rgb(255, 235, 215)',
                                        borderRadius: '5',
                                        height: '75px',
                                        borderRadius: '5px',
                                        textAlign: 'left',
                                        padding: '5px',
                                      }}
                                      id="commentaire_client"
                                    >
                                      {order.commentaire_order}
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </td>
                          <td style={{ width: '25vh' }}>
                            <div
                              style={{
                                height: '12vh',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50px',
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: 'rgb(47, 255, 64)',
                                  width: '75px',
                                  height: '75px',
                                  padding: '5px',
                                  borderRadius: '50px',
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: 'white',
                                    width: '65px',
                                    height: '65px',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}
                                >
                                  <h2>5</h2>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                height: '12vh',
                                marginTop: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <div
                                className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  backgroundColor: '#ddd',
                                  width: '70px',
                                  height: '70px',
                                }}
                              >
                                <i
                                  className="bi bi-cart-check"
                                  style={{
                                    color: '#333',
                                    fontSize: '32px',
                                    fontWeight: '400',
                                  }}
                                ></i>
                              </div>
                              <b>Delivery</b>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            style={{
                              textAlign: 'left',
                            }}
                          >
                            <div id="scroll_list_articles">
                              <Table className="table table-border">
                                <tbody
                                  id={`liste_articles_ordered_${order.Order_id}`}
                                >
                                  {order.items_information?.map((liste) => {
                                    return (
                                      <>
                                        <tr key={liste.item_id}>
                                          <td>
                                            <b>{liste.item_quantity}</b>
                                          </td>
                                          <td>
                                            <b>x</b>
                                          </td>
                                          <td>
                                            <b>{liste.item_description}</b>
                                          </td>
                                          <td>
                                            <b>{liste.item_total_ttc}$</b>
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ textAlign: 'left' }}>
                          <td colSpan={2}>
                            <b>Total amount ($) : </b>
                            <b id="TotalAmount_Order">
                              {order.Total_ttc_amount}{' '}
                            </b>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }} colSpan={2}>
                            <button
                              className="btn btn-primary"
                              style={{
                                width: '40vh',
                                color: 'white',
                                fontWeight: '500',
                                fontSize: '18px',
                              }}
                              onClick={() =>
                                UpdateOrders(order.Order_id, 'Accepted', '')
                              }
                            >
                              Accepter
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }} colSpan={2}>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#Modal_si_refus"
                              style={{
                                width: '40vh',
                                color: 'white',
                                fontWeight: '500',
                                fontSize: '18px',
                              }}
                              className="refus_order"
                            >
                              Rejeter
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div
                      className="modal fade"
                      id="Modal_si_refus"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-xl">
                        <div
                          className="modal-content"
                          style={{
                            backgroundColor: 'transparent',
                            borderStyle: 'none',
                            opacity: '1',
                          }}
                        >
                          <div
                            className="modal-header center_container"
                            style={{
                              height: '200px',
                              backgroundColor: 'transparent',
                              borderStyle: 'none',
                              color: 'white',
                            }}
                          >
                            <br />
                            <div>
                              <h2>
                                Ne rejeter jamais les commandes sans motif
                                valable !!!
                              </h2>
                            </div>
                            <div>
                              <h6>
                                S&apos;il y a un problème mineur avec la
                                commande, veuillez contacter directement le
                                client
                              </h6>
                            </div>
                            <div></div>
                          </div>
                          <div
                            className="modal-body"
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            id="reject_modal_show"
                          >
                            <div
                              className="center_container"
                              style={{ padding: '5px' }}
                            >
                              <h4 style={{ fontWeight: '700' }}>
                                <i className="bi bi-clock"></i> Bientôt fermé
                              </h4>
                              <div
                                style={{
                                  backgroundColor: 'rgb(255, 204, 153)',
                                  borderRadius: '5',
                                  height: '120px',
                                  borderRadius: '15px',
                                  textAlign: 'center',
                                  padding: '10px',
                                  margin: '20px',
                                }}
                              >
                                Malheureusement, nous n&apos;avons plus le temps
                                de préparer votre commande aujourd&apos;hui.
                              </div>
                              <button
                                type="button"
                                className="btn btn-lg"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
                                  backgroundColor: 'rgb(255, 119, 0)',
                                  fontWeight: '500',
                                  fontSize: '16px',
                                  color: 'white',
                                }}
                                onClick={() =>
                                  UpdateOrders(
                                    order.Order_id,
                                    'Rejected',
                                    'Bientôt fermé'
                                  )
                                }
                              >
                                Rejeter la commande
                              </button>
                            </div>
                            <div
                              className="center_container"
                              style={{ padding: '5px' }}
                            >
                              <h4 style={{ fontWeight: '700' }}>
                                <i className="bi bi-clock"></i> Stock
                                indisponible
                              </h4>
                              <div
                                style={{
                                  backgroundColor: 'rgb(255, 204, 153)',
                                  borderRadius: '5',
                                  height: '120px',
                                  borderRadius: '15px',
                                  textAlign: 'center',
                                  padding: '10px',
                                  margin: '20px',
                                }}
                              >
                                Malheureusement, nous n&apos;avons plus le temps
                                de préparer votre commande aujourd&apos;hui.
                              </div>
                              <button
                                type="button"
                                className="btn btn-lg"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
                                  backgroundColor: 'rgb(255, 119, 0)',
                                  fontWeight: '500',
                                  fontSize: '16px',
                                  color: 'white',
                                }}
                                onClick={() =>
                                  UpdateOrders(
                                    order.Order_id,
                                    'Rejected',
                                    'Stock indisponible'
                                  )
                                }
                              >
                                Rejeter la commande
                              </button>
                            </div>
                            <div
                              className="center_container"
                              style={{ padding: '5px' }}
                            >
                              <h4 style={{ fontWeight: '700' }}>
                                <i className="bi bi-clock"></i> Autres raisons
                              </h4>
                              <div
                                style={{
                                  borderRadius: '5',
                                  height: '120px',
                                  borderRadius: '15px',
                                  textAlign: 'center',
                                  padding: '10px',
                                  margin: '20px',
                                }}
                              >
                                <textarea
                                  name={`motifderefus${order.Order_id}`}
                                  className="form-control"
                                  cols="30"
                                  rows="4"
                                  placeholder="Motif de refus"
                                ></textarea>
                              </div>
                              <button
                                type="button"
                                className="btn btn-lg"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
                                  backgroundColor: 'rgb(255, 119, 0)',
                                  fontWeight: '500',
                                  fontSize: '16px',
                                  color: 'white',
                                }}
                                onClick={() =>
                                  UpdateOrders(
                                    order.Order_id,
                                    'Rejected',
                                    'Autres raisons'
                                  )
                                }
                              >
                                Rejeter la commande
                              </button>
                            </div>
                          </div>
                          <div
                            className="modal-footer"
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: 'transparent',
                              borderStyle: 'none',
                            }}
                          >
                            <button
                              type="button"
                              className="btn btn-dark btn-lg"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              Annuler
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ******************************************************************************************* */}

              {/* ******************************************************************************************* */}
              <div
                className="modal fade"
                id="Modal_en_cours"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="exampleModalLabel"
                        style={{ color: '#012970' }}
                      >
                        Détails de la commande
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <Table className="table table-borderless">
                        <tbody>
                          <tr style={{ height: '25vh' }}>
                            <td
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'top',
                                justifyContent: 'top',
                              }}
                            >
                              <div
                                style={{
                                  textAlign: 'left',
                                  width: '10vw',
                                }}
                              >
                                Commande N° <br />
                                Type de vente
                                <br />
                                Point de vente <br />
                                A livrer à <br />
                                Adresse <br />
                                Client
                                <br />
                              </div>
                              <div
                                style={{
                                  textAlign: 'left',
                                  width: '18vw',
                                }}
                              >
                                <b>103</b> <br />
                                Livraison <br />
                                Store 1<br />
                                15:30pm <br />
                                Lot 16 A TER
                                <br />
                                Particuliers
                                <br />
                              </div>
                              <div
                                style={{
                                  textAlign: 'left',
                                  width: '18vw',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'top',
                                  justifyContent: 'top',
                                }}
                              >
                                <b>Motif de refus</b>
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  placeholder="Reason of the reject . . . "
                                  rows="5"
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={3}>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'right',
                                  backgroundColor: '#CCC',
                                  fontWeignt: 'bold',
                                }}
                              >
                                <span
                                  style={{
                                    width: '25vh',
                                  }}
                                >
                                  <b>Référence</b>
                                </span>
                                <span
                                  style={{
                                    width: '33vh',
                                  }}
                                >
                                  <b>Désignation</b>
                                </span>
                                <span
                                  style={{
                                    width: '12vh',
                                  }}
                                >
                                  <b>Quantité</b>
                                </span>
                                <span
                                  style={{
                                    width: '12vh',
                                  }}
                                >
                                  <b>Prix</b>
                                </span>
                                <span
                                  style={{
                                    width: '18vh',
                                  }}
                                >
                                  <b>Montant TTC</b>
                                </span>
                              </div>
                              <div
                                id="scroll_list_articles_modal"
                                style={{ height: '35vh' }}
                              >
                                <Table className="table">
                                  <tbody
                                    className="table table-striped bordered"
                                    id="tbody_tr_td"
                                  >
                                    <tr>
                                      <td>ART001</td>
                                      <td>Hamburger</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,6
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,6
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART002</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART003</td>
                                      <td>Mojito</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        1,32
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        1,32
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>ART004</td>
                                      <td>Nebab Kebab</td>
                                      <td style={{ textAlign: 'center' }}>1</td>
                                      <td style={{ textAlign: 'center' }}>
                                        2.05
                                      </td>
                                      <td style={{ textAlign: 'center' }}>
                                        2,05
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'center' }}>
                            <td>
                              {' '}
                              <b>Total TTC ($) : 258</b>{' '}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger disabled"
                        data-bs-dismiss="modal"
                      >
                        Refuser
                      </button>
                      <button type="button" className="btn btn-success">
                        Accepter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
            <div id="list_contenu_order_encours">
              {mikarakara?.map((order) => {
                return (
                  <div
                    key={order.Order_id}
                    className="tab_list_contenu"
                    style={{ marginBottom: '20px' }}
                  >
                    <Table
                      className=" table-borderless"
                      style={{ borderRadius: '20px' }}
                    >
                      <tbody
                        className="tb_contenu_order"
                        style={{ height: '100%' }}
                      >
                        <tr style={{ height: '18vh' }}>
                          <td>
                            <Table
                              className="table-borderless"
                              style={{
                                backgroundColor: 'white',
                                margin: '0',
                                borderRadius: '5px',
                              }}
                            >
                              <tbody>
                                <tr
                                  style={{
                                    textAlign: 'left',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'left',
                                  }}
                                >
                                  <td>
                                    <b id="numero_ticket">{order.Order_id}</b>
                                  </td>
                                  <td>
                                    <b id="intitule_client">
                                      {order.User_name}
                                    </b>
                                  </td>
                                  <td>
                                    <div
                                      data-bs-toggle="modal"
                                      data-bs-target="#Modal_en_cours"
                                      style={{
                                        backgroundColor: '#BBDEFB',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <i className="bi bi-arrows-fullscreen"></i>
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      style={{
                                        backgroundColor: '#BBDEFB',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <i
                                        className="bi bi-messenger"
                                        style={{ color: '#2979ff' }}
                                      ></i>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={4} style={{ textAlign: 'left' }}>
                                    {' '}
                                    <b
                                      style={{ color: '#888' }}
                                      id="telephone_client"
                                    >
                                      {order.User_phone}
                                    </b>
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={4}>
                                    <div
                                      style={{
                                        backgroundColor: 'rgb(255, 235, 215)',
                                        borderRadius: '5',
                                        height: '75px',
                                        borderRadius: '5px',
                                        textAlign: 'left',
                                        padding: '5px',
                                      }}
                                      id="commentaire_client"
                                    >
                                      {order.commentaire_order}
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </td>
                          <td style={{ width: '25vh' }}>
                            <div
                              style={{
                                height: '12vh',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50px',
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: 'rgb(47, 255, 64)',
                                  width: '75px',
                                  height: '75px',
                                  padding: '5px',
                                  borderRadius: '50px',
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: 'white',
                                    width: '65px',
                                    height: '65px',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}
                                >
                                  <h2>5</h2>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                height: '12vh',
                                marginTop: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <div
                                className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  backgroundColor: '#ddd',
                                  width: '70px',
                                  height: '70px',
                                }}
                              >
                                <i
                                  className="bi bi-cart-check"
                                  style={{
                                    color: '#333',
                                    fontSize: '32px',
                                    fontWeight: '400',
                                  }}
                                ></i>
                              </div>
                              <b>Delivery</b>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            style={{
                              textAlign: 'left',
                            }}
                          >
                            <div id="scroll_list_articles">
                              <Table className="table table-border">
                                <tbody
                                  id={`liste_articles_ordered_${order.Order_id}`}
                                >
                                  {order.items_information.map((liste) => {
                                    return (
                                      <>
                                        <tr key={liste.item_id}>
                                          <td>
                                            <b>{liste.item_quantity}</b>
                                          </td>
                                          <td>
                                            <b>x</b>
                                          </td>
                                          <td>
                                            <b>{liste.item_description}</b>
                                          </td>
                                          <td>
                                            <b>{liste.item_total_ttc}$</b>
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ textAlign: 'left' }}>
                          <td colSpan={2}>
                            <b>Total amount ($) : </b>
                            <b id="TotalAmount_Order">
                              {order.Total_ttc_amount}{' '}
                            </b>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }} colSpan={2}>
                            <button
                              className="btn btn-success"
                              style={{ width: '50vh' }}
                              onClick={() =>
                                UpdateOrders(order.Order_id, 'Finished', '')
                              }
                            >
                              <i className="bi bi-cart-check"></i> Prêt à livrer
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                );
              })}
            </div>
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
            <div id="contenu_pret">
              {vita?.map((order) => {
                return (
                  <div key={order.Order_id} style={{ marginBottom: '20px' }}>
                    <Table
                      className="table-borderless"
                      style={{
                        backgroundColor: 'rgb(60, 61, 66)',
                        margin: '0',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(60, 61, 66)',
                        color: 'white',
                      }}
                    >
                      <tbody
                        style={{
                          textAlign: 'center',
                        }}
                      >
                        <tr
                          style={{
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <td>
                            <b id="numero_ticket">{order.Order_id}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b id="intitule_client">{order.User_name}</b>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }}
                          >
                            <div
                              style={{
                                width: '70px',
                                height: '70px',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'rgb(32, 33, 37)',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                borderRadius: '50px',
                              }}
                            >
                              <i
                                className="bi bi-car-front-fill"
                                style={{
                                  color: 'white',
                                  fontSize: '32px',
                                  fontWeight: '400',
                                }}
                              ></i>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4} style={{ textAlign: 'left' }}>
                            {' '}
                            <b
                              style={{ color: '#888' }}
                              id="telephone_client"
                            ></b>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*
export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/order");
  const data = await response.json();
  return {
    props: { orders: data },
  };
}*/
