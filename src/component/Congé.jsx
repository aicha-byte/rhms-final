import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import DatePicker from './DatePicker'
import "../Style.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function Congé() {

  const {id} = useParams()


  
  async function addLeaveRequest(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const input = Object.fromEntries([...formData.entries()]);
    console.log(input);
    let tokenString = localStorage.getItem("token");
    let userToken = JSON.parse(tokenString);

    userToken = userToken?.token;

    axios.defaults.headers.common["Authorization"] = userToken;
    axios
      .post(`http://localhost:5000/api/addLeave/${id}`, input)
      .then((res) => {
        alert(res.data.message)
        console.log(res.data);
      });
  }

  return (
    <div className='bodyCongé'>

      <h3 className='TCongé'>Demande de congé</h3>
      <h5 className='Pcongé'>Type de congé :</h5>
<form onSubmit={addLeaveRequest}>
        <input className='formCongé' type='checkbox' value='congée annuelle' name='type'/>
        <label>congée annuelle</label>
        <input className='formCongé'type='checkbox' value='congée de maladie' name='type'/>
        <label>congée de maladie</label>
        <input className='formCongé'type='checkbox' value='télétravail' name='type'/>
        <label>télétravail</label><br></br>

        <label  className='Pcongé'>Date Début :</label>
        <input className='formCongé'type='date' name='startDate'/><br/>
        <label  className='Pcongé'>Date Fin :</label>
        <input className='formCongé' type='date' name='endDate'/><br></br>
        <input className='btnCongé' type='submit' value="Envoyé"/>
        </form>

    </div>
  )
}
