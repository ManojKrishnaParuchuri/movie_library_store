import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Errorpage() {
    const navigate = useNavigate();
    function handleSubmit(){
        navigate('/home');
    }
  return (
    <div>
      <>

      <h2 style={{color: 'white'}}>Oops something went wrong</h2>
      <button onClick={handleSubmit}>Go back to Main Page</button>
      </>
    </div>
  )
}
