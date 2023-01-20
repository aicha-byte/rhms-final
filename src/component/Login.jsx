import { Alert, Button, Stack, TextField} from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import '../Login.css';


export default function Login() {

    const navigate = useNavigate()
    const {handleSubmit, register, formState: {errors}} = useForm()
    const [loginStatus , setLoginStatus] = useState({})

    const objectLength = Object.values(loginStatus).length


    async function login(data){
        console.log(data);
        axios.post('http://localhost:5000/api/login',data).then((res) =>{
            
            
        let userToken="Bearer "+res.data.token
        localStorage.setItem("token", JSON.stringify({ token: userToken }))
            
            setLoginStatus({...loginStatus,status:true,message:'login success'})
            setTimeout(() => navigate(`/ProfilUser/${res.data._id}`),5000)
            
        })
        .catch(error => {
            setLoginStatus({...loginStatus,status:false,message:error.response.data})
            navigate('/')
            
          })
        
    }

  return (
    <div className='bodyLogin'>
    <div id='loginDiv'>
<form onSubmit={handleSubmit(login)}>
    <Stack direction='column' spacing={2}  
  alignItems="center">
    <h1 className='text-center text-3xl font-bold'>Login</h1>

<TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          {...register('email',{required :true})}
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) && 'fill this field'}
        />
      
      <TextField
          id="outlined-password-input"
          label="Password"
          error={Boolean(errors.password)}
          {...register('password',{required :true})}
          type="password"
          autoComplete="current-password"
          helperText={Boolean(errors.password) && 'fill this field'}
          
        />
      <Button type="submit" variant="contained">Submit</Button>
      </Stack>
</form>
{
 objectLength == 0?null:loginStatus.status?<Alert severity="success" >{loginStatus.message}</Alert>:<Alert severity="error" >{loginStatus.message}</Alert>
 }
</div>
    </div>
  )
}
