import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import axios from '../../../axios.config'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../provider/authProvider";

function GoogleAuth() {

    const { setToken } = useAuth();
    const navigateTo = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:8000/api/auth/google/callback${location.search}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            localStorage.setItem("token", JSON.stringify(data.access_token))
            setToken(data.access_token);
            handleLogin(data.access_token);          
        });
    })
    const handleLogin = async (token) => { 
        axios.interceptors.request.use(
            (config) => {
              config.headers.Authorization = 'Bearer ' + token;
              return config;
            },
            (error) => {
            alert("Errore di comunicazione con il server")
              return Promise.reject(error);
            }
        );

        try {
            const response = await axios.get('/api/user', {
            });
            await localStorage.setItem("user", JSON.stringify(response.data))
            if(response.status == 200) {
              document.location.href = '/dashboard'
            }
          } catch (error) {
            alert("Errore di comunicazione con il server")
        }  

    }
}

export default GoogleAuth;