import { Button, Stack } from '@mui/material';
import React from 'react';
import Header from './Header';
import "../Style.css";


export default function Autorisation() {
  return (
    <div className='bodyAutorisation'>
 <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br> <br>
                  </br>

<Header/>
<h3 className='Tautorisation'>Demande d'autorisation de sortie :</h3> 


                  <br>
                  </br>

                  <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                              Matin
                        </label>
                  </div>
                  <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                              Apres-midi </label>
                  </div>
                 

                  <div className='btn'>
                  <Stack direction="row" spacing={2}>
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
