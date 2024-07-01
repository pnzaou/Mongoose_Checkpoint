import React from 'react';
import PersonsDatasLine from './PersonsDatasLine';

const PersonsTable = ({persons}) => {
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Liste de personnes</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Nom</th>
                            <th className="p-3">Age</th>
                            <th className="p-3">Plats préférés</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                        <tbody>{persons.map(person => (<PersonsDatasLine key={person._id} person={person}/>))}</tbody>
                </table>
            </div>
        </div>
    );
}

export default PersonsTable;
