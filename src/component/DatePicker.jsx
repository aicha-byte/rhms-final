import React, { useState } from 'react';
import "../Style.css";


function DatePicker(){

    const [ date, setDate]=useState();
return (



<div className='main'>

<br>
</br>
<br>
</br>
<br>
</br>
<p className='PdatePicker'>sélectionnez la date souhaitée : </p>

<p className='PdatePicker'>Du:</p> <input className='inputDatePicker' type='date' onChange={e=>setDate(e.target.value)}/>

<p className='PdatePicker'>Au:</p> <input className='inputDatePicker' type='date' onChange={e=>setDate(e.target.value)}/>
<br>
 </br>
 <br>
 </br>
 <br>
 </br>
<p className='PdatePicker'>Nombre de jours :</p>


<input className='InputNbrJours' placeholder='*** '></input>
</div>

);


}
export default DatePicker;