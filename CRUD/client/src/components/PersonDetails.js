import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PersonDetails = () => {
    const [details, setDetails] = useState({favoriteFoods : []})
    const {id} = useParams()
    useEffect(()=> {
        fetch(`http://localhost:3006/persons/${id}`)
            .then(rep => rep.json())
            .then(data => {
                setDetails(data.data)
            }).catch(err => {
                console.log(err);
            })
    },[id])
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            {
                (details.favoriteFoods.length === 0) ? (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                    </div>
                ) : <>
                        <div>
                            <Link to='/'>&larr; Retour</Link>
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
                    </>
            }
        </div>
    );
}

export default PersonDetails;
