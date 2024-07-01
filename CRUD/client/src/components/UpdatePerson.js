import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';


const UpdatePerson = () => {
    const [nom, setNom] = useState('')
    const [age, setAge] = useState('')
    const [food, setFood] = useState('')
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3006/persons/${id}`)
            .then(rep => rep.json())
            .then(data => {
                setNom(data.data.nom)
                setAge(data.data.age)
                setFood(data.data.favoriteFoods)})
            .catch(err => {console.log(err);})
            .finally(() => {setLoading(false)})
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

    const updatePerson = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)

        if(data.get('nom') === '' || data.get('age') === '' || data.get('food') === ''){
            alert('Tous les champs sont obligatoires')
        }
        else{
            const user = {
                nom: data.get('nom'),
                age: data.get('age'),
                favoriteFoods: data.get('food')
            }
            fetch(`http://localhost:3006/persons/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(rep => rep.json())
            .then(data => {
                console.log(data)
                navigate('/')})
            .catch(err => {console.log(err);})
        }
    }

    if(loading) return <Spinner/>

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div>
                <Link to='/'>&larr; Retour</Link>
                <br />
                <form onSubmit={updatePerson}>
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
                        <button  className="bg-sky-700 p-2 text-white" type="submit">Modifier</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdatePerson;
