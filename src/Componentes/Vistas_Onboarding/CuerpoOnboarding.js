import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';
import onboarding from './learning-journey.png';
import process from './process.png';
import notification from './notification-bell.png';
import familytree from './family-tree.png';
import deadline from './deadline.png';
import procedure from './procedure.png';
import { FormatColorText } from '@mui/icons-material';
 
function CuerpoOnboarding() {
return (
  <div >
    <div style={{padding:'5%' , marginLeft:'1%' ,display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:'100px', height:'26rem', textAlign:'center' , minWidth:'80%'  }} >
      {/*<Card style={{borderRadius:'22px', width: '15rem', verticalAlign:'middle', display:'flex',alignItems:'top',justifyContent:'center',color:'#2E4D5B' ,backgroundColor:'#ffffff'}}>*/}
        <Card style={{borderRadius:'0px', width: '36rem', placeItems:'center', verticalAlign:'middle', borderRadius: '0px', backgroundColor:'#e2e2e2ef' }}
        <Card.Body>
          <Card.Title>Onboarding</Card.Title>
          <Card.Text>
                
          </Card.Text>
          {/* <button className='btn btn-warning' style={{color:'white' , width:'70%', backgroundColor:'#ff6400'}}><Link to="/importaciones/AdmonDocs"  className='dropdown-item'><strong>Ir...</strong></Link></button> */}
        </Card.Body>
        <a href="#"><img src={onboarding} title="Onboarding" width="75%" height="80%" verticalalign="middle" className="block"></img></a>
      </Card>
      <Card style={{borderRadius:'22px', width: '15rem',color:'white' ,backgroundColor:'#2E4D5B'}}>
        <Card.Body>
          <Card.Title>Documentación</Card.Title>
          <Card.Text>
                
          </Card.Text>
          {/* <button className='btn btn-warning' style={{color:'white' , width:'70%', backgroundColor:'#ff6400'}}><Link to="/importaciones/Sesiones"  className='dropdown-item'><strong>Ir...</strong></Link></button> */}
        </Card.Body>
       <a href="#"><img src={process} title="Documentación" width="75%" height="80%" verticalalign="middle" className="block"></img></a>
      </Card>
      <Card style={{borderRadius:'22px', width: '15rem',color:'#2E4D5B', backgroundColor:'#ffffff',fontSize:'100px' }}>
        <Card.Body>
          <Card.Title>Recordatorios</Card.Title>
          <Card.Text>
                
          </Card.Text>
          {/* <button className='btn btn-warning' style={{color:'white' , width:'70%', backgroundColor:'#ff6400'}}><Link to="/importaciones/AdmonDocs"  className='dropdown-item'><strong>Ir...</strong></Link></button> */}
          <img src={notification} title="Recordatorios" width="75%" height="80%" verticalalign="center" className="block"></img>
        </Card.Body>
      </Card>
/*invertitr el tamaño de los botones*/

    </div>
    {/* <section style={{marginTop:'2%',border:'1px solid #bdbdbdef' , height:'20rem' , backgroundColor:'white', borderRadius:'10px'}}>     </section>
*/}
<section style={{padding:'0%' , marginLeft:'-10%' ,display: 'grid', gridTemplateColumns: 'repeat(3, 0fr)', height:'20rem', gap:'0px', textAlign:'Center' , minWidth:'0%'  }} >
      {/*<Card style={{borderRadius:'0px', width: '36rem', placeItems:'center', verticalAlign:'middle', borderRadius: '0px', backgroundColor:'#e2e2e2ef' }}>*/}
        <Card style={{borderRadius:'22px', width: '15rem', verticalAlign:'middle', display:'flex',alignItems:'top',justifyContent:'center',color:'#2E4D5B' ,backgroundColor:'#ffffff'}}>
        <Card.Body>
          <Card.Title>Organigrama</Card.Title>
          <Card.Text>
                Organigrama
          </Card.Text>
          {/* <button className='btn btn-warning' style={{color:'white' , verticalAlign:'middle', width:'100%', backgroundColor:'#ff6400'}}><Link to="/importaciones/Sesiones"  className='dropdown-item'><strong>Ir...</strong></Link></button> */}
          <img src={familytree} title="Organigrama" width="65%" height="30%" verticalAlign="middle" className="block"></img>
        </Card.Body>
      </Card>
      <Card style={{borderRadius:'0px', width: '30rem', placeItems:'center', verticalAlign:'middle', backgroundColor:'#ffffffef' }}>
        <Card.Body>
          <Card.Title>Documentos</Card.Title>
          <Card.Text>
                Examenes Pendientes
          </Card.Text>
          {/* <button className='btn btn-warning' style={{color:'white' , verticalAlign:'middle', backgroundColor:'#ff6400'}}><Link to="/importaciones/AdmonDocs"  className='dropdown-item'><strong>Ir...</strong></Link></button> */}
          <img src={deadline} title="Examenes Pendientes" width="75%" height="30%" verticalAlign="middle" className="block"></img>
        </Card.Body>
      </Card>
      <Card style={{borderRadius:'0px', width: '30rem', placeItems:'center', verticalAlign:'middle', backgroundColor:'rgba(226, 226, 226, 0.94)' }}>
        <Card.Body>
          <Card.Title>Nuevo Documento</Card.Title>
          <Card.Text>
                Nuevo Documento
          </Card.Text>
          {/* <button className='btn btn-warning' style={{color:'white' , verticalAlign:'middle', backgroundColor:'#ff6400'}}><Link to="/importaciones/Sesiones"  className='dropdown-item'><strong>Ir...</strong></Link></button> */}
          <img src={procedure} title="Nuevo Documento" width="75%" height="30%" verticalAlign="middle" className="block"></img>
        </Card.Body>
      </Card>
 </section>
  </div>  
  );
}
 
export default CuerpoOnboarding