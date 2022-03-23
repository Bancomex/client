import * as React from 'react'
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import { Container, Divider, Stack } from '@mui/material';
import { Retiro } from './Retiro';
import { Deposito } from './Deposito';
import { MenuDrawer } from './MenuDrawer';


export function Headoc(){
    
    const options = {day:'numeric',month:'long', year:'numeric'};
    const dateToday = new Date();
    const stringDate = dateToday.toLocaleDateString('es-MX',options);
    const [menuDisplay,setmenuDisplay] = React.useState('Depositar a cuenta');
    return(
        
        <Container maxWidth='lg' sx={{mt: '40px'}} >
        <MenuDrawer menudisp={menuDisplay=>setmenuDisplay(menuDisplay)} />           
            <Stack direction='row' justifyContent='space-around' alignItems='center' >
                
                <Typography display='inline-flex' mb={3}  variant='h2' > {menuDisplay} </Typography>
                <Button variant='outlined' color='error' > Atrás </Button>        
            </Stack>
            <Stack direction='row' justifyContent='space-around' mt={2} >
                <Typography display='inline-flex'  variant='h4'>Ingresar datos </Typography>
                <Typography display='inline-flex' variant='h4'>Fecha </Typography>
                <Typography display='inline-flex' variant='h4'> {stringDate} </Typography>
            </Stack>
            
            <Divider/>
            {menuDisplay === 'Depositar a cuenta'? <Deposito/> : <Retiro/>  }
            
        </Container>
    );
}