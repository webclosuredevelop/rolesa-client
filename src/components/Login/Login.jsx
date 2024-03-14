import React, { useState } from 'react';
import axios from '../../../axios.config'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../provider/authProvider";


function Login() {
    const [name, setName] = useState('Dario');
    const [surname, setSurname] = useState('Manghina');
    const [email, setEmail] = useState('manghina.dario@gmail.com');
    const [password, setPassword] = useState('12341234');
    const [birthday, seBirthDay] = useState('1989/01/01');
    const [genre, setGenre] = useState('M');
    const navigateTo = useNavigate();
    const { setToken } = useAuth();

    const handleMenuClick = () => {
        document.querySelector('.header-menu').classList.toggle('expanded-menu');
        return false;
    };
    const handleRegister = async () => { 
        try {

          const response = await axios.post('/api/register', {
            name,
            surname,
            email,
            password,
            birthday,
            genre,
          });
          if(response.status == 200) {

          }
    
        } catch (error) {
        }
      };
    const handleLogin = async () => { 
        try {

          const response = await axios.post('/api/login', {
            email,
            password
          });
          if(response.status == 200) {
        
            localStorage.setItem("token", JSON.stringify(response.data.access_token))
            setToken(response.data.access_token);
            axios.interceptors.request.use(
                (config) => {
                  config.headers.Authorization = 'Bearer ' + response.data.access_token;
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
                localStorage.setItem("user", JSON.stringify(response.data))
                if(response.status == 200) {
                  navigateTo('/dashboard')
                }
              } catch (error) {
                alert("Errore di comunicazione con il server")
              }            
          }
        } catch (error) {
            alert("Errore di comunicazione con il server")
        }
      };

    return (
        <div className="landing-page">
            <div id="hellopreloader">
                <div className="preloader">
                    <svg width="45" height="45" stroke="#fff">
                        <g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
                            <circle cx="22" cy="22" r="6" stroke="none">
                                <animate attributeName="r" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite"
                                    values="6;22" />
                                <animate attributeName="stroke-opacity" begin="1.5s" calcMode="linear" dur="3s"
                                    repeatCount="indefinite" values="1;0" />
                                <animate attributeName="strokeWidth" begin="1.5s" calcMode="linear" dur="3s"
                                    repeatCount="indefinite" values="2;0" />
                            </circle>
                            <circle cx="22" cy="22" r="6" stroke="none">
                                <animate attributeName="r" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite"
                                    values="6;22" />
                                <animate attributeName="stroke-opacity" begin="3s" calcMode="linear" dur="3s"
                                    repeatCount="indefinite" values="1;0" />
                                <animate attributeName="strokeWidth" begin="3s" calcMode="linear" dur="3s"
                                    repeatCount="indefinite" values="2;0" />
                            </circle>
                            <circle cx="22" cy="22" r="8">
                                <animate attributeName="r" begin="0s" calcMode="linear" dur="1.5s" repeatCount="indefinite"
                                    values="6;1;2;3;4;5;6" />
                            </circle>
                        </g>
                    </svg>

                    <div className="text">Loading ...</div>
                </div>
            </div>

            <div className="content-bg-wrap"></div>

            <div className="header--standard header--standard-landing" id="header--standard">
                <div className="container">
                    <div className="header--standard-wrap">

                        <a href="#" className="logo">
                            <div className="img-wrap">
                                <img loading="lazy" src="/assets/img/logo.webp" alt="Olympus" width="34" height="34" />
                                <img loading="lazy" src="/assets/img/logo-colored-small.webp" width="34" height="34" alt="Olympus"
                                    className="logo-colored" />
                            </div>
                            <div className="title-block">
                                <h6 className="logo-title">olympus</h6>
                                <div className="sub-title">SOCIAL NETWORK</div>
                            </div>
                        </a>

                        <a href="#" className="open-responsive-menu js-open-responsive-menu">
                            <svg className="olymp-menu-icon">
                                <use xlinkHref="#olymp-menu-icon"></use>
                            </svg>
                        </a>

                        <div className="nav nav-pills nav1 header-menu">
                            <div className="mCustomScrollbar">
                                <ul>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-hover="dropdown" data-bs-toggle="dropdown"
                                            href="#" role="button" aria-haspopup="false" aria-expanded="false"
                                            tabIndex='1'>Profile</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Profile Page</a>
                                            <a className="dropdown-item" href="#">Newsfeed</a>
                                            <a className="dropdown-item" href="#">Post Versions</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-has-megamenu">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-hover="dropdown"
                                            data-bs-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false"
                                            tabIndex='1'>Forums</a>
                                        <div className="dropdown-menu megamenu">
                                            <div className="row">
                                                <div className="col col-sm-3">
                                                    <h6 className="column-tittle">Main Links</h6>
                                                    <a className="dropdown-item" href="#">Profile Page<span
                                                        className="tag-label bg-blue-light">new</span></a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                </div>
                                                <div className="col col-sm-3">
                                                    <h6 className="column-tittle">BuddyPress</h6>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page<span
                                                        className="tag-label bg-primary">HOT!</span></a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                </div>
                                                <div className="col col-sm-3">
                                                    <h6 className="column-tittle">Corporate</h6>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                </div>
                                                <div className="col col-sm-3">
                                                    <h6 className="column-tittle">Forums</h6>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                    <a className="dropdown-item" href="#">Profile Page</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Terms & Conditions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Privacy Policy</a>
                                    </li>
                                    <li className="close-responsive-menu js-close-responsive-menu">
                                        <svg className="olymp-close-icon">
                                            <use xlinkHref="#olymp-close-icon"></use>
                                        </svg>
                                    </li>
                                    <li className="nav-item js-expanded-menu" onClick={handleMenuClick}>

                                    </li>
                                   

                                    <li className="menu-search-item">

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ... end Header Standard Landing  */}
            <div className="header-spacer--standard"></div>

            <div className="container">
                <div className="row display-flex">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="landing-content">
                            <h1>Welcome to the Biggest Social Network in the World</h1>
                            <p>We are the best and biggest social network with 5 billion active users all around the world.
                                Share you
                                thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
                            </p>
                            <a href="#" className="btn btn-md btn-border c-white">Register Now!</a>
                        </div>
                    </div>

                    <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">

                        {/* Login-Registration Form  */}

                        <div className="registration-login-form">

                            {/* Nav tabs */}
                            <ul className="nav nav-tabs" id="registration-form-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="login-tab" data-bs-toggle="tab" href="#login" role="tab"
                                        aria-controls="login" aria-selected="true">
                                        <svg className="olymp-login-icon">
                                            <use xlinkHref="#olymp-login-icon"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                        aria-controls="profile" aria-selected="false">
                                        <svg className="olymp-register-icon">
                                            <use xlinkHref="#olymp-register-icon"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                            {/* Tab panes */}
                            <div className="tab-content" id="registration-form-tabs-content">
                                <div className="tab-pane fade" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <div className="title h6">Register to Olympus</div>
                                    <form className="content">
                                        <div className="row">
                                            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group label-floating">
                                                    <label className="control-label">First Name</label>
                                                    <input value={name} onChange={(e) => setName(e.target.value)}  className="form-control" placeholder="" type="text" />
                                                </div>
                                            </div>
                                            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Last Name</label>
                                                    <input value={surname} onChange={(e) => setSurname(e.target.value)}  className="form-control" placeholder="" type="text" />
                                                </div>
                                            </div>
                                            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Your Email</label>
                                                    <input value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" placeholder="" type="email" />
                                                </div>
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Your Password</label>
                                                    <input value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control" placeholder="" type="password" />
                                                </div>

                                                <div className="form-group date-time-picker label-floating">
                                                    <label className="control-label">Your Birthday</label>
                                                    <input value={birthday} onChange={(e) => seBirthDay(e.target.value)}  name="datetimepicker" defaultValue="10/24/1984" />
                                                    <span className="input-group-addon">
                                                        <svg className="olymp-calendar-icon">
                                                            <use xlinkHref="#olymp-calendar-icon"></use>
                                                        </svg>
                                                    </span>
                                                </div>

                                                <div className="form-group label-floating is-select">
                                                    <label className="control-label">Your Gender</label>
                                                    <select value={genre} onChange={(e) => setGenre(e.target.value)}  className="form-select">
                                                        <option defaultValue="M">Male</option>
                                                        <option defaultValue="F">Female</option>
                                                    </select>
                                                </div>

                                                <div className="remember">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input name="optionsCheckboxes" type="checkbox" />
                                                            I accept the <a href="#">Terms and Conditions</a> of the website
                                                        </label>
                                                    </div>
                                                </div>

                                                <a href="#" onClick={handleRegister} className="btn btn-purple btn-lg full-width">Complete Registration!</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="title h6">Login to your Account</div>
                                    <form className="content">
                                        <div className="row">
                                            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Email</label>
                                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="" type="email" />
                                                </div>
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Password</label>
                                                    <input value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control" placeholder="" type="password" />
                                                </div>

                                                <div className="remember">

                                                    <div className="checkbox">
                                                        <label>
                                                            <input name="optionsCheckboxes" type="checkbox" />
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                    <a href="#" className="forgot" data-bs-toggle="modal"
                                                        data-bs-target="#restore-password">Forgot my Password</a>
                                                </div>

                                                <a href="#" onClick={handleLogin} className="btn btn-lg btn-primary full-width">Login</a>

                                                <div className="or"></div>

                                                <a href="#" className="btn btn-lg bg-facebook full-width btn-icon-left"><svg
                                                    width="16" height="16">
                                                    <use xlinkHref="#olymp-facebook-icon"></use>
                                                </svg>Login with Facebook</a>

                                                <a href="#" className="btn btn-lg bg-twitter full-width btn-icon-left"><svg
                                                    width="16" height="16">
                                                    <use xlinkHref="#olymp-twitter-icon"></use>
                                                </svg>Login with Twitter</a>


                                                <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple
                                                    and you can start enjoing all the benefits!</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* ... end Login-Registration Form  */}
                    </div>
                </div>
            </div>

            {/* Window-popup Restore Password */}

            <div className="modal fade" id="restore-password" tabIndex="-1" role="dialog" aria-labelledby="restore-password"
                aria-hidden="true">
                <div className="modal-dialog window-popup restore-password-popup" role="document">
                    <div className="modal-content">
                        <a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
                            <svg className="olymp-close-icon">
                                <use xlinkHref="#olymp-close-icon"></use>
                            </svg>
                        </a>

                        <div className="modal-header">
                            <h6 className="title">Restore your Password</h6>
                        </div>

                        <div className="modal-body">
                            <form method="get">
                                <p>Enter your email and click the send code button. You’ll receive a code in your email. Please
                                    use that
                                    code below to change the old password for a new one.
                                </p>
                                <div className="form-group label-floating">
                                    <label className="control-label">Your Email</label>
                                    <input className="form-control" placeholder="" type="email" defaultValue="james-spiegel@yourmail.com" />
                                </div>
                                <button className="btn btn-purple btn-lg full-width">Send me the Code</button>
                                <div className="form-group label-floating">
                                    <label className="control-label">Enter the Code</label>
                                    <input className="form-control" placeholder="" type="text" defaultValue="" />
                                </div>
                                <div className="form-group label-floating">
                                    <label className="control-label">Your New Password</label>
                                    <input className="form-control" placeholder="" type="password" defaultValue="olympus" />
                                </div>
                                <button className="btn btn-primary btn-lg full-width">Change your Password!</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            {/* ... end Window-popup Restore Password */}


            {/* Window Popup Main Search */}

            <div className="modal fade" id="main-popup-search" tabIndex="-1" role="dialog" aria-labelledby="main-popup-search"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered window-popup main-popup-search" role="document">
                    <div className="modal-content">
                        <a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
                            <svg className="olymp-close-icon">
                                <use xlinkHref="#olymp-close-icon"></use>
                            </svg>
                        </a>
                        <div className="modal-body">
                            <form className="form-inline search-form" method="post">
                                <div className="form-group label-floating">
                                    <label className="control-label">What are you looking for?</label>
                                    <input className="form-control bg-white" placeholder="" type="text" defaultValue="" />
                                </div>

                                <button className="btn btn-purple btn-lg">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login