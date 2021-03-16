import React, {useState, useEffect} from 'react'
import Compose from './components/Compose'

import ChirpCard from './components/HomeChirpCard'

const Home = () => {

const [chirps, setChirps] = useState([])


useEffect(() => {
    (async() => {
    let res = await fetch('http://localhost:3000/api/chirps')
    let chirps = await res.json()
    chirps = chirps.reverse()
    setChirps(chirps)
    })()
}, [])

    return (
        <>
        <Compose/>

        <div className='d-flex justify-content-center align-items-center flex-column'>
        {chirps.map(chirp => {
         return   <ChirpCard chirp={chirp}/>
        })}
        </div>
        </>
    )
}

export default Home