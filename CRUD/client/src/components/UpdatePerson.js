import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdatePerson = () => {
    const [person, setPerson] = useState({favoriteFoods : []})
    const [nom, setNom] = useState('')
    const [age, setAge] = useState('')
    const [food, setFood] = useState('')
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3006/persons/${id}`)
            .then(rep => rep.json())
            .then(data => {
                setPerson(data.data)
                setNom(data.data.nom)
                setAge(data.data.age)
                setFood(data.data.favoriteFoods)
            }).catch(err => {
                console.log(err);
            })
    }, [id])
    const changeValue = (e) => {
        if(e.target.id === 'nom'){
            setNom(e.target.value)
        }
        if(e.target.id === 'age'){
            setAge(e.target.value)
        }
        if(e.target.id === 'food'){
            setFood(e.target.value)
        }
    }
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div>
                <Link to='/'>&larr; Retour</Link>
                <br />
                <form action="">
                    <div>
                        <label htmlFor="nom">nom</label>
                    </div>
                    <div>
                        <input className='bg-gray-100' type="text" name="nom" id="nom" value={nom} onChange={changeValue} />
                    </div>
                    <div>
                        <label htmlFor="age">age</label>
                    </div>
                    <div>
                        <input className='bg-gray-100' type="number" name="age" id="age" value={age} onChange={changeValue} />
                    </div>
                    <div>
                        <label htmlFor="food">Plats préférés</label>
                    </div>
                    <div>
                        <input className='bg-gray-100' type="text" name="food" id="food" value={food} onChange={changeValue} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdatePerson;
