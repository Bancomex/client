import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../ReponerTarjeta/styles.css'



export const ReponerTarjetaSolicitud = () => {
  return (
     <>

     <div className='container'>
       <div className='header__reponerTarjeta'>
        <p>Reponer Tarjeta</p>
        <Button variant="outlined" color="success">Regresar</Button>
       </div>
       <div className='date__reponerTarjeta'>
        <p style={{fontSize:"25px"}}>Ingresar Datos de gerente (Solicitud de acceso gerencial)</p>
        <div style={{display:"flex"}}>
          <p style={{fontSize:"25px", marginRight:"2rem"}}>Fecha</p>
          <p style={{fontSize:"25px"}}>20 de Marzo de 2022</p>
        </div>
       </div>

       <form className='form__reponerTarjeta'>
        <TextField
            className='input__reponerTarjeta'
            id="usuario"
            label="Usuario"
            defaultValue=""
          />
        <TextField
          className='input__reponerTarjeta'
          id="password"
          label="Contraseña"
          defaultValue=""
        />

        <div>
            <Button variant="contained" color="success" style={{marginTop: "2rem", marginRight: "1rem" }}> 
                Atras
            </Button>
            <Button variant="contained" color="error" style={{marginTop: "2rem"}}> 
                Acceso
            </Button>
        </div>


       </form>


     </div>

     </>
    

  )
}