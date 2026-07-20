import * as React from 'react';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import image from './Logo_Truper.jpg';
import { Stack } from 'react-bootstrap';
import styles from "./Administrador_Documentos.module.css";

function Menu_onboarding() {

    const momentodia = ()=>{
        const hora = new Date()
        const horadia = hora.getHours();
        if (horadia < 12){
            return "¡Buenos Dias!"  
        }else if(horadia >= 12 && horadia < 18){
            return "¡Buenas Tardes!"         
        }else{
            return "¡Buenas Noches!"          
        }   
    }
return (
<div style={{ position: 'relative',marginLeft:'-20%' , width:'130%' , minHeight: '15vh'  }}>
    <div style={{ position: 'absolute',
        top: 0, left: 0,width: '100%', height: '100%',backgroundImage: `url(${image})`, imgStyle: { objectFit: 'cover' }, backgroundSize: 'cover',
        backgroundPosition: 'center', backgroundRepeat: 'repeat', zIndex: 0 }}    />
    <div style={{ position: 'relative', zIndex: 1 }}>;
        <Stack direction='horizontal'  >
            <h2 style={{marginLeft:'30%', color:'#FF6400', fontSize:'70px', textAlign:'center', fontFamily:'serif'}} > <b>{momentodia()}</b></h2> 
                <input style={{width:'20%' , marginLeft:'10%'}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </Stack>


        </div>
            <span className={styles.mower} style={{ marginLeft: "30%", fontSize: "40px" }}>
                🚜  🔨 🦼
            </span> 
</div>
  );
}

export default Menu_onboarding