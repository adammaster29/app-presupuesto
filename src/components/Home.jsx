
import React, { useState } from 'react';
import Navegacion from './Navegacion';
import Modo_uso from './Modo_uso';

const Home = ({ dark, modeDark, tabladosificadora, setModaluso, openTable, setTabladosificadora, tableUso, modaluso }) => {
      //VARILLA
      const [largoVarilla, setLargoVarilla] = useState("");
      const [doblesVarilla, setDoblesVarilla] = useState("");
      const [cantidadVarilla, setCantidadVarilla] = useState("");
      const [totalVarilla, setTotalVarilla] = useState("");
      const [corteVarilla, setCorteVarilla] = useState("");
      const [totalVarillaCorte, setTotalVarillaCorte] = useState("");
      const [totalEstribos, setTotalEstribos] = useState("");
      // BLOQUES
      const [largoBlock, setLargoBlock] = useState('');
      const [cantidadBlock, setCantidadBlock] = useState('');
      const [altoBlock, setAltoBlock] = useState('');
      const [totalBlock, setTotalBlock] = useState();

      const bloques = () => {
            const block = (largoBlock * altoBlock) * cantidadBlock;
            setTotalBlock(block.toFixed(0))

      }

      // FUNCION DE OBTENER LAS VARILLAS 
      const varillasCantidadesTotales = () => {
            const total = ((largoVarilla * cantidadVarilla + (doblesVarilla * 2)) / 6) * 1.10;
            const totalCorte = largoVarilla * corteVarilla;
            const totalEstribos = largoVarilla * 7;

            setTotalVarilla(total.toFixed(2));
            setTotalVarillaCorte(totalCorte.toFixed(2));
            setTotalEstribos(totalEstribos.toFixed(0));
      }
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
            const CementoValores = (cementoValor / 50) * areaTotalMortero;
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
      const [valor1CieloRazo, setValor1CieloRazo] = useState(''),//valor 1
            [valor2CieloRazo, setValor2CieloRazo] = useState(''), //valor 2
            [areaTotalCieloRazo, setAreaTotalCieloRazo] = useState(''),
            [Medida1, setMedida1] = useState(''),
            [Medida2, setMedida2] = useState(''),
            [totalMedidas, setTotalMedidas] = useState(''),
            [totalLaminas, setTotalLaminas] = useState('');
      // omegas viguetas estuco
      const [omega, setOmega] = useState();
      const [vigueta, setVigueta] = useState();
      const [estuco, setEstuco] = useState();
      // laminas
      const cieloRazo = () => {
            const cieloRazoarea = (valor1CieloRazo * valor2CieloRazo);
            const medidadasTolales = Medida1 * Medida2;
            const totalLamina = medidadasTolales / cieloRazoarea;
            setAreaTotalCieloRazo(cieloRazoarea);
            setTotalMedidas(medidadasTolales);
            setTotalLaminas(totalLamina.toFixed(2));
      }
      const viguetas = () => {
            const omegas = totalMedidas * 1;
            const viguetas = totalMedidas * 0.50;
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
                  setDesperdicio(gravilla.toFixed(2));
                  setDesperdicioarena(arenaTotal.toFixed(2));

            }
      }

      const imprimirTabla = () => {
            // if (area === "" || area2 === "" || area3 === "") {
            //       alert("Ingresar valores para poder imprimir");
            // } else {
                  const contenidoTabla = document.querySelector('.footer__table').outerHTML;
                  const ventanaImpresion = window.open('', '_blank');
                  ventanaImpresion.document.write('<html><head><title>Tabla para imprimir</title></head><body>');
                  ventanaImpresion.document.write(contenidoTabla);
                  ventanaImpresion.document.write('</body></html>');
                  ventanaImpresion.document.close();
                  ventanaImpresion.print();
            // }
      };
      const [amburguesa, setAmburguesa] = useState(false)
      const menuAmburguesa = () => {
            setAmburguesa(!amburguesa);
      }

      return (
            <div className='padre__home'>
                  <i onClick={menuAmburguesa} className='bx bx-menu'></i>
                  {amburguesa && <Navegacion menuAmburguesa={menuAmburguesa} optionsChange={optionsChange} dark={dark} modeDark={modeDark} tableUso={tableUso} openTable={openTable} />}
                  <div className="home__flex">
                        {/* contenedor 1 concreto */}
                        {optionSelection === 1 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Presupuesto - Concreto</h1>
                                    <button className='notranslate' onClick={areaValor}>Calcular</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Ancho</label>
                                                <input value={area} onChange={e => setArea(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Largo</label>
                                                <input value={area2} onChange={e => setArea2(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Espesor</label>
                                                <input value={area3} onChange={e => setArea3(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Cemento</label>
                                                <input value={cemento} onChange={e => setCemento(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} placeholder='disable' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidcemento} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Grava</label>
                                                <input value={grava} onChange={e => setGrava(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} placeholder='disable' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={cantidadgrava} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Arena</label>
                                                <input value={arena} onChange={e => setArena(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={igual} placeholder='disable' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input value={cantidadarena} placeholder='disable' disabled type="text" />
                                          </div>
                                    </div>


                              </div>
                        }
                        {/* contenedor 2  mortero*/}
                        {optionSelection === 2 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Presupuesto - Mortero</h1>
                                    <button className='notranslate' onClick={morteroFuncion}>Calcular</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Ancho</label>
                                                <input value={valor1} onChange={e => setValor1(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Largo</label>
                                                <input value={valor2} onChange={e => setValor2(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Espesor</label>
                                                <input value={espesorValor} onChange={e => setEspesorValor(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={totalMortero} placeholder='disable' type="text" />
                                          </div>
                                    </div>
                                    {/* cemento mortero */}
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Cemento</label>
                                                <input value={cementoValor} onChange={e => setCementoValor(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={totalMortero} placeholder='disable' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input disabled value={totalcementoMortero} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    {/* arena mortero*/}

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Arena</label>
                                                <input value={arenaValor} onChange={e => setArenaValor(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area</label>
                                                <input disabled value={totalMortero} placeholder='disable' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total</label>
                                                <input value={arenaTotalValor} placeholder='disable' disabled type="text" />
                                          </div>
                                    </div>


                              </div>
                        }


                        {/* contenedor 3  cielo razo*/}
                        {optionSelection === 3 &&
                              <div className="flex-box box-uno">
                                    <h1 className="title">Cantidad De Laminas</h1>

                                    <button className='notranslate' onClick={cieloRazo} >Calcular</button>


                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Ancho-lamina </label>
                                                <input placeholder='ingresar' value={valor1CieloRazo} onChange={e => setValor1CieloRazo(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Largo-lamina </label>
                                                <input placeholder='ingresar' value={valor2CieloRazo} onChange={e => setValor2CieloRazo(e.target.value)} type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area-lamina</label>
                                                <input disabled value={areaTotalCieloRazo} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Ancho</label>
                                                <input placeholder='Ingresar' value={Medida1} onChange={e => setMedida1(e.target.value)} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado2">Largo</label>
                                                <input placeholder='Ingresar' value={Medida2} onChange={e => setMedida2(e.target.value)} type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Area</label>
                                                <input disabled value={totalMedidas} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Area</label>
                                                <input disabled value={totalMedidas} placeholder='disable' type="text" />
                                          </div>
                                          <p>/</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area-Lamina</label>
                                                <input disabled value={areaTotalCieloRazo} placeholder='disable' type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total-Laminas</label>
                                                <input disabled value={totalLaminas} placeholder='disable' type="text" />
                                          </div>
                                    </div>




                              </div>}


                        {optionSelection === 4 &&
                              <div className="flex-box box-uno varillas-block">
                                    <h1 className="title">Varillas Vigas</h1>
                                    <button className='notranslate ' onClick={varillasCantidadesTotales}>Calcular</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Metros-L</label>
                                                <input value={largoVarilla} onChange={e => setLargoVarilla(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>+</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">doblés-Va</label>
                                                <input value={doblesVarilla} onChange={e => setDoblesVarilla(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Cant-Va</label>
                                                <input value={cantidadVarilla} onChange={e => setCantidadVarilla(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Varillas</label>
                                                <input disabled value={totalVarilla} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Long-corte</label>
                                                <input value={corteVarilla} onChange={e => setCorteVarilla(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>

                                          <div className='input__label'>
                                                <label htmlFor="lado1">largo</label>
                                                <input disabled value={largoVarilla} placeholder='disable' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total-Varilla</label>
                                                <input disabled value={totalVarillaCorte} placeholder='disable' type="text" />
                                          </div>
                                    </div>

                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">1 metro</label>
                                                <input value={7} disable type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">largo</label>
                                                <input disabled value={largoVarilla} placeholder='disable' type="number" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Estribos</label>
                                                <input disabled value={totalEstribos} placeholder='disable' type="text" />
                                          </div>
                                    </div>
                                    <h1 className="title">Bloques</h1>
                                    <button className='notranslate' onClick={bloques}>Calcular Block</button>
                                    <div className="container__input">
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Area total</label>
                                                <input value={largoBlock} onChange={e => setLargoBlock(e.target.value)} placeholder='ingresar' type="number" />
                                          </div>
                                          {/* <div className='input__label'>
                                                <label htmlFor="lado1">Ancho</label>
                                                <input value={anchoBlock} onChange={e => setAnchoBlock(e.target.value)} placeholder='ingresar' type="number" />
                                          </div> */}
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Alto</label>
                                                <input value={altoBlock} placeholder='ingresar' onChange={e => setAltoBlock(e.target.value)} type="text" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">cant-Block</label>
                                                <input disable value={cantidadBlock} onChange={e => setCantidadBlock(e.target.value)} placeholder='ingresar' type="text" />
                                          </div>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total-Block</label>
                                                <input value={totalBlock} placeholder='disable' type="text" />
                                          </div>
                                    </div>


                              </div>
                        }
                        {/* viguetas y omegas 5 */}
                        {/* contenedor 5  cielo razo omegas*/}
                        {optionSelection === 5 &&
                              <div className="flex-box  new__flex-uno ">
                                    <h1 className="title">Cielo Raso</h1>
                                    <button className='notranslate' onClick={viguetas} >Calcular</button>

                                    <div className="container__input">

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Area</label>
                                                <input placeholder='disable' disabled value={totalMedidas} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1"> Omega </label>
                                                <input disabled value={1} type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Omegas</label>
                                                <input placeholder='disable' disabled value={omega} type="text" />
                                          </div>
                                    </div>
                                    {/* viguetas */}
                                    <div className="container__input">

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Area</label>
                                                <input placeholder='disable' disabled value={totalMedidas} type="number" />
                                          </div>
                                          <p>x</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">vigueta </label>
                                                <input disabled value={0.50} type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Viguetas</label>
                                                <input placeholder='disable' disabled value={vigueta} type="text" />
                                          </div>
                                    </div>
                                    {/* estuco */}
                                    <div className="container__input">

                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total Area </label>
                                                <input placeholder='disable' disabled value={totalMedidas} type="number" />
                                          </div>
                                          <p>/</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">cuñete</label>
                                                <input disabled value={15} type="number" />
                                          </div>

                                          <p>=</p>
                                          <div className='input__label'>
                                                <label htmlFor="lado1">Total estuco</label>
                                                <input placeholder='disable' disabled value={estuco} type="text" />
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
                                                <table className='table__proporcion'>
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
                                                <button className='notranslate btn__ocultar btn-table' onClick={() => setTabladosificadora(false)}>ocultar</button>



                                          </div>
                                    )}
                              </div>}
                        {/* tabla mortero */}
                        {optionSelection === 2 &&
                              <div>
                                    {tabladosificadora && (
                                          <div className="flex-box box-dos">

                                                <h1 className='title'> Dosificación </h1>
                                                <table className='table__proporcion'>
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
                                                <button className='notranslate btn__ocultar btn-table' onClick={() => setTabladosificadora(false)}>ocultar</button>



                                          </div>
                                    )}
                              </div>}
                        {/* tabla cielo razo */}
                        {optionSelection === 3 &&
                              <div>
                                    {tabladosificadora && (
                                          <div className="flex-box box-dos">

                                                <h1 className='title'> Dosificación </h1>
                                                <table className='table__proporcion'>
                                                      <tr>
                                                            <td>Tipo-Lamina</td>
                                                            <td>Largo</td>
                                                            <td>Ancho</td>
                                                            <td>espesor</td>

                                                      </tr>
                                                      <tr>
                                                            <th>yesoCarton</th>
                                                            <th>2.40</th>
                                                            <th> 1.20</th>
                                                            <th>12.5mm o 15mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>EterBoard</th>
                                                            <th>2.44</th>
                                                            <th>1.22</th>
                                                            <th>8mm o 10mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>Pvc</th>
                                                            <th>6</th>
                                                            <th>0.30</th>
                                                            <th>8mm o 10mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>Icopor</th>
                                                            <th>1.22</th>
                                                            <th>0.61</th>
                                                            <th>18mm o 20mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>Escayola</th>
                                                            <th>0.60</th>
                                                            <th>0.60</th>
                                                            <th>20mm</th>

                                                      </tr>



                                                </table>
                                                <button className='notranslate btn__ocultar btn-table' onClick={() => setTabladosificadora(false)}>ocultar</button>



                                          </div>
                                    )}
                              </div>}
                        {/* tabla varillas */}
                        <div className='table__varilla'>
                              {/* table varillas  */}
                              {optionSelection === 4 &&
                                    <div>
                                          {tabladosificadora && (
                                                <div className="  dos-varillas">

                                                      <h1 className='title subtilte'> Calibre varillas </h1>
                                                      <table className='table__proporcion'>
                                                            <tr>
                                                                  <td>Calibre</td>
                                                                  <td>espesor</td>

                                                            </tr>
                                                            <tr>
                                                                  <th>5/8</th>
                                                                  <th>12.5mm o 15mm</th>

                                                            </tr>
                                                            <tr>
                                                                  <th>5/8</th>
                                                                  <th>12.5mm o 15mm</th>

                                                            </tr>



                                                      </table>


                                                </div>
                                          )}
                                    </div>}
                              {/* table  block */}
                              {optionSelection === 4 &&
                                    <div>
                                          {tabladosificadora && (
                                                <div className=" dos-varillas">

                                                      <h1 className='title subtilte'> block </h1>
                                                      <table className='table__proporcion'>
                                                            <tr>
                                                                  <td>Block</td>
                                                                  <td>Cantidad</td>

                                                            </tr>
                                                            <tr>
                                                                  <th>parado</th>
                                                                  <th>14</th>

                                                            </tr>
                                                            <tr>
                                                                  <th>Acostado</th>
                                                                  <th>28</th>

                                                            </tr>



                                                      </table>
                                                      <button className='notranslate btn__ocultar btn-table' onClick={() => setTabladosificadora(false)}>ocultar</button>



                                                </div>
                                          )}
                                    </div>}
                        </div>

                        {/* tabla omegas */}
                        {optionSelection === 5 &&
                              <div>
                                    {tabladosificadora && (
                                          <div className="flex-box box-dos new__flex-dos">

                                                <h1 className='title'> Dosificación </h1>
                                                <table className='table__proporcion'>
                                                      <tr>
                                                            <td>#</td>
                                                            <td> Tipo</td>
                                                            <td> Diametro</td>

                                                      </tr>
                                                      <tr>
                                                            <th>18</th>
                                                            <th>1-1/4 pulg</th>
                                                            <th>31.75mm</th>

                                                      </tr>
                                                      <tr>

                                                            <th>16</th>
                                                            <th>1-1/18 pulg</th>
                                                            <th>28.57mm</th>
                                                      </tr>
                                                      <tr>
                                                            <th>14</th>
                                                            <th>1 pulg</th>
                                                            <th>24.4mm</th>
                                                      </tr>
                                                      <tr>
                                                            <th>12</th>
                                                            <th>7/8 pulg</th>
                                                            <th>22.22mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>10</th>
                                                            <th>3/4</th>
                                                            <th>19.0.5mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>8</th>
                                                            <th>1/2 pulg</th>
                                                            <th>12.7mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>6</th>
                                                            <th>3/8</th>
                                                            <th>9.52mm</th>

                                                      </tr>
                                                      <tr>
                                                            <th>4</th>
                                                            <th>1/4</th>
                                                            <th>6.35mm</th>

                                                      </tr>

                                                </table>
                                                <button className='notranslate btn__ocultar btn-table' onClick={() => setTabladosificadora(false)}>ocultar</button>



                                          </div>
                                    )}
                              </div>}
                        {/* *******************Nuevas tablas****************************** */}
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
                                                <td>{desperdicioarena ? `${(desperdicioarena * 50) + (desperdicioarena * 0.5)}` : ''}</td>
                                          </tr>
                                          <tr>
                                                <td>3</td>
                                                <td>grava</td>
                                                <td>{cantidadgrava}</td>
                                                <td>{desperdicio ? `${(desperdicio * 50) + (desperdicio * 0.5)}` : ''}</td>
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
                                                <td>{totalcementoMortero ? `${totalcementoMortero} Bultos` : ``}</td>
                                                <td>{totalcementoMortero ? `${totalcementoMortero * 50} Kilos` : ``}</td>


                                          </tr>
                                          <tr>
                                                <td>2</td>
                                                <td>arena</td>
                                                <td>{arenaTotalValor ? `${arenaTotalValor} m3` : ''}</td>
                                                <td>{arenaTotalValor ? ` ${arenaTotalValor * 50 + (arenaTotalValor * 0.5)} Latas  ` : ''}</td>
                                          </tr>

                                    </table>
                                    <button onClick={imprimirTabla}>Imprimir</button>
                              </div>
                        }
                        {optionSelection === 3 && (
                              <div className="flex-box box-tres">
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
                                                <td>{totalLaminas ? `${totalLaminas} Laminas` : ''}</td>
                                                <td>{totalLaminas ? `${totalLaminas} Laminas` : ''}</td>


                                          </tr>
                                          <tr>
                                                <td>2</td>
                                                <td>Viguettas</td>
                                                <td>{vigueta ? `${vigueta} Vigueta` : ''}</td>
                                                <td>{vigueta ? `${vigueta} Vigueta` : ''}</td>
                                          </tr>
                                          <tr>
                                                <td>3</td>
                                                <td>Omegas</td>
                                                <td>{omega ? `${omega} Omegas` : ''}</td>
                                                <td>{omega ? `${omega} Omegas` : ''}</td>
                                          </tr>
                                          <tr>
                                                <td>4</td>
                                                <td> Estuco</td>
                                                <td>{estuco ? `${estuco} cuñete` : ''}</td>
                                                <td>{estuco ? `${estuco * 50} kilos` : ''}</td>
                                          </tr>
                                    </table>
                                    <button onClick={imprimirTabla}>Imprimir</button>
                              </div>
                        )}
                        {/* TABLE VARILLA */}
                        {optionSelection === 4 && (
                              <div className="flex-box box-tres">
                                    <h1 className='title'> Varillas y block</h1>
                                    <table className='footer__table'>

                                          <tr className='head__table-result'>
                                                <th className='title-result'>#</th>
                                                <th className='title-result'>Denominacion</th>
                                                <th className='title-result'>Cantidad</th>

                                          </tr>
                                          <tr>
                                                <td>1</td>
                                                <td>varillas</td>
                                                <td>{totalVarilla ? `${totalVarilla} Varillas` : ''}</td>



                                          </tr>
                                          <tr>
                                                <td>2</td>
                                                <td> Varilla de Estribo</td>
                                                <td>{totalVarillaCorte ? `${totalVarillaCorte} varilla` : ''}</td>

                                          </tr>
                                          <tr>
                                                <td>3</td>
                                                <td> Estribo</td>
                                                <td>{totalEstribos ? `${totalEstribos} Estribo` : ''}</td>

                                          </tr>
                                          <tr>
                                                <td>4</td>
                                                <td> Block</td>
                                                <td>{totalBlock ? `${totalBlock} Block` : ''}</td>

                                          </tr>

                                    </table>
                                    <button onClick={imprimirTabla}>Imprimir</button>
                              </div>
                        )}
                        {optionSelection === 5 && (
                              <div className="flex-box box-tres new__flex-tres">
                                    <h1 className='title'>Presupuesto De Cielo Raso</h1>
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
                                                <td>{totalLaminas ? `${totalLaminas} Laminas` : ''}</td>
                                                <td>{totalLaminas ? `${totalLaminas} Laminas` : ''}</td>


                                          </tr>
                                          <tr>
                                                <td>2</td>
                                                <td>Viguettas</td>
                                                <td>{vigueta ? `${vigueta} Vigueta` : ''}</td>
                                                <td>{vigueta ? `${vigueta} Vigueta` : ''}</td>
                                          </tr>
                                          <tr>
                                                <td>3</td>
                                                <td>Omegas</td>
                                                <td>{omega ? `${omega} Omegas` : ''}</td>
                                                <td>{omega ? `${omega} Omegas` : ''}</td>
                                          </tr>
                                          <tr>
                                                <td>4</td>
                                                <td> Estuco</td>
                                                <td>{estuco ? `${estuco} cuñete` : ''}</td>
                                                <td>{estuco ? `${estuco * 50} kilos` : ''}</td>
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
