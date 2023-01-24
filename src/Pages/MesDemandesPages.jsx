import React from 'react'
import Header from '../component/Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DemandeItem from '../component/DemandeItem';

export default function MesDemandesPage() {
const [demande , setDemande]= useState([])
const {id} = useParams() 
console.log(demande);


async function DemandesListes() {

  let tokenString =localStorage.getItem('token')
  let userToken = JSON.parse(tokenString)
  userToken=userToken?.token
  axios.defaults.headers.common['Authorization']=userToken
  axios.get(`http://localhost:5000/api/employeeLeavesList/${id}`).then((res)=>{
   

    setDemande(res.data.leaves)

  })
  
  
}
    

useEffect(()=>{DemandesListes()},[])
console.log({demande});

  return (
    <div>
         <Header />
         <h1 style={{paddingTop:'350px'}}>MesDemandes</h1>
         {
          demande.map((elem,i)=>{
            return(
              <li key={i}>
                <DemandeItem item={elem}/> 
              </li>
            )
          })


         }


    </div>
  )
}
