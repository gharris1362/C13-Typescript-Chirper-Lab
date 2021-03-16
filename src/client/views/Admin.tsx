import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import chirpstore from '../../server/utils/chirpstore';




const Admin: React.FC<IAdminProps> = (props) => {

 
    const { id } = useParams()

    const [name, setName] = useState('');
    const [text, setText] = useState('');


    useEffect(() => {
        (async () => {
            let res = await fetch(`http://localhost:3000/api/chirps/${id}`)
            let chirp = await res.json()
            setName(chirp.name)
            setText(chirp.text)
        })()
    }, [id])



    const editChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault()
       try { 
        let res = await fetch(`http://localhost:3000/api/chirps/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, text })
        })
       props.history.push('http://localhost:3000/')
    } catch(err) {
        if (err) throw err
    }
    }

    const deleteChirp = async() => {
        try {
            await fetch(`http://localhost:3000/api/chirps/${id}`, {
                method: 'DELETE'
            })
            props.history.push('http://localhost:3000/')
        } catch (err) {
            if (err) throw err
        }
    }


    return (
        <>

            <div className="card chirpCard shadow">
                <div className="card-header d-flex align-items-center justify-content-center col-12">
                    <input type="text" placeholder='Chirper Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <textarea name="ChirpText" id="chirpText" className='form-control' cols={100} rows={10} placeholder='Chirp Text' value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    </li>
                    <li className="list-group-item">
                        {/* <button  className='btn btn-outline-primary col-2'><Link to={`/${props.chirp.id}/Admin`} className='btn btn-outline-primary col-2'> Edit Chirp! </Link></button> */}
                        <button className='btn btn-outline-primary' onClick={editChirp}>Finish Editing!</button>
                        <button className='btn btn-outline-primary' onClick={deleteChirp} >Delete The Dang Thing!</button>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Admin


interface IAdminProps {
    id: string,
    history: any
}