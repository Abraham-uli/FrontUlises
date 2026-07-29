import React, { useEffect, useState } from 'react'
import {BUs, tipoproveedor, sociedadesProveedor, motivosAltaProveedor, paisesOrigen, tiposRelacionProveedor, terminosPago, camposProductoActualizables, datosProveedorActualizables, documentosProveedor, razonSocial, SiNo} from '../materialReutilizable/RangosReusables';
import '../../Componentes/button.css';
import './../FormatoAutorizacionCambios.css';


function FormatoAutorizacionCambios() {
  const [tipoProveedor, setTipoProveedor] = useState("");
  const primeraetiqueta = tipoProveedor === "Importado" ? "Supplier Information" : "Formato alta de nuevo proveedor";
  const segundaetiqueta = tipoProveedor === "Importado" ? "QCI Policy & QCI Notice" : "Adendum";
  const terceretiqueta = tipoProveedor === "Importado" ? "Cuenta con VA Firmado" : "Resultado Auditoria finanzas";
  const cuartaetiqueta = tipoProveedor === "Importado" ? "Voided Invoice" : "Acta constitutiva";
  const quitaetiqueta = tipoProveedor === "Importado" ? "Letter AntiCorruption Policy" : "Claúsula Anti corrupción";
  const sextaetiqueta = tipoProveedor === "Importado" ? "Tax Id / BRN" : "Inscripcion RFC";
  const septimaetiqueta = tipoProveedor === "Importado" ? "Bank Information" : "Edo. Cta bancaria";
  const etiquetas = {
  Importado: ["Supplier Information", "QCI Policy & QCI Notice", "Cuenta con VA Firmado", "Voided Invoice", "Letter AntiCorruption Policy", "Tax Id / BRN", "Bank Information"],
  Nacional: [ "Formato alta de nuevo proveedor", "Adendum", "Resultado Auditoria finanzas", "Acta constitutiva", "Claúsula Anti corrupción", "Inscripcion RFC", "Edo. Cta bancaria"]};
  const listaEtiquetas = etiquetas[tipoProveedor] || etiquetas.Nacional;
  return (
    <div className="container-fluid py-2">
      <div className="row justify-content-end me-1 no-pdf">
        <div className="col-md-3 d-flex gap-2 mb-2 mt-2">
          <div className="input-group input-group-sm">
            <span className="input-group-text bg-white border-secondary-subtle fw-bold text-muted small"> Folio: </span>
            <input type="text" id="folioBusqueda" name="folioBusqueda" className="form-control form-control-sm text-center border-secondary-subtle fw-bold text-uppercase"/>
          </div>
          <button type="button" className="btn btn-primary btn-sm fw-bold px-4" onClick={() => {console.log('Buscar folio // Funcionalidad pendiente');}}>Buscar</button>
        </div>
      </div>
      <form
        className="container-fluid border bg-white p-3 autorizacion-form" onSubmit={(event) => {event.preventDefault();
          console.log('Guardar formulario//Validación pendiente');}}>
        <div className="row align-items-center mb-3">
          <div className="col-md-8">
            <h4 className="fw-bold text-center titulo-autorizacion">AUTORIZACIÓN DE CAMBIOS EN SAP</h4>
          </div>

          <div className="col-md-2">
            <label htmlFor="folio" className="form-label fw-bold small mb-1">FOLIO:</label>
            <input type="text" id="folio"name="folio" className="form-control form-control-sm text-center bg-light fw-bold text-danger"readOnly/>
          </div>

          <div className="col-md-2"> <label htmlFor="fecha" className="form-label fw-bold small mb-1"> FECHA:</label>
            <input type="date" id="fecha"name="fecha" className="form-control form-control-sm text-center"/>
          </div>
        </div>
        <section style={{alignItems:'center',display:'flex' , gap: '1rem' , border:'sold #EAEAEA 1px'}}>
                 <label style={{width:'105px' , textWrap:'pretty'}}>COMPRADOR:(GPO. DE COMPRAS)</label>
                    <select id='BU' className='form-select' style={{width:'95%'}}>
                      <option value="">Seleccione</option>
                      {BUs.map((item) => (<option key={item} value={item}>{item}</option>))}
                    </select>
                      <input type="text" id="BU" className="form-control form-control-sm border-0 border-bottom rounded-0 bg-transparent text-center" value={'[cerrado]'} readOnly />
                      <label style={{width:'105px' , textWrap:'pretty'}}>PLANEADOR:(PLANIF. NECESIDADES)</label>
                      <input type="text" id="BU" className="form-control form-control-sm border-0 border-bottom rounded-0 bg-transparent text-center" value={'[cerrado]'} readOnly />
        </section>
        
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <div className="fila-toggle">
              <span className="fw-bold">ALTA DE PROVEEDOR</span>

              <button type="button" className="btn btn-danger btn-sm fw-bold px-3" data-target="seccionAltaProveedor" aria-pressed="false"
                onClick={(event) => {const button = event.currentTarget; const section = document.getElementById(button.dataset.target);
                  const mostrar =
                    button.textContent.trim() === 'No'; button.className = mostrar ? 'btn btn-success btn-sm fw-bold px-3' : 'btn btn-danger btn-sm fw-bold px-3';
                  button.textContent = mostrar ? 'Sí' : 'No'; button.setAttribute('aria-pressed', String(mostrar));
                  if (section) {section.hidden = !mostrar;}}}>No</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fila-toggle"><span className="fw-bold">REACTIVAR PROVEEDOR</span>
              <button type="button"className="btn btn-danger btn-sm fw-bold px-3" data-target="seccionAltaProveedor" aria-pressed="false"
                onClick={(event) => { const button = event.currentTarget; const section = document.getElementById(button.dataset.target);
                  const mostrar =button.textContent.trim() === 'No';
                  button.className = mostrar ? 'btn btn-success btn-sm fw-bold px-3': 'btn btn-danger btn-sm fw-bold px-3';button.textContent = mostrar ? 'Sí' : 'No';
                  button.setAttribute('aria-pressed',String(mostrar));
                  if (section) {section.hidden = !mostrar;}}}>No</button>
            </div>
          </div>
        </div>
        <div className="titulo-seccion">ALTA PROVEEDOR</div>
          <section style={{textAlign: "center"}}
          id="seccionAltaProveedor" hidden> <div style={{textAlign: "left"}}></div>
          <div className="row g-3 p-3">
            <div className="col-md-4"><label htmlFor="tipoProveedor" className="form-label label-formato">Tipo de proveedor</label>
            <select id="tipoProveedor"name="tipoProveedor"className="form-select form-select-sm text-center"value={tipoProveedor}onChange={(e) => setTipoProveedor(e.target.value)}>
              <option value="">Selec.</option>{tipoproveedor.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
                    </div>
                    
                    <div className="col-md-4">
                      <label htmlFor="sociedad" className="form-label label-formato">Sociedad</label>
                        <select id="sociedad" name="sociedad"className="form-select form-select-sm text-center">
                          <option value="">Selec.</option>
                            {razonSocial.map((item) => (
                          <option key={item} value={item}>{item}
                            </option>))}
                            </select>
                    </div>
                    <div className="col-md-4">
                          <label htmlFor="razonSocial" className="form-label label-formato"> Razón social </label>
                        <input type="text" id="razonSocial" name="razonSocial" className="form-control form-control-sm text-center"/>
                    </div>
                   <section style={{alignItems:'center',display:'flex' , gap: '1rem' , border:'sold #0f0d0d 1px'}}> 
                      <div className="col-md-3">
              <label htmlFor="terminoPagoAlta" className="form-label label-formato">Término de pago</label>
              <input type="text" id="terminoPagoAlta" name="terminoPagoAlta" className="form-control form-control-sm text-center"/>
                  </div>
              <div className="col-md-4">
                <label htmlFor="terminoPagoAlta" className="form-label label-formato">Z689 100% AT SIGHT ( PROHIBIDO )</label>
              <input  type="text" id="BU" className="form-control form-control-sm border-0 border-bottom rounded-0 bg-transparent text-center" value={'[cerrado]'} readOnly />
                      </div>
                </section>

                  </div>
                  <div className="row g-1 p-1">
                        <div className="col-md-4">
                        <label htmlFor="motivoAlta" className="form-label label-formato">Motivo de alta</label>
                        <select id="motivoAlta" name="motivoAlta" className="form-select form-select-sm text-center">
                          <option value="">Selec.</option>
                          {motivosAltaProveedor.map((item) => (<option key={item} value={item}>{item}</option>))}
                        </select>
                        </div>
                    <div className="col-md-2">
                      <label htmlFor="paisOrigen" className="form-label label-formato">País de origen</label>
                      <select id="paisOrigen" name="paisOrigen" className="form-select form-select-sm text-center">
                        <option value="">Selec.</option>
                        {paisesOrigen.map((item) => (<option key={item} value={item}>{item}</option>))}
                        </select>
                    </div>
                    <div className="col-md-3">
              <label htmlFor="nombreCorto"className="form-label label-formato">Nombre corto</label>
              <input type="text" id="nombreCorto" name="nombreCorto" className="form-control form-control-sm text-center"/>
                  </div> 
                  <section style={{alignItems:'center',display:'flex' , gap: '1rem' , border:'sold #0f0d0d 1px'}}> 
                    
                    <div className="col-md-1">
              <label htmlFor="tipoproveedor" className="form-label label-formato">{primeraetiqueta}</label>
                <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
                </div><div className="col-md-1">
              <label htmlFor="tipoproveedor" className="form-label label-formato">{segundaetiqueta}</label>
                <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
              </div><div className="col-md-1">
              <label htmlFor="tipoproveedor" className="form-label label-formato">{terceretiqueta}</label>
                <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
              </div><div className="col-md-1">
              <label htmlFor="tipoproveedor" className="form-label label-formato">{cuartaetiqueta}</label>
                <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
              </div><div className="col-md-1">
              <label htmlFor="tipoproveedor" className="form-label label-formato">{quitaetiqueta}</label>
                <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
              </div><div className="col-md-1">
              <label htmlFor="tipoproveedor" className="form-label label-formato">{sextaetiqueta}</label>
                <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
              </div><div className="col-md-1">
                <label htmlFor="tipoproveedor" className="form-label label-formato">{septimaetiqueta}</label>
                <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
              </div><div className="col-md-1">
                  </div>
                  </section>
              </div>
            </section>
            <section className="seccion-formato ">
              <div className="titulo-seccion adm-right-panel d-flex justify-content-between align-items-center">
                <span>SE TRABAJA A TRAVÉS DE</span>
                <div className="d-flex gap-2">
                  <select id="BU" className="form-select-sm text-center"><option value="">Seleccione</option>{BUs.map((item) => (<option key={item} value={item}>{item}</option>))}</select>
                  <select id="tipoRelacionProveedor" name="tipoRelacionProveedor" className="ajuste-ancho form-select-sm text-center"><option value="">Selec.</option>{SiNo.map((item) => (<option key={item} value={item}>{item}</option>))}
                  </select>
                  </div>
                  </div>
                      <div className="row g-2 p-3">
                        <div className="col-md-2"><label htmlFor="tipoRelacionProveedor" className="form-label label-formato">Tipo de relación</label>
                          <select id="tipoRelacionProveedor" name="tipoRelacionProveedor"className="form-select form-select-sm text-center">
                            <option value="">Selec.</option>
                            {tiposRelacionProveedor.map((item) => (<option key={item} value={item}>{item}</option>))}
                          </select>
                        </div>
                        <div className="col-md-2"><label htmlFor="proveedorPrimario" className="form-label label-formato">Proveedor primario</label>
                          <input type="text" id="proveedorPrimario" name="proveedorPrimario" className="form-control form-control-sm text-center celda-consulta" placeholder="Consulta" readOnly/>
                        </div>
            
                        <div className="col-md-2">
                          <label htmlFor="idProveedorRelacion"className="form-label label-formato">ID proveedor / Vendor</label>
                          <input type="text" id="idProveedorRelacion" name="idProveedorRelacion" className="form-control form-control-sm text-center celda-consulta" placeholder="Consulta"readOnly/>
                        </div>
                        </div>
                        </section>
            </form>
      </div>
);
}
      export default FormatoAutorizacionCambios;