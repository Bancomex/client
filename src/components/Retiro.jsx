import * as React from 'react'
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import { Box } from '@mui/system';
import { Container, Stack, TextField } from '@mui/material';
import Input from '@mui/material/Input';

export function Retiro(){

    return(
        <>
           
            <Stack spacing={3} mt={2} alignItems='center' >
                <TextField sx={{width: '40vw', maxWidth: '550px'}} required label='Nombre del cliente' placeholder=' ' />
                <TextField sx={{width: '40vw', maxWidth: '550px'}} required label='Número de cuenta' placeholder=' ' />
                <TextField sx={{width: '40vw', maxWidth: '550px'}} required label='Cantidad a retirar en pesos MXN' placeholder=' ' />
                <Button size='medium' variant='contained' > Retirar </Button>

            </Stack>
        </>
    );
    };