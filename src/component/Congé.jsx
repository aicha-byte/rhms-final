import { Button, Stack } from '@mui/material'
import React from 'react'
import DatePicker from './DatePicker'
import "../Style.css";

export default function Congé() {
  return (
    <div className='bodyCongé'>

      <h3 className='TCongé'  >Demande de congé</h3>

      <p className='PCongé'>selectionnez votre type de congé :</p>

      <br></br>

       <select className='InputSelect'>
        <option selected>type de congés</option>
        <option value="1">congé annuel</option>
        <option value="2">congé maladie</option>
        <option value="2">téléTravail</option>

      </select> 

      <DatePicker />
      

      <p  className='PCongé'>Admin Réponse :</p>


      <div >

      {/* <select className='InputSelect'>
        <option selected>Pending</option>
        <option value="1">Rejected</option>
        <option value="2">Approved</option>

      </select>  */}
      

      <Stack direction="row" spacing={3}>
      <Button variant="outlined" color="error">
          Approved
        </Button>
        <Button variant="outlined" color="error">
          Rejected
        </Button>
        <Button variant="outlined" color="error">
        Pending
        </Button>
      </Stack>
   </div>


<div className='btn'>

      <Stack direction="row" spacing={3}>
        <Button variant="contained" color="success">
          envoyer
        </Button>
        <Button variant="outlined" color="error">
          Annuler
        </Button>
      </Stack>


      </div>

    </div>
  )
}
