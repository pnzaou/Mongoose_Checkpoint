import React, { useEffect, useState } from 'react';
import PersonsTable from './PersonsTable';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const AllUsers = () => {
    const [persons, setPersones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/persons',{
            headers: {
                'authorization': localStorage.getItem('token')
            }
        })
        .then(rep => rep.json())
        .then(data => {setPersones(data.data)})
        .catch(err => {console.log(err);})
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <Spinner/>

    return (
        <div>
        <Link to='/ajoutPersonne' className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Ajouter</Link>
        <PersonsTable persons={persons}/>
        </div>
    );
}

export default AllUsers;
