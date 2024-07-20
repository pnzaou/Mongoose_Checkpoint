import React from 'react';
import {Navigate} from 'react-router-dom'

const ProtctRouter = ({isAuth, children}) => {
    
    if(!isAuth) {
        return <Navigate to='/connexion'/>
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default ProtctRouter;
