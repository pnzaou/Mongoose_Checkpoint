import React from 'react';
import { Link } from 'react-router-dom';

const delePerson = (id) => {

    fetch(`http://localhost:3006/persons/${id}`, {
        method: 'DELETE'
    })
    .then(rep => {rep.json()})
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})
    .finally(() => {window.location.reload() })
}

const PersonsDatasLine = ({ person }) => {

    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
                <p>{person.nom}</p>
            </td>
            <td className="p-3">
                <p>{person.age}</p>
            </td>
            <td className="p-3">
                <ul>
                    {person.favoriteFoods.map(food => <li key={food}>{food}</li>)}
                </ul>
            </td>
            <td className="p-3 flex justify-evenly">
                <div className='bg-green-500 p-2 text-white'>
                    <Link to={`détails/${person._id}`}>Détails</Link>
                </div>
                <div className='bg-sky-700 p-2 text-white'>
                    <Link to={`modifier/${person._id}`}>Modifier</Link>
                </div>
                <div className='bg-red-600 p-2 text-white cursor-pointer' onClick={() => {delePerson(person._id)}}>
                    Supprimer   
                </div>
            </td>
        </tr>
    );
}

export default PersonsDatasLine;
