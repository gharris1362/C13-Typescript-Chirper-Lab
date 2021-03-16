import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Compose = () => {

const [name, setName] = useState('');
const [text, setText] = useState('');
const history = useHistory()



const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  let res = await fetch('http://localhost:3000/api/chirps', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({name, text})
  })
  if (res.ok) {
    // alert('Chirp Posted!')
    location.reload()
    history.push('/')
  } else {
    console.error('Something Went Wrong!')
  }
}


  return (
    <>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome To Chirper!</h1>
          <p className="lead">Why Dont you Post Something?</p>
          <div>
            <div className='d-flex flex-column'>
              <input value={name} type="text" placeholder='Enter Your Name!'className='form-control shadow my-2'  onChange={(e) => {setName(e.target.value)}}/>
              <textarea value={text} name="chirp" id="chirpTextArea" className='form-control shadow' cols={10} rows={5} placeholder='Enter Your Chirp!' onChange={(e) => {setText(e.target.value)}}></textarea>
            </div>
            <form action="" method='post'>
              <input type="submit" name='' value="Chirp It!" className='btn btn-primary my-2' onClick={submitChirp}  />
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Compose