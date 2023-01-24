import React, { useState } from 'react'
import "../Style.css";
import Header from './Header';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';





export default function UpdateUser() {
 

  const {id} = useParams()
  const navigate = useNavigate()
  
  const [user , setUser] = useState({})

async function editUser(e){
  e.preventDefault()
const obj ={
firstName:user.firstName,
lastName:user.lastName,
// gender:user.gender,
image:user.image,
// dateOfBirth:user.dateOfBirth,
// dateOfJoin:user.dateOfJoin,
email:user.email,
password:user.password,
// post:user.post,
phone:user.phone
}

let tokenString = localStorage.getItem('token')
let userToken = JSON.parse(tokenString)

userToken = userToken?.token

axios.defaults.headers.common["Authorization"] = userToken
axios.post(`http://localhost:5000/api/updateUser/${id}`,obj).then((res) =>{
console.log(res.data.message);
})
navigate(`/ProfilUser/${id}`)
}



async function uploadImg (e){
  let data = new FormData()
  data.append("file",e.target.files[0])
  axios.post("http://localhost:5000/api/upload",data).then((res) =>{
  
  setUser({...user,image:res.data.filename})
  })
}




  return (


    <div className='bodyUpdateUser' >
<Header/>
      <h3 className='TupdateUser' >Modifié votre profil :</h3>

      <form  onSubmit={editUser} >
            <input  className='formUpdateUser' type='text' placeholder =' Prénom' onChange={(e)=>setUser({...user,firstName:e.target.value})}/>
            <input  className='formUpdateUser' type='text' placeholder ='Nom de famille ' onChange={(e)=>setUser({...user,lasttName:e.target.value})}/>
            <input  className='formUpdateUser'type='email' placeholder ='E-mail' onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input className='formUpdateUser' type='password' placeholder ='Mot de passe' onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <input  className='formUpdateUser'type='tel' placeholder ='Numéro de téléphone' onChange={(e)=>setUser({...user,phone:e.target.value})}/>

            {/* <input className='formUpdateUser' type='gender' placeholder ='gender' onChange={(e)=>setUser({...user,gender:e.target.value})}/> */}
            <br></br>                      <br></br>            <br></br>
<p className='PupdateUser'>Ajouter ou modifier Votre photo de profil :</p>
            <input  className='formUpdateUser'type='file' placeholder ='image' name='image' onChange={uploadImg}/>
            {/* <input className='formUpdateUser' type='date' placeholder ='date of birth' onChange={(e)=>setUser({...user,dateOfBirth:e.target.value})}/> */}
            {/* <input  className='formUpdateUser'type='date' placeholder ='date of join' onChange={(e)=>setUser({...user,dateOfJoin:e.target.value})}/> */}
            {/* <input type='text' placeholder ='post' onChange={(e)=>setUser({...user,post:e.target.value})}/> */}
            <br></br>                      <br></br>            <br></br>



            <input className='btnUpdateUser' type='submit' value='Modifié'/>
        </form>

    </div>
  )
}
