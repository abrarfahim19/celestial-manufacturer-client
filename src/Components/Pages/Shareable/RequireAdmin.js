import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import Loading from './Loading';

const RequireAdmin = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const [admin,useLoading] = useAdmin(user);
    let location = useLocation();
    
    if(loading || useLoading){
        return <Loading></Loading>
    }
    
    if (!user || !admin){
        return <Navigate to="/home" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;