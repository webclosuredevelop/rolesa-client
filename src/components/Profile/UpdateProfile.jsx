import React, { useState } from "react";
// import axios from "../../../axios.config";
import axios from "axios";

import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import ReactDOM from "react-dom";
import "react-web-tabs/dist/react-web-tabs.css";
import "../../../public/assets/css/main.css";
import Header from '../Header/Header'
import LeftSidebar from '../Sidebars/LeftSidebar'
import RightSidebar from '../Sidebars/RightSidebar'

function UpdateProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(user.name);
  // const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  // const [birthday, setBirthday] = useState(user.birthday);
  // const [genre, setGenre] = useState(user.genre);
  // const [phone, setPhone] = useState(user.phone);
  // const [country, setCountry] = useState(user.country);
  // const [state, setState] = useState(user.state);
  // const [city, setCity] = useState(user.city);
  // const [bio, setBio] = useState(user.bio);
  // const [website, setWebsite] = useState(user.website);
  // const [religion, setReligion] = useState(user.religion);
  // const [birthplace, setBirthplace] = useState(user.birthplace);
  // const [work, setWork] = useState(user.work);
  // const [politic, setPolitic] = useState(user.politic);
  // const [facebook, setFacebook] = useState(user.facebook);
  // const [twitter, setTwitter] = useState(user.twitter);
  // const [rss, setRss] = useState(user.rss);
  // const [dribble, setDribble] = useState(user.dribble);
  // const [spotify, setSpotify] = useState(user.spotify);

  const undo = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setName(user.name);
    setSurname(user.surname);
    setEmail(user.email);
    // setBirthday(user.birthday);
    // consetGenre(user.genre);
    // setPhone(user.phone);
    // setCountry(user.country);
    // setState(user.state);
    // setCity(user.city);
    // setBio(user.bio);
    // setWebsite(user.website);
    // setReligion(user.religion);
    // setBirthplace(user.birthplace);
    // setWork(user.work);
    // setPolitic(user.politic);
    // setFacebook(user.facebook);
    // setTwitter(user.twitter);
    // setRss(user.rss);
    // setDribble(user.dribble);
    // setSpotify(user.spotify);
  };

  const save = async () => {
    try {
      const response = await axios.post("/api/user", {
        name,
        // surname,
        email,
        // birthday,
        // genre,
        // phone,
        // country,
        // state,
        // city,
        // bio,
        // website,
        // religion,
      });
      if (response.status == 200) {
      }
    } catch (error) {}
  };
  return (
    <>
                <div className='page-has-left-panels page-has-right-panels'>
            <LeftSidebar/>
                <RightSidebar/>
                <Header />
               
      {/* Main Header Account */}

      <div className="main-header">
        <div className="content-bg-wrap bg-account"></div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Your Account Dashboard</h1>
                <p>
                  Welcome to your account dashboard! Here you’ll find everything
                  you need to change your profile information, settings, read
                  notifications and requests, view your latest messages, change
                  your pasword and much more! Also you can create or manage your
                  own favourite page, have fun!
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-bottom"
          src="/assets/img/account-bottom.webp"
          width="1169"
          height="153"
        />
      </div>
      {/* ... end Main Header Account */}

      {/* Your Account Personal Information */}

      <div className="container">
        <div className="row">
            <div className="ui-block">
              {/* Your Profile */}

              <div id="profile-panel" className="your-profile">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Your PROFILE</h6>
                </div>

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Profile Settings
                        <svg className="olymp-dropdown-arrow-icon">
                          <use xlinkHref="#olymp-dropdown-arrow-icon"></use>
                        </svg>
                      </button>
                    </h6>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <Tabs
                          defaultTab="vertical-tab-one"
                          vertical
                          className="vertical-tabs"
                        >
                          <TabList>
                            <Tab tabFor="vertical-tab-one">
                              Personal Information
                            </Tab>
                            <Tab tabFor="vertical-tab-two">
                              Account Settings
                            </Tab>
                            <Tab tabFor="vertical-tab-three">
                              Change Password
                            </Tab>
                            <Tab tabFor="vertical-tab-four">
                              Hobbies and Interests
                            </Tab>
                          </TabList>

                          <TabPanel
                            tabId="vertical-tab-one"
                            style={{ width: "80%" }}
                          >
                            <div
                              className="tab-pane fade show active"
                              id="personal"
                              role="tabpanel"
                              aria-labelledby="personal-tab"
                            >
                              <div className="ui-block">
                                <div className="ui-block-title">
                                  <h6 className="title">
                                    Personal Information
                                  </h6>
                                </div>
                                <div className="ui-block-content">
                                  {/* Personal Information Form */}

                                  <form>
                                    <div className="row">
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group label-floating">
                                          <label className="control-label">
                                            First Name
                                          </label>
                                          <input
                                            value={name}
                                            onChange={(e) =>
                                              setName(e.target.value)
                                            }
                                            className="form-control"
                                            placeholder=""
                                            type="text"
                                            defaultValue="James"
                                          />
                                        </div>

                                        <div className="form-group label-floating">
                                                        <label className="control-label">Your Email</label>
                                                        <input value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" placeholder="" type="email"
                                                            defaultValue="jspiegel@yourmail.com" />
                                                    </div>

                                                    <div className="form-group date-time-picker label-floating">
                                                        <label className="control-label">Your Birthday</label>
                                                        <input value="28-04-1998" onChange={(e) => setBirthday(e.target.value)}  name="dateTimepicker" defaultValue="10/24/1984" />
                                                        <span className="input-group-addon">
                                                            <svg className="olymp-month-calendar-icon icon">
                                                                <use xlinkHref="#olymp-month-calendar-icon"></use>
                                                            </svg>
                                                        </span>
                                                    </div>
                                      </div>

                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Last Name</label>
                                                        <input value="-" onChange={(e) => setSurname(e.target.value)}  className="form-control" placeholder="" type="text" defaultValue="Spiegel" />
                                                    </div>

                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Your Website</label>
                                                        <input value="www.website.com" onChange={(e) => setWebsite(e.target.value)}  className="form-control" placeholder="" type="email"
                                                            defaultValue="daydreamzagency.com" />
                                                    </div>


                                                    <div className="form-group label-floating is-empty">
                                                        <label className="control-label">Your Phone Number</label>
                                                        <input value="-" onChange={(e) => setPhone(e.target.value)}  className="form-control" placeholder="" type="text" />
                                                    </div>
                                                </div>

                                                <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className="form-group label-floating is-select">
                                                        <label className="control-label">Your Country</label>
                                                        <select  value="-" onChange={(e) => setCountry(e.target.value)}  className="form-select">
                                                            <option defaultValue="US">United States</option>
                                                            <option defaultValue="AU">Australia</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className="form-group label-floating is-select">
                                                        <label className="control-label">Your State / Province</label>
                                                        <select value="-" onChange={(e) => setState(e.target.value)}  className="form-select">
                                                            <option defaultValue="CA">California</option>
                                                            <option defaultValue="TE">Texas</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className="form-group label-floating is-select">
                                                        <label className="control-label">Your City</label>
                                                        <select value="-" onChange={(e) => setCity(e.target.value)}  className="form-select">
                                                            <option defaultValue="SF">San Francisco</option>
                                                            <option defaultValue="NY">New York</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <textarea value="-" onChange={(e) => setBio(e.target.value)}  className="form-control"
                                                            placeholder="Write a little description about you">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56</textarea>
                                                    </div>

                                                    <div className="form-group label-floating is-select">
                                                        <label className="control-label">Your Gender</label>
                                                        <select  value="-" onChange={(e) => setGenre(e.target.value)}  className="form-select">
                                                            <option defaultValue="MA">Male</option>
                                                            <option defaultValue="FE">Female</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-group label-floating is-empty">
                                                        <label className="control-label">Religious Belifs</label>
                                                        <input value="-" onChange={(e) => setReligion(e.target.value)}  className="form-control" placeholder="" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className="form-group label-floating is-empty">
                                                        <label className="control-label">Your Birthplace</label>
                                                        <input  value="-" onChange={(e) => setBirthplace(e.target.value)}  className="form-control" placeholder="" type="text" />
                                                    </div>

                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Your Occupation</label>
                                                        <input  value="-" onChange={(e) => setWork(e.target.value)}  className="form-control" placeholder="" type="text"
                                                            defaultValue="UI/UX Designer" />
                                                    </div>

                                                    <div className="form-group label-floating is-select">
                                                        <label className="control-label">Status</label>
                                                        <select  value="-" onChange={(e) => setStatus(e.target.value)}  className="form-select">
                                                            <option defaultValue="MA">Married</option>
                                                            <option defaultValue="FE">Not Married</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-group label-floating">
                                                        <label className="control-label">Political Incline</label>
                                                        <input value="-" onChange={(e) => setPolitic(e.target.value)}  className="form-control" placeholder="" type="text" defaultValue="Democrat" />
                                                    </div>
                                                </div>
                                                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group with-icon label-floating">
                                                        <label className="control-label">Your Facebook Account</label>
                                                        <input value="-" onChange={(e) => setFacebook(e.target.value)}  className="form-control" type="text"
                                                            defaultValue="www.facebook.com/james-spiegel95321" />
                                                        <svg className="c-facebook" width="20" height="20">
                                                            <use xlinkHref="#olymp-facebook-icon"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="form-group with-icon label-floating">
                                                        <label className="control-label">Your Twitter Account</label>
                                                        <input  value="-" onChange={(e) => setTwitter(e.target.value)}  className="form-control" type="text"
                                                            defaultValue="www.twitter.com/james_spiegelOK" />
                                                        <svg className="c-twitter" width="20" height="20">
                                                            <use xlinkHref="#olymp-twitter-icon"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="form-group with-icon label-floating is-empty">
                                                        <label className="control-label">Your RSS Feed Account</label>
                                                        <input  value="-" onChange={(e) => setRss(e.target.value)}  className="form-control" type="text" />
                                                        <svg className="c-rss" width="20" height="20">
                                                            <use xlinkHref="#olymp-rss-icon"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="form-group with-icon label-floating">
                                                        <label className="control-label">Your Dribbble Account</label>
                                                        <input  value="-" onChange={(e) => setDribble(e.target.value)}  className="form-control" type="text"
                                                            defaultValue="www.dribbble.com/thecowboydesigner" />
                                                        <svg className="c-dribbble" width="20" height="20">
                                                            <use xlinkHref="#olymp-dribble-icon"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="form-group with-icon label-floating is-empty">
                                                        <label className="control-label">Your Spotify Account</label>
                                                        <input value="-" onChange={(e) => setSpotify(e.target.value)}  className="form-control" type="text" />
                                                        <svg className="c-spotify" width="20" height="20">
                                                            <use xlinkHref="#olymp-spotify-icon"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <button className="btn btn-secondary btn-lg full-width">
                                          Restore all Attributes
                                        </button>
                                      </div>
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <button className="btn btn-primary btn-lg full-width">
                                          Save all Changes
                                        </button>
                                      </div>
                                    </div>
                                  </form>

                                  {/* ... end Personal Information Form */}
                                </div>
                              </div>
                            </div>
                          </TabPanel>

                          <TabPanel
                            tabId="vertical-tab-two"
                            style={{ width: "80%" }}
                          >
                            <div
                              className="tab-pane fade show"
                              id="account"
                              role="tabpanel"
                              aria-labelledby="account-tab"
                            >
                              <div className="ui-block">
                                <div className="ui-block-title">
                                  <h6 className="title">Account Settings</h6>
                                </div>
                                <div className="ui-block-content">
                                  {/* Personal Account Settings Form */}

                                  <form>
                                    <div className="row">
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group label-floating is-select">
                                          <label className="control-label">
                                            Who Can Friend You?
                                          </label>
                                          <select className="form-select">
                                            <option defaultValue="EO">
                                              Everyone
                                            </option>
                                            <option defaultValue="NO">
                                              No One
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group label-floating is-select">
                                          <label className="control-label">
                                            Who Can View Your Posts
                                          </label>
                                          <select className="form-select">
                                            <option defaultValue="US">
                                              Friends Only
                                            </option>
                                            <option defaultValue="EO">
                                              Everyone
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="description-toggle">
                                          <div className="description-toggle-content">
                                            <div className="h6">
                                              Notifications Sound
                                            </div>
                                            <p>
                                              A sound will be played each time
                                              you receive a new activity
                                              notification
                                            </p>
                                          </div>

                                          <div className="togglebutton">
                                            <label>
                                              <input
                                                type="checkbox"
                                                defaultChecked
                                              />
                                            </label>
                                          </div>
                                        </div>
                                        <div className="description-toggle">
                                          <div className="description-toggle-content">
                                            <div className="h6">
                                              Notifications Email
                                            </div>
                                            <p>
                                              We’ll send you an email to your
                                              account each time you receive a
                                              new activity notification
                                            </p>
                                          </div>

                                          <div className="togglebutton">
                                            <label>
                                              <input
                                                type="checkbox"
                                                defaultChecked
                                              />
                                            </label>
                                          </div>
                                        </div>
                                        <div className="description-toggle">
                                          <div className="description-toggle-content">
                                            <div className="h6">
                                              Friend’s Birthdays
                                            </div>
                                            <p>
                                              Choose wheather or not receive
                                              notifications about your friend’s
                                              birthdays on your newsfeed
                                            </p>
                                          </div>

                                          <div className="togglebutton">
                                            <label>
                                              <input
                                                type="checkbox"
                                                defaultChecked
                                              />
                                            </label>
                                          </div>
                                        </div>
                                        <div className="description-toggle">
                                          <div className="description-toggle-content">
                                            <div className="h6">
                                              Chat Message Sound
                                            </div>
                                            <p>
                                              A sound will be played each time
                                              you receive a new message on an
                                              inactive chat window
                                            </p>
                                          </div>

                                          <div className="togglebutton">
                                            <label>
                                              <input
                                                type="checkbox"
                                                defaultChecked
                                              />
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <button className="btn btn-secondary btn-lg full-width">
                                          Restore all Attributes
                                        </button>
                                      </div>
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <button className="btn btn-primary btn-lg full-width">
                                          Save all Changes
                                        </button>
                                      </div>
                                    </div>
                                  </form>

                                  {/* ... end Personal Account Settings Form */}
                                </div>
                              </div>
                            </div>
                          </TabPanel>

                          <TabPanel
                            tabId="vertical-tab-three"
                            style={{ width: "80%" }}
                          >
                            <div
                              className="tab-pane fade show"
                              id="password"
                              role="tabpanel"
                              aria-labelledby="password-tab"
                            >
                              <div className="ui-block">
                                <div className="ui-block-title">
                                  <h6 className="title">Change Password</h6>
                                </div>
                                <div className="ui-block-content">
                                  {/* Change Password Form */}

                                  <form>
                                    <div className="row">
                                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group label-floating">
                                          <label className="control-label">
                                            Confirm Current Password
                                          </label>
                                          <input
                                            className="form-control"
                                            placeholder=""
                                            type="password"
                                            defaultValue="Olympus-2017"
                                          />
                                        </div>
                                      </div>

                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group label-floating is-empty">
                                          <label className="control-label">
                                            Your New Password
                                          </label>
                                          <input
                                            className="form-control"
                                            placeholder=""
                                            type="password"
                                          />
                                        </div>
                                      </div>
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group label-floating is-empty">
                                          <label className="control-label">
                                            Confirm New Password
                                          </label>
                                          <input
                                            className="form-control"
                                            placeholder=""
                                            type="password"
                                          />
                                        </div>
                                      </div>

                                      <div className="col col-lg-12 col-sm-12 col-sm-12 col-12">
                                        <div className="remember">
                                          <div className="checkbox">
                                            <label>
                                              <input
                                                name="optionsCheckboxes"
                                                type="checkbox"
                                              />
                                              Remember Me
                                            </label>
                                          </div>

                                          <a
                                            href="#"
                                            className="forgot"
                                            data-bs-toggle="modal"
                                            data-bs-target="#restore-password"
                                          >
                                            Forgot my Password
                                          </a>
                                        </div>
                                      </div>

                                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button className="btn btn-primary btn-lg full-width">
                                          Change Password Now!
                                        </button>
                                      </div>
                                    </div>
                                  </form>

                                  {/* ... end Change Password Form */}
                                </div>
                              </div>
                            </div>
                          </TabPanel>

                          <TabPanel
                            tabId="vertical-tab-four "
                            style={{ width: "80%" }}
                          >
                            <div
                              className="tab-pane fade show"
                              id="hobbies"
                              role="tabpanel"
                              aria-labelledby="hobbies-tab"
                            >
                              <div className="ui-block">
                                <div className="ui-block-title">
                                  <h6 className="title">
                                    Hobbies and Interests
                                  </h6>
                                </div>
                                <div className="ui-block-content">
                                  {/* Form Hobbies and Interests */}

                                  {/* <form>
                                    <div className="row">
                                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                          <textarea
                                            className="form-control"
                                            placeholder="Hobbies"
                                          >
                                            I like to ride the bike to work,
                                            swimming, and working out. I also
                                            like reading design magazines, go to
                                            museums, and binge watching a good
                                            tv show while it’s raining outside.
                                          </textarea>
                                        </div>
                                        <div className="form-group">
                                          <textarea
                                            className="form-control"
                                            placeholder="Favourite TV Shows"
                                          >
                                            Breaking Good, RedDevil, People of
                                            Interest, The Running Dead, Found,
                                            American Guy.
                                          </textarea>
                                        </div>
                                        <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Favourite Movies"
                            >
                              Idiocratic, The Scarred Wizard and the Fire Crown,
                              Crime Squad, Ferrum Man.{" "}
                            </textarea>
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Favourite Games"
                            >
                              The First of Us, Assassin’s Squad, Dark Assylum,
                              NMAK16, Last Cause 4, Grand Snatch Auto.{" "}
                            </textarea>
                          </div>

                          <button className="btn btn-secondary btn-lg full-width">
                            Cancel
                          </button>
                        </div>

                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Favourite Music Bands / Artists"
                            >
                              Iron Maid, DC/AC, Megablow, The Ill, Kung
                              Fighters, System of a Revenge.
                            </textarea>
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Favourite Books"
                            >
                              The Crime of the Century, Egiptian Mythology 101,
                              The Scarred Wizard, Lord of the Wings, Amongst
                              Gods, The Oracle, A Tale of Air and Water.
                            </textarea>
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Favourite Writers"
                            >
                              Martin T. Georgeston, Jhonathan R. Token, Ivana
                              Rowle, Alexandria Platt, Marcus Roth.{" "}
                            </textarea>
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Other Interests"
                            >
                              Swimming, Surfing, Scuba Diving, Anime,
                              Photography, Tattoos, Street Art.
                            </textarea>
                          </div>

                                        <button className="btn btn-primary btn-lg full-width">
                                          Save all Changes
                                        </button>
                                      </div>
                                    </div>
                                  </form> */}

                                  {/* ... end Form Hobbies and Interests */}
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* ... end Your Account Personal Information */}

      {/* Window-popup-CHAT for responsive min-width: 768px */}

      <div
        className="ui-block popup-chat popup-chat-responsive"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="popup-chat-responsive"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="modal-header">
            <span className="icon-status online"></span>
            <h6 className="title">Chat</h6>
            <div className="more">
              <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon"></use>
              </svg>
              <svg className="olymp-little-delete js-chat-open">
                <use xlinkHref="#olymp-little-delete"></use>
              </svg>
            </div>
          </div>
          <div className="modal-body">
            <div className="mCustomScrollbar">
              <ul className="notification-list chat-message chat-message-field">
                <li>
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar14-sm.webp"
                      width="28"
                      height="28"
                      alt="author"
                      className="mCS_img_loaded"
                    />
                  </div>
                  <div className="notification-event">
                    <span className="chat-message-item">
                      Hi James! Please remember to buy the food for tomorrow!
                      I’m gonna be handling the gifts and Jake’s gonna get the
                      drinks
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        Yesterday at 8:10pm
                      </time>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/author-page.webp"
                      width="36"
                      height="36"
                      alt="author"
                      className="mCS_img_loaded"
                    />
                  </div>
                  <div className="notification-event">
                    <span className="chat-message-item">
                      Don’t worry Mathilda!
                    </span>
                    <span className="chat-message-item">
                      I already bought everything
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        Yesterday at 8:29pm
                      </time>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar14-sm.webp"
                      width="28"
                      height="28"
                      alt="author"
                      className="mCS_img_loaded"
                    />
                  </div>
                  <div className="notification-event">
                    <span className="chat-message-item">
                      Hi James! Please remember to buy the food for tomorrow!
                      I’m gonna be handling the gifts and Jake’s gonna get the
                      drinks
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        Yesterday at 8:10pm
                      </time>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <form className="need-validation">
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Press enter to post..."
                ></textarea>
                <div className="add-options-message">
                  <a href="#" className="options-message">
                    <svg className="olymp-computer-icon">
                      <use xlinkHref="#olymp-computer-icon"></use>
                    </svg>
                  </a>
                  <div className="options-message smile-block">
                    <svg className="olymp-happy-sticker-icon">
                      <use xlinkHref="#olymp-happy-sticker-icon"></use>
                    </svg>

                    <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat1.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat2.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat3.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat4.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat5.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat6.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat7.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat8.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat9.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat10.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat11.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat12.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat13.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat14.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat15.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat16.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat17.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat18.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat19.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat20.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat21.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat22.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat23.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat24.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat25.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat26.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            loading="lazy"
                            src="img/icon-chat27.webp"
                            alt="icon"
                            width="20"
                            height="20"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ... end Window-popup-CHAT for responsive min-width: 768px */}

      <a className="back-to-top" href="#">
        <svg className="back-icon" width="14" height="18">
          <use xlinkHref="#olymp-back-to-top"></use>
        </svg>
      </a>
      </div>
    </>
  );
}

export default UpdateProfile;
