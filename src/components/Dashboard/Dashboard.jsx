import React, { useState } from 'react';
import LeftSidebar from '../Sidebars/LeftSidebar'
import RightSidebar from '../Sidebars/RightSidebar'
import Header from '../Header/Header'

function Dashboard() {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <div className='page-has-left-panels page-has-right-panels'>
                <LeftSidebar/>
                <RightSidebar/>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="top-header top-header-favorit">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block" style={{ marginTop: "18px" }}>
                                <div className="ui-block-title">
                                    <div className="h6 title">Green Goo’s Events</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">

                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">AGGIUNGI EVENTO</h6>
                                </div>
                                <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

                                <table className="event-item-table">
                                    <tbody>
                                        <tr className="event-item">
                                            <td className="upcoming">
                                                <div className="date-event">

                                                    <svg className="olymp-small-calendar-icon"><use xlinkHref="#olymp-small-calendar-icon"></use></svg>

                                                    <span className="day">{date}</span>
                                                    <span className="month">{date}</span>
                                                </div>
                                            </td>
                                            <td className="author">
                                                <div className="event-author inline-items">
                                                    <div className="author-thumb">
                                                        <img loading="lazy" src="/assets/img/avatar66-sm.webp" alt="author" width="34" height="34" />
                                                    </div>
                                                    <div className="author-date">
                                                        <a href="#" className="author-name h6">
                                                            <input value={title} onChange={(e) => setTitle(e.target.value)}  className="form-control" placeholder="Titolo" type="text" />
                                                        </a>
                                                        <time className="published" dateTime="2017-03-24T18:18">{date}</time>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="location">
                                                <div className="place inline-items">
                                                    <svg className="olymp-add-a-place-icon"><use xlinkHref="#olymp-add-a-place-icon"></use></svg>
                                                    <span></span>
                                                </div>
                                            </td>
                                            <td className="description">
                                                <p className="description">
                                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Descrizione"></textarea>
                                                </p>
                                            </td>
                                            <td className="users">

                                            </td>
                                            <td className="add-event">
                                                <a href="20-CalendarAndEvents-MonthlyCalendar.html" className="btn btn-breez btn-sm">Crea</a>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">

                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">UPCOMING EVENTS 2016</h6>
                                </div>


                                <table className="event-item-table">
                                    <tbody>
                                        <tr className="event-item">

                                            <td className="upcoming">
                                                <div className="date-event">

                                                    <svg className="olymp-small-calendar-icon"><use xlinkHref="#olymp-small-calendar-icon"></use></svg>

                                                    <span className="day">28</span>
                                                    <span className="month">may</span>
                                                </div>
                                            </td>
                                            <td className="author">
                                                <div className="event-author inline-items">
                                                    <div className="author-thumb">
                                                        <img loading="lazy" src="/assets/img/avatar66-sm.webp" alt="author" width="34" height="34" />
                                                    </div>
                                                    <div className="author-date">
                                                        <a href="#" className="author-name h6">Green Goo in Gotham</a>
                                                        <time className="published" dateTime="2017-03-24T18:18">Saturday at 9:00pm</time>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="location">
                                                <div className="place inline-items">
                                                    <svg className="olymp-add-a-place-icon"><use xlinkHref="#olymp-add-a-place-icon"></use></svg>
                                                    <span>Gotham Bar</span>
                                                </div>
                                            </td>
                                            <td className="description">
                                                <p className="description">We’ll be playing in the Gotham Bar in May. Come and have a great time with us! Entry: $12</p>
                                            </td>
                                            <td className="users">
                                                <ul className="friends-harmonic">
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic5.webp" alt="friend" width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic10.webp" alt="friend" width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic7.webp" alt="friend" width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic8.webp" alt="friend" width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic2.webp" alt="friend" width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users bg-breez">+24</a>
                                                    </li>

                                                    <li className="with-text">
                                                        Will Assist
                                                    </li>
                                                </ul>
                                            </td>
                                            <td className="add-event">
                                                <a href="20-CalendarAndEvents-MonthlyCalendar.html" className="btn btn-breez btn-sm">Add to Calendar</a>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Window-popup-CHAT for responsive min-width: 768px  */}

                <div className="ui-block popup-chat popup-chat-responsive" tabIndex="-1" role="dialog" aria-labelledby="popup-chat-responsive" aria-hidden="true">

                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="icon-status online"></span>
                            <h6 className="title" >Chat</h6>
                            <div className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon"></use></svg>
                                <svg className="olymp-little-delete js-chat-open"><use xlinkHref="#olymp-little-delete"></use></svg>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="mCustomScrollbar">
                                <ul className="notification-list chat-message chat-message-field">
                                    <li>
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar14-sm.webp" width="28" height="28" alt="author" className="mCS_img_loaded" />
                                        </div>
                                        <div className="notification-event">
                                            <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/author-page.webp" width="36" height="36" alt="author" className="mCS_img_loaded" />
                                        </div>
                                        <div className="notification-event">
                                            <span className="chat-message-item">Don’t worry Mathilda!</span>
                                            <span className="chat-message-item">I already bought everything</span>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar14-sm.webp" width="28" height="28" alt="author" className="mCS_img_loaded" />
                                        </div>
                                        <div className="notification-event">
                                            <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <form className="need-validation">

                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Press enter to post..."></textarea>
                                    <div className="add-options-message">
                                        <a href="#" className="options-message">
                                            <svg className="olymp-computer-icon"><use xlinkHref="#olymp-computer-icon"></use></svg>
                                        </a>
                                        <div className="options-message smile-block">

                                            <svg className="olymp-happy-sticker-icon"><use xlinkHref="#olymp-happy-sticker-icon"></use></svg>

                                            <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat1.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat2.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat3.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat4.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat5.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat6.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat7.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat8.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat9.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat10.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat11.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat12.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat13.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat14.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat15.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat16.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat17.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat18.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat19.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat20.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat21.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat22.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat23.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat24.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat25.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat26.webp" alt="icon" width="20" height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat27.webp" alt="icon" width="20" height="20" />
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


            </div>

        </>
    )
}

export default Dashboard