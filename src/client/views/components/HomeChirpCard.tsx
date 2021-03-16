import React from 'react'
import { BrowserRouter as Link, Route, Router, Switch } from 'react-router-dom'


const ChirpCard = (props: IChirpCardProps) => {
    return (
        <>

            <div className="card chirpCard shadow">
                <div className="card-header d-flex align-items-center justify-content-center col-12">
                    <h5>{props.chirp.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h6>{props.chirp.text}</h6>
                    </li>
                    <li className="list-group-item">
                       {/* <button  className='btn btn-outline-primary col-2'><Link to={`/${props.chirp.id}/Admin`} className='btn btn-outline-primary col-2'> Edit Chirp! </Link></button> */}
                       <a href={`http://localhost:3000/${props.chirp.id}/Admin`}  className='btn btn-outline-primary '>Edit Your Chirp!</a>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default ChirpCard


interface IChirpCardProps {
chirp: {
    id: number,
    name: string,
    text: string
}
}