
import React, { useState } from 'react';
import Navegacion from './Navegacion';
import Modo_uso from './Modo_uso';

const Home = ({ dark, modeDark, tabladosificadora, setModaluso, openTable, setTabladosificadora, tableUso, modaluso }) => {
      const [area, setArea] = useState("");
      const [area2, setArea2] = useState("");
      const [area3, setArea3] = useState("");
      const [igual, setIgual] = useState("");
      const [cemento, setCemento] = useState("");
      const [cantidcemento, setcantidcemento] = useState("");
      const [grava, setGrava] = useState("");
      const [cantidadgrava, setcantidadgrava] = useState("");
      const [arena, setArena] = useState("");
      const [cantidadarena, setcantidadarena] = useState("");
      const [desperdicio, setDesperdicio] = useState("");
      const [desperdicioarena, setDesperdicioarena] = useState("");
      // control de contenedores de opciones
      const [optionSelection, setOptionSelection] = useState(null)
      // funtion of options
      function optionsChange(option) {
            setOptionSelection(option)
      }

      const areaValor = () => {
            if (area === "" || area2 === "" || area3 === "") {
                  alert("Ingresar valores");
            } else {
                  let x = area * area2 * area3;
                  let cantCement = (cemento / 50) * x;
                  let gravilla = grava * igual;
                  let arenaTotal = arena * igual;
                  setIgual(x);
                  setcantidcemento(cantCement.toFixed(2) + " " + "Bultos");
                  setcantidadgrava(gravilla.toFixed(2) + " " + "M3");
                  setcantidadarena(arenaTotal.toFixed(2) + " " + "M3");
                  setDesperdicio((gravilla + (gravilla.toFixed(2) * 0.50)) * 50 + " " + "Latas");
                  setDesperdicioarena((arenaTotal + (arenaTotal.toFixed(2) * 0.50)) * 50 + " " + "Latas");
            }
      }

      const imprimirTabla = () => {
            if (area === "" || area2 === "" || area3 === "") {
                  alert("Ingresar valores para poder imprimir");
            } else {
                  const contenidoTabla = document.querySelector('.footer__table').outerHTML;
                  const ventanaImpresion = window.open('', '_blank');
                  ventanaImpresion.document.write('<html><head><title>Tabla para imprimir</title></head><body>');
                  ventanaImpresion.document.write(contenidoTabla);
                  ventanaImpresion.document.write('</body></html>');
                  ventanaImpresion.document.close();
                  ventanaImpresion.print();
            }
      };

      return (
            <div className='padre__home'>
                  <Navegacion optionsChange={optionsChange} dark={dark} modeDark={modeDark} tableUso={tableUso} openTable={openTable} />
                  <div className="home__flex">
                        {/* contenedor 1 */}
                        {optionSelection === 1 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Presupuesto - Concreto</h1>
                                    <button onClick={areaValor}>Calcular</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado1</label>
                                                <input value={area} onChange={e => setArea(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado2</label>
                                                <input value={area2} onChange={e => setArea2(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Espesor</label>
                                                <input value={area3} onChange={e => setArea3(e.target.value)} type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Cemento</label>
                                                <input value={cemento} onChange={e => setCemento(e.target.value)} type="number" />
                                          </div>

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidcemento} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Grava</label>
                                                <input value={grava} onChange={e => setGrava(e.target.value)} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidadgrava} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Arena</label>
                                                <input value={arena} onChange={e => setArena(e.target.value)} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input value={cantidadarena} disabled type="text" />
                                          </div>
                                    </div>

                              </div>
                        }
                        {/* contenedor 2 */}
                        {optionSelection === 2 &&
                              <div style={{background:"red"}} className="flex-box box-uno">
                                    <h1 className="title">Presupuesto - Mortero</h1>
                                    <button onClick={areaValor}>Calcular</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado1</label>
                                                <input value={area} onChange={e => setArea(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado2</label>
                                                <input value={area2} onChange={e => setArea2(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Espesor</label>
                                                <input value={area3} onChange={e => setArea3(e.target.value)} type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Cemento</label>
                                                <input value={cemento} onChange={e => setCemento(e.target.value)} type="number" />
                                          </div>

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidcemento} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Grava</label>
                                                <input value={grava} onChange={e => setGrava(e.target.value)} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidadgrava} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Arena</label>
                                                <input value={arena} onChange={e => setArena(e.target.value)} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input value={cantidadarena} disabled type="text" />
                                          </div>
                                    </div>

                              </div>}
                        {/* contenedor 3 */}
                        {optionSelection === 3 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Presupuesto - Cielo Razo</h1>
                                    <button onClick={areaValor}>Calcular</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado1</label>
                                                <input value={area} onChange={e => setArea(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado2</label>
                                                <input value={area2} onChange={e => setArea2(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Espesor</label>
                                                <input value={area3} onChange={e => setArea3(e.target.value)} type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Cemento</label>
                                                <input value={cemento} onChange={e => setCemento(e.target.value)} type="number" />
                                          </div>

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidcemento} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Grava</label>
                                                <input value={grava} onChange={e => setGrava(e.target.value)} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidadgrava} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Arena</label>
                                                <input value={arena} onChange={e => setArena(e.target.value)} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input value={cantidadarena} disabled type="text" />
                                          </div>
                                    </div>

                              </div>}


                        {tabladosificadora && (
                              <div className="flex-box box-dos">

                                    <h1 className='title'> Dosificación </h1>
                                    <table>
                                          <tr>
                                                <td>Proporcion</td>
                                                <td>Cemento kg</td>
                                                <td>Arena m3</td>
                                                <td>Gravilla</td>
                                          </tr>
                                          <tr>
                                                <th>1:2:2</th>
                                                <th>420</th>
                                                <th>0.670</th>
                                                <th>0.670</th>
                                          </tr>
                                          <tr>
                                                <th>1:2:2:5</th>
                                                <th>380</th>
                                                <th>0.600</th>
                                                <th>0.760</th>
                                          </tr>
                                          <tr>
                                                <th>1:2:3</th>
                                                <th>350</th>
                                                <th>0.555</th>
                                                <th>0.835</th>
                                          </tr>
                                          <tr>
                                                <th>1:2:3:5</th>
                                                <th>320</th>
                                                <th>0.515</th>
                                                <th>0.900</th>
                                          </tr>
                                          <tr>
                                                <th>1:2:4</th>
                                                <th>300</th>
                                                <th>0.475</th>
                                                <th>0.950</th>
                                          </tr>
                                          <tr>
                                                <th>1:2:5:4</th>
                                                <th>280</th>
                                                <th>0.555</th>
                                                <th>0.890</th>
                                          </tr>
                                          <tr>
                                                <th>1:3:3</th>
                                                <th>300</th>
                                                <th>0.715</th>
                                                <th>0.715</th>
                                          </tr>
                                          <tr>
                                                <th>1:3:4</th>
                                                <th>260</th>
                                                <th>0.825</th>
                                                <th>0.835</th>
                                          </tr>
                                          <tr>
                                                <th>1:3:5</th>
                                                <th>230</th>
                                                <th>0.555</th>
                                                <th>0.920</th>
                                          </tr>
                                          <tr>
                                                <th>1:3:6</th>
                                                <th>210</th>
                                                <th>0.500</th>
                                                <th>1.000</th>
                                          </tr>
                                          <tr>
                                                <th>1:3:7</th>
                                                <th>175</th>
                                                <th>0.555</th>
                                                <th>0.975</th>
                                          </tr>
                                          <tr>
                                                <th>1:3:8</th>
                                                <th>175</th>
                                                <th>0.655</th>
                                                <th>1.025</th>
                                          </tr>
                                    </table>
                                    <button onClick={() => setTabladosificadora(false)}>ocultar</button>



                              </div>
                        )}


                        <div className="flex-box box-tres">
                              <h1 className='title'>Presupuesto De Obra</h1>
                              <table className='footer__table'>
                                    <tr className='head__table-result'>
                                          <th className='title-result'>#</th>
                                          <th className='title-result'>Denominacion</th>
                                          <th className='title-result'>Cantidad</th>
                                          <th className='title-result'>Total + 0.50</th>
                                    </tr>
                                    <tr>
                                          <td>1</td>
                                          <td>cementos</td>
                                          <td>{cantidcemento}</td>
                                          <td>{cantidcemento}</td>
                                    </tr>
                                    <tr>
                                          <td>2</td>
                                          <td>arena</td>
                                          <td>{cantidadarena}</td>
                                          <td>{desperdicioarena}</td>
                                    </tr>
                                    <tr>
                                          <td>3</td>
                                          <td>grava</td>
                                          <td>{cantidadgrava}</td>
                                          <td>{desperdicio}</td>
                                    </tr>
                              </table>
                              <button onClick={imprimirTabla}>Imprimir</button>
                        </div>
                  </div>
                  {modaluso && (

                        <Modo_uso setModaluso={setModaluso} />
                  )
                  }
            </div>
      );
};

export default Home;
