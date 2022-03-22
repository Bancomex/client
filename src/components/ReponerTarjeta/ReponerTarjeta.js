import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../ReponerTarjeta/styles.css'



export const ReponerTarjeta = () => {
  return (
     <>

     <div className='container'>
       <div className='header__reponerTarjeta'>
        <p>Reponer Tarjeta</p>
        <Button variant="outlined" color="success">Regresar</Button>
       </div>
       <div className='date__reponerTarjeta'>
        <p style={{fontSize:"25px"}}>Ingresar Datos</p>
        <div style={{display:"flex"}}>
          <p style={{fontSize:"25px", marginRight:"2rem"}}>Fecha</p>
          <p style={{fontSize:"25px"}}>20 de Marzo de 2022</p>
        </div>
       </div>

       <form className='form__reponerTarjeta'>
        <TextField
            className='input__reponerTarjeta'
            id="nombre"
            label="Nombre del cliente"
            defaultValue=""
          />
        <TextField
          className='input__reponerTarjeta'
          id="numero"
          label="Numero de cuenta"
          defaultValue=""
        />
        <TextField
          className='input__reponerTarjeta'
          id="motivo"
          label="Motivo de reposicion"
          defaultValue=""
        />
        <Button variant="contained" color="success" style={{marginTop: "2rem"}}> 
            Reponer Tarjeta
        </Button>

       </form>


     </div>

     </>
    

  )
}
