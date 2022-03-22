import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(cantidad, desc) {
    return { cantidad, desc };
  }
  
const rows = [
    createData('$20', 159),
    createData('$50', 237),
    createData('$100', 262),
    createData('$200', 305),
    createData('$500', 356),
    createData('$100', 356)
];

export const DineroDisponible = () => {
  return (
    <>
     <div className='container'>
       <div className='header__reponerTarjeta'>
        <p>Consultar dinero disponible</p>
        <Button variant="outlined" color="success">Regresar</Button>
       </div>
       <div className='date__reponerTarjeta'>
        <p style={{fontSize:"25px"}}>Dinero en total</p>
        <div style={{display:"flex"}}>
          <p style={{fontSize:"25px", marginRight:"2rem"}}>Fecha</p>
          <p style={{fontSize:"25px"}}>20 de Marzo de 2022</p>
        </div>
      </div>

      <div className='containerTable__dinero'>
          
      </div>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Denominacion</TableCell>
                <TableCell>Cantidad</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell>{row.cantidad}</TableCell>
                <TableCell >{row.desc}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>

      <div style={{margin: "1rem"}}>
          <p style={{fontWeight: "bold"}}>Dinero Disponible: <span>$25,500</span></p>
      </div>
    </>
  )
}
