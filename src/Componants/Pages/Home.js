import React, { useState } from 'react'
import { ConstData } from '../../ConstData/ConstData'

const Home = () => {
    const [useData , setUserData] = useState(ConstData)
  return (
    <>
     <div>
    <table border='2'>
    <tr>
    <td> First Name </td>
    <td> Last Name </td>
    <td> Date of birth </td>
    </tr>
   
    
    {useData.map((e)=>
    <tr>
     <td> {e.firstName}</td>
     <td> {e.lastName} </td>
     <td> {e.DOB[0].day}/{e.DOB[0].month}/{e.DOB[0].year} </td>
      </tr> 
      )}
        
    
    </table>
    </div>
    </>
  )
}

export default Home