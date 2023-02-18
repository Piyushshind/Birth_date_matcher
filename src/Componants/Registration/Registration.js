import React, { useState } from 'react'
import { validateName,validateLastName ,validateAge } from '../../Validations/ValidData';
import { finalUserData } from '../../Recoil/RecoilData';
import { useRecoilState } from 'recoil';

const Registration = () => {
    
    const [firstName,setFirstName] = useState('')
    const [firstNameError,setFirstNameError] = useState()
    const [lastName,setLastName] = useState('')
    const [lastNameError,setLastNameError] = useState()
    const [dateInput,setDateInput] = useState()
    const [inputAge,setInputAge] = useState()
    const [inputAgeError,setInputAgeError] = useState()
    const [userData,setUserData] = useRecoilState(finalUserData)
    
    

    function handleFirstNameInput(e){
      setFirstName(e.target.value)
      const validate = validateName(firstName)
      setFirstNameError(validate)
    }
    function handleLastNameInput(e){
      setLastName(e.target.value)
      const validate = validateLastName(lastName)
      setLastNameError(validate)
    }
    function handleAgeInput(e){
      setInputAge(e.target.value)
      const validate = validateAge(inputAge)
      setInputAgeError(validate)
    }

    function handleSubmit(){
     if(firstName== '' || lastName=='' ){
      alert( 'fill proper details')
     }
      else if(firstNameError ==='true' && lastNameError ==='true' && inputAgeError ==='true'){
      const dataObj ={
        firstName :firstName,
        lastName : lastName,
        birthDate : dateInput,
        age : inputAge
       }
       alert('succusecFull register')
       
       setUserData([...userData,...dataObj])
       console.log(userData)
     }else {
      alert('Enter Correct Details');
    }
    setFirstName('')
    setInputAge('')
    setLastName('')
  }
     
     
      
       
       
    

  return (
    <>
    <div>
        
    <div>First Name : <input type='text' placeholder='First Name'onChange={handleFirstNameInput} value={firstName} required/> </div>
    <div>Last Name : <input type='text' placeholder='Last Name'onChange={handleLastNameInput} value={lastName}  required/> </div>
    <div> Select Birth Date : <input  type='date'  value={dateInput} onChange={(e)=>setDateInput(e.target.value)} required/> </div>

    <div>Age : <input placeholder='Age'  onChange={handleAgeInput} value={inputAge} maxLength={3} minLength={1} required /> </div>
    <div><button  onClick={handleSubmit}>Submit</button></div>
    
    </div>
    </>
  )
}

export default Registration;