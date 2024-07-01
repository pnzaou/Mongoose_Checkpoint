import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from './Spinner';

const PersonDetails = () => {
    const [details, setDetails] = useState({favoriteFoods : []})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    useEffect(()=> {
        fetch(`http://localhost:3006/persons/${id}`)
            .then(rep => rep.json())
            .then(data => {setDetails(data.data)})
            .catch(err => {console.log(err);})
            .finally(()=> {setLoading(false)})
    },[id])

    if(loading) return <Spinner/>

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div>
                <Link to='/'>&larr; Retour</Link>
                <br />
                <br />
                <h1>Nom : {details.nom}</h1>
                <h2>Age : {details.age} ans</h2>
                <h2>Plats préférés :</h2>
                <ul>
                    {details.favoriteFoods.map(food => (
                        <li key={food}>{food}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PersonDetails;
