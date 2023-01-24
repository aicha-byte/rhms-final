
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Header from './Header';
import "../Style.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function ProfilUser() {
  const [user , setUser] = useState(null)
  const {id} = useParams()
  console.log({id});





   async function getUserProfil(){
    
const tokenString =localStorage.getItem('token')
console.log(tokenString)
let userToken = JSON.parse(tokenString)
userToken = userToken?.token
axios.defaults.headers.common['Authorization']=userToken
axios.get(`http://localhost:5000/api/userProfile/${id}`).
    then ((res)=>{

      setUser(res.data.user)
   
    
    })


   
  }


  
   useEffect(()=>{getUserProfil()},[]) 
        
   console.log(user) 
  
  
     if (!user) return null
  return (
    <div>
      <Header />
    <div className='BodyPofilUser'>

      <br></br><br />
      <br></br><br />
      <h1 className='TprofileUser'>profile employé :</h1>

      <Stack direction="row" spacing={2}>



        {/* <Avatar
          alt="Remy Sharp"
          src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000"
          sx={{ width: 80, height: 80, }}
        /> */}



        <table className='tab' >

        <tr>
            <th>Image</th>
            <td>
              <img className='imgProfilUser'  src={`http://localhost:5000/static/${user.image}`} alt='imgUser'/>
            </td>
          </tr>


          <tr>
            <th>Departement id</th>
            <td> 
             
            </td>
            {/* <button>testtt</button> */}
          </tr>

         

          <tr>
            <th>Prénom</th>
            <td>

              {user.firstName}
            </td>
          </tr>

         

          <tr>
            <th>Nom de famille</th>
            <td> {user.lastName}</td>
          </tr>

          


          <tr>
            <th>Sexe</th>
            <td> {user.gender}</td>
          </tr>

          
          <tr>
            <th>Date de naissance
</th>
            <td>
            {user.dateOfBirth}
            </td>
          </tr>


          <tr>
            <th>Date d'adhésion</th>
            <td> {user.dateOfJoin}</td>
          </tr>

          <tr>
            <th>E-mail</th>
            <td>{user.email}</td>
          </tr>

          <tr>
            <th>Numéro de téléphone</th>
            <td>{user.phone}</td>
          </tr>

          

          

          <tr>
            <th>Post</th>
            <td>{user.post}</td>
          </tr>

          <tr>
            <th>Solde de Congé</th>
            <td>{user.soldOfLeaves}</td>
          </tr>
         
           
          
        </table>

        
      </Stack>

      
      <br></br>
      <br></br>
      <br></br>
    </div>
    </div>

  );
}