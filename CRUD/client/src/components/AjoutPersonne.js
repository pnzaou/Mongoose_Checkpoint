import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AjoutPersonne = () => {
    const navigate = useNavigate()
    const [nom, setNom] = useState('Veuillez saisir votre nom')
    const [age, setAge] = useState(0)
    const [food, setFood] = useState('Veuillez lister vos plats préférés ex: Pizza, Burger, ...')
    const changeValue = (e) => {
        if(e.target.id === 'nom') {
            setNom(e.target.value)
        }
        if(e.target.id === 'age') {
            setAge(e.target.value)
        }
        if(e.target.id === 'food') {
            setFood(e.target.value)
        }
    }
    const addPerson = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)

        const person = {
            nom: data.get('nom'),
            age: data.get('age'),
            favoriteFoods: data.get('food')
        }

        fetch('http://localhost:3006/person',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(person)
        })
        .then(rep => rep.json())
        .then(data => {
            navigate('/')
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <div className='flex justify-center items-center w-screen h-screen'>
                <div>
                    <Link to='/'>&larr; Retour</Link>
                    <br />
                    <form onSubmit={addPerson}>
                        <div>
                            <label htmlFor="nom">nom</label>
                        </div>
                        <div>
                            <input className='bg-gray-100 border-gray-800 border-solid border-2' type="text" name="nom" id="nom" value={nom} onChange={changeValue} />
                        </div>
                        <div>
                            <label htmlFor="age">age</label>
                        </div>
                        <div>
                            <input className='bg-gray-100 border-gray-800 border-solid border-2' type="number" name="age" id="age" value={age} onChange={changeValue} />
                        </div>
                        <div>
                            <label htmlFor="food">Plats préférés</label>
                        </div>
                        <div>
                            <input className='bg-gray-100 border-gray-800 border-solid border-2' type="text" name="food" id="food" value={food} onChange={changeValue} />
                        </div>
                        <br />
                        <div>
                            <button  className="bg-sky-700 p-2 text-white" type="submit">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AjoutPersonne;
