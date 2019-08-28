import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from './Api_url';
import publicKey from '../'

const withAuth = (Component) => ({ ...props }) => {

    let [user, setUser] = useState(undefined);
    let [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        async function getUser(){
            await axios.get(`${API_URL}/api/user/whois`)
            .then(res => {
                if(res.data.tokenIsValid){
                    setUser(res.data.user)
                }else{
                    setUser(undefined)
                };
                setLoadingUser(false)
            }).catch(err => {
                console.log(err)
            }) 
        }

        getUser()
    },[])

    if(loadingUser){
        return(
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        user ? (
            <Component {...props} user={user} />
        ) : (
                <Redirect to='/login' />
            )
    )
}

export default withAuth;