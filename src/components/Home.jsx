
import React, { useState } from 'react';
import Navegacion from './Navegacion';
import Modo_uso from './Modo_uso';

const Home = ({ dark, modeDark, tabladosificadora, setModaluso, openTable, setTabladosificadora, tableUso, modaluso }) => {

      // mortero

      const [totalMortero, setTotalMortero] = useState(null);
      const [valor1, setValor1] = useState('');
      const [valor2, setValor2] = useState('');
      const [espesorValor, setEspesorValor] = useState('');
      const [cementoValor, setCementoValor] = useState('');
      const [totalcementoMortero, setTotalCementoMortero] = useState('');
      const [arenaValor, setArenaValor] = useState('');
      const [arenaTotalValor, setArenaTotalValor] = useState('');

      const morteroFuncion = () => {
            const areaTotalMortero = valor1 * valor2 * espesorValor;
            const CementoValores = (cementoValor / 50) * areaTotalMortero ;
            const totalArenaMortero = arenaValor * areaTotalMortero;
            setTotalMortero(areaTotalMortero);
            setTotalCementoMortero(CementoValores.toFixed(2));
            setArenaTotalValor(totalArenaMortero.toFixed(2))

      }

      // concreto
      const [area, setArea] = useState("")
            , [area2, setArea2] = useState("")
            , [area3, setArea3] = useState("")
            , [igual, setIgual] = useState("")
            , [cemento, setCemento] = useState("")
            , [cantidcemento, setcantidcemento] = useState("")
            , [grava, setGrava] = useState("")
            , [cantidadgrava, setcantidadgrava] = useState("")
            , [arena, setArena] = useState("")
            , [cantidadarena, setcantidadarena] = useState("")
            , [desperdicio, setDesperdicio] = useState("")
            , [desperdicioarena, setDesperdicioarena] = useState("");
      // control de contenedores de opciones
      const [optionSelection, setOptionSelection] = useState(1)
      // funtion of options
      function optionsChange(option) {
            setOptionSelection(option)
      }
      // cielo razos
      const [valor1CieloRazo, setValor1CieloRazo] = useState(''); //valor 1
      const [valor2CieloRazo, setValor2CieloRazo] = useState(''); //valor 2
      const [areaTotalCieloRazo, setAreaTotalCieloRazo] = useState('');
      const [Medida1, setMedida1] = useState('');
      const [Medida2, setMedida2] = useState('');
      const [totalMedidas, setTotalMedidas] = useState('');
      const [totalLaminas, setTotalLaminas] = useState('');
      // omegas viguetas estuco
      const[omega,setOmega] = useState();
      const[vigueta,setVigueta] = useState();
      const[estuco,setEstuco] = useState();
      // laminas
      const cieloRazo = () => {
            const cieloRazoarea = (valor1CieloRazo * valor2CieloRazo);
            const medidadasTolales = Medida1 * Medida2;
            const totalLamina = medidadasTolales / cieloRazoarea;
            setAreaTotalCieloRazo(cieloRazoarea);
            setTotalMedidas(medidadasTolales);
            setTotalLaminas(totalLamina.toFixed(2));
      }
      const viguetas = ()=>{
            const omegas = totalMedidas * 1;
            const viguetas = totalMedidas* 0.50;
            const estucos = totalMedidas / 15;
            setOmega(omegas.toFixed(2));
            setVigueta(viguetas.toFixed(2));
            setEstuco(estucos.toFixed(2));
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
                  setcantidcemento(cantCement.toFixed(2) + 1 + " " + "Bultos");
                  setcantidadgrava(gravilla.toFixed(2) + " " + "M3");
                  setcantidadarena(arenaTotal.toFixed(2) + " " + "M3");
                  setDesperdicio(gravilla.toFixed(2) );
                  setDesperdicioarena(arenaTotal.toFixed(2));

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
                        {/* contenedor 1 concreto */}
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
                        {/* contenedor 2  mortero*/}
                        {optionSelection === 2 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Presupuesto - Mortero</h1>
                                    <button onClick={morteroFuncion}>Calcular</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">valor1</label>
                                                <input value={valor1} onChange={e => setValor1(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">valor2</label>
                                                <input value={valor2} onChange={e => setValor2(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Espesor</label>
                                                <input value={espesorValor} onChange={e => setEspesorValor(e.target.value)} type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={totalMortero} type="text" />
                                          </div>
                                    </div>
                                    {/* cemento mortero */}
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Cemento</label>
                                                <input value={cementoValor} onChange={e => setCementoValor(e.target.value)} type="number" />
                                          </div>

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={totalMortero} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={totalcementoMortero} type="text" />
                                          </div>
                                    </div>

                                    {/* arena mortero*/}

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Arena</label>
                                                <input value={arenaValor} onChange={e => setArenaValor(e.target.value)} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={totalMortero} type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input value={arenaTotalValor} disabled type="text" />
                                          </div>
                                    </div>


                              </div>
                        }


                        {/* contenedor 3  cielo razo*/}
                        {optionSelection === 3 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Cantidad De Laminas</h1>

                                    <button onClick={cieloRazo} >Calcular</button>


                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado-1 lamina </label>
                                                <input placeholder='ingresar valor1' value={valor1CieloRazo} onChange={e => setValor1CieloRazo(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Lado-2 lamina </label>
                                                <input placeholder='ingresar valor2' value={valor2CieloRazo} onChange={e => setValor2CieloRazo(e.target.value)} type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area-lamina</label>
                                                <input disabled value={areaTotalCieloRazo} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area-1</label>
                                                <input placeholder='Ingresar Area 1' value={Medida1} onChange={e => setMedida1(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado2">Area-2</label>
                                                <input placeholder='Ingresar Area 2' value={Medida2} onChange={e => setMedida2(e.target.value)} type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Area</label>
                                                <input disabled value={totalMedidas} type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Area</label>
                                                <input disabled value={totalMedidas} type="text" />
                                          </div>
                                          <p>/</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area-Lamina</label>
                                                <input disabled value={areaTotalCieloRazo} type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total-Laminas</label>
                                                <input disabled value={totalLaminas} type="text" />
                                          </div>
                                    </div>




                              </div>}
                       
                        
                        {/* viguetas y omegas 5 */}
                        {/* contenedor 5  cielo razo omegas*/}
                        {optionSelection === 5 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Cantidad De Materiales</h1>
                                    <button onClick={viguetas} >Calcular</button>

                                    <div className="container__input">
                                          
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area </label>
                                                <input disabled value={totalMedidas} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1"> 1 Omega x m2 </label>
                                                <input disabled value={1}  type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Omegas</label>
                                                <input disabled value={omega} type="text"/>
                                          </div>
                                    </div>
                                    {/* viguetas */}
                                    <div className="container__input">
                                          
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area 2 </label>
                                                <input disabled value={totalMedidas} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1"> 0.5 vigueta x m2 </label>
                                                <input disabled value={0.50}  type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Viguettas</label>
                                                <input disabled value={vigueta} type="text"/>
                                          </div>
                                    </div>
                                    {/* estuco */}
                                    <div className="container__input">
                                          
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area </label>
                                                <input disabled value={totalMedidas} type="number" />
                                          </div>
                                          <p>/</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1"> 1 cuñete rinde 15m2 </label>
                                                <input disabled value={15}  type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total estuco</label>
                                                <input disabled value={estuco}  type="text"/>
                                          </div>
                                    </div>
                              </div>}
                        {/* pintura o estuco */}
                        {/* omegas 5 */}
                       
                        {/* tablas */}
                        {optionSelection === 1 &&
                              <div>
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
                              </div>}
                        {optionSelection === 2 &&
                              <div>
                                    {tabladosificadora && (
                                          <div className="flex-box box-dos">

                                                <h1 className='title'> Dosificación </h1>
                                                <table>
                                                      <tr>
                                                            <td>Proporcion</td>
                                                            <td>Cemento kg</td>
                                                            <td>Arena m3</td>

                                                      </tr>
                                                      <tr>
                                                            <th>1:2</th>
                                                            <th>610</th>
                                                            <th>0.97</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:3</th>
                                                            <th>454</th>
                                                            <th>1.09</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:4</th>
                                                            <th>364</th>
                                                            <th>1.16</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:5</th>
                                                            <th>302</th>
                                                            <th>1.20</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:6</th>
                                                            <th>261</th>
                                                            <th>1.20</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:7</th>
                                                            <th>228</th>
                                                            <th>1.25</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:8</th>
                                                            <th>203</th>
                                                            <th>1.25</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:10</th>
                                                            <th>166</th>
                                                            <th>1.25</th>

                                                      </tr>
                                                      <tr>
                                                            <th>1:12</th>
                                                            <th>141</th>
                                                            <th>1.25</th>

                                                      </tr>

                                                </table>
                                                <button onClick={() => setTabladosificadora(false)}>ocultar</button>



                                          </div>
                                    )}
                              </div>}
                        {/* tablas de cantidades totales */}
                        {optionSelection === 1 &&
                              <div className="flex-box box-tres">
                                    <h1 className='title'>Concretos</h1>
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
                                                <td>{desperdicioarena ? `${(desperdicioarena * 50)+(desperdicioarena*0.5) }`:''}</td>
                                          </tr>
                                          <tr>
                                                <td>3</td>
                                                <td>grava</td>
                                                <td>{cantidadgrava}</td>
                                                <td>{desperdicio ? `${(desperdicio * 50)+(desperdicio*0.5) }`:''}</td>
                                          </tr>
                                    </table>
                                    <button onClick={imprimirTabla}>Imprimir</button>
                              </div>}
                        {optionSelection === 2 &&
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
                                                <td>{totalcementoMortero ? `${totalcementoMortero} Bultos`:``}</td>
                                                <td>{totalcementoMortero ? `${totalcementoMortero * 50} Kilos`:``}</td>


                                          </tr>
                                          <tr>
                                                <td>2</td>
                                                <td>arena</td>
                                                <td>{arenaTotalValor ? `${arenaTotalValor} m3`:''}</td>
                                                <td>{arenaTotalValor ? ` ${arenaTotalValor * 50 +(arenaTotalValor*0.5) } Latas  `:''}</td>
                                          </tr>

                                    </table>
                                    <button onClick={imprimirTabla}>Imprimir</button>
                              </div>
                        }
                        {optionSelection === 3 && (
                              <div  className="flex-box box-tres">
                                    <h1 className='title'>Presupuesto De Cielo Razo</h1>
                                    <table className='footer__table'>

                                          <tr className='head__table-result'>
                                                <th className='title-result'>#</th>
                                                <th className='title-result'>Denominacion</th>
                                                <th className='title-result'>Cantidad</th>
                                                <th className='title-result'>Total + 0.50</th>
                                          </tr>
                                          <tr>
                                                <td>1</td>
                                                <td>Laminas</td>
                                                <td>{totalLaminas ? `${totalLaminas} Laminas`:''}</td>
                                                <td>{totalLaminas ? `${totalLaminas} Laminas`:''}</td>


                                          </tr>
                                          <tr>
                                                <td>2</td>
                                                <td>Viguettas</td>
                                                <td>{vigueta ? `${vigueta} Vigueta`:''}</td>
                                                <td>{vigueta ? `${vigueta} Vigueta`:''}</td>
                                          </tr>
                                          <tr>
                                                <td>3</td>
                                                <td>Omegas</td>
                                                <td>{omega ? `${omega} Omegas`:''}</td>
                                                <td>{omega ? `${omega} Omegas`:''}</td>
                                          </tr>
                                          <tr>
                                                <td>4</td>
                                                <td> Estuco</td>
                                                <td>{estuco ?  `${estuco} cuñete` :''}</td>
                                                <td>{estuco ? `${estuco * 50 } kilos`:'' }</td>
                                          </tr>
                                    </table>
                                    <button onClick={imprimirTabla}>Imprimir</button>
                              </div>
                        )}
                         {optionSelection === 5 && (
                              <div  className="flex-box box-tres">
                                    <h1 className='title'>Presupuesto De Cielo Razo</h1>
                                    <table className='footer__table'>

                                          <tr className='head__table-result'>
                                                <th className='title-result'>#</th>
                                                <th className='title-result'>Denominacion</th>
                                                <th className='title-result'>Cantidad</th>
                                                <th className='title-result'>Total + 0.50</th>
                                          </tr>
                                          <tr>
                                                <td>1</td>
                                                <td>Laminas</td>
                                                <td>{totalLaminas ? `${totalLaminas} Laminas`:''}</td>
                                                <td>{totalLaminas ? `${totalLaminas} Laminas`:''}</td>


                                          </tr>
                                          <tr>
                                                <td>2</td>
                                                <td>Viguettas</td>
                                                <td>{vigueta ? `${vigueta} Vigueta`:''}</td>
                                                <td>{vigueta ? `${vigueta} Vigueta`:''}</td>
                                          </tr>
                                          <tr>
                                                <td>3</td>
                                                <td>Omegas</td>
                                                <td>{omega ? `${omega} Omegas`:''}</td>
                                                <td>{omega ? `${omega} Omegas`:''}</td>
                                          </tr>
                                          <tr>
                                                <td>4</td>
                                                <td> Estuco</td>
                                                <td>{estuco ?  `${estuco} cuñete` :''}</td>
                                                <td>{estuco ? `${estuco * 50 } kilos`:'' }</td>
                                          </tr>
                                    </table>
                                    <button onClick={imprimirTabla}>Imprimir</button>
                              </div>
                        )}
                        
                  </div>
                  {modaluso && (

                        <Modo_uso setModaluso={setModaluso} />
                  )
                  }
            </div>
      );
};

export default Home;
