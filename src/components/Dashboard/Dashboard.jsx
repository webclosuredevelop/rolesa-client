import React from 'react'
import LeftSidebar from '../Sidebars/LeftSidebar'
import RightSidebar from '../Sidebars/RightSidebar'
import Header from '../Header/Header'

function Dashboard() {
    return (
        <>
            <div className='page-has-left-panels page-has-right-panels'>
                <LeftSidebar/>
                <RightSidebar/>
                <Header/>
                <div class="container">
                    <div class="row">
                        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="ui-block">
                                <div class="top-header top-header-favorit">
                                    {/* <div class="top-header-thumb">

                                    <div class="top-header-author">
                                        <div class="author-thumb">
                                            <img loading="lazy" src="/assets/img/author-main2.webp" alt="author" width="120" height="120" />
                                        </div>
                                        <div class="author-content">
                                            <a href="#" class="h3 author-name">Green Goo Rock</a>
                                            <div class="country">Rock Band  |  San Francisco, CA</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="profile-section">
                                    <div class="row">
                                        <div class="col col-xl-8 m-auto col-lg-8 col-md-12">
                                            <ul class="profile-menu">
                                                <li>
                                                    <a href="12-FavouritePage.html" class="active">Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="13-FavouritePage-About.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="07-ProfilePage-Photos.html">Photos</a>
                                                </li>
                                                <li>
                                                    <a href="09-ProfilePage-Videos.html">Videos</a>
                                                </li>
                                                <li>
                                                    <a href="14-FavouritePage-Statistics.html">Statistics</a>
                                                </li>
                                                <li>
                                                    <a href="15-FavouritePage-Events.html">Events</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="control-block-button">
                                        <a href="#" class="btn btn-control bg-primary">
                                            <svg class="olymp-star-icon"><use xlinkHref="#olymp-star-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlinkHref="#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="container">
                    <div class="row">
                        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="ui-block" style={{ marginTop: "18px" }}>
                                <div class="ui-block-title">
                                    <div class="h6 title">Green Goo’s Events</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="ui-block">

                                <div class="ui-block-title ui-block-title-small">
                                    <h6 class="title">UPCOMING EVENTS 2016</h6>
                                </div>


                                <table class="event-item-table">
                                    <tbody>
                                        <tr class="event-item">

                                            <td class="upcoming">
                                                <div class="date-event">

                                                    <svg class="olymp-small-calendar-icon"><use xlinkHref="#olymp-small-calendar-icon"></use></svg>

                                                    <span class="day">28</span>
                                                    <span class="month">may</span>
                                                </div>
                                            </td>
                                            <td class="author">
                                                <div class="event-author inline-items">
                                                    <div class="author-thumb">
                                                        <img loading="lazy" src="/assets/img/avatar66-sm.webp" alt="author" width="34" height="34" />
                                                    </div>
                                                    <div class="author-date">
                                                        <a href="#" class="author-name h6">Green Goo in Gotham</a>
                                                        <time class="published" datetime="2017-03-24T18:18">Saturday at 9:00pm</time>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="location">
                                                <div class="place inline-items">
                                                    <svg class="olymp-add-a-place-icon"><use xlinkHref="#olymp-add-a-place-icon"></use></svg>
                                                    <span>Gotham Bar</span>
                                                </div>
                                            </td>
                                            <td class="description">
                                                <p class="description">We’ll be playing in the Gotham Bar in May. Come and have a great time with us! Entry: $12</p>
                                            </td>
                                            <td class="users">
                                                <ul class="friends-harmonic">
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
                                                        <a href="#" class="all-users bg-breez">+24</a>
                                                    </li>

                                                    <li class="with-text">
                                                        Will Assist
                                                    </li>
                                                </ul>
                                            </td>
                                            <td class="add-event">
                                                <a href="20-CalendarAndEvents-MonthlyCalendar.html" class="btn btn-breez btn-sm">Add to Calendar</a>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>

                                <div class="ui-block-title ui-block-title-small">
                                    <h6 class="title">PAST EVENTS</h6>
                                </div>

                                <div class="no-past-events">
                                    <svg class="olymp-month-calendar-icon"><use xlinkHref="#olymp-month-calendar-icon"></use></svg>
                                    <span>There are no past events <br />to show</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Window-popup-CHAT for responsive min-width: 768px  */}

                <div class="ui-block popup-chat popup-chat-responsive" tabindex="-1" role="dialog" aria-labelledby="popup-chat-responsive" aria-hidden="true">

                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="icon-status online"></span>
                            <h6 class="title" >Chat</h6>
                            <div class="more">
                                <svg class="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon"></use></svg>
                                <svg class="olymp-little-delete js-chat-open"><use xlinkHref="#olymp-little-delete"></use></svg>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="mCustomScrollbar">
                                <ul class="notification-list chat-message chat-message-field">
                                    <li>
                                        <div class="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar14-sm.webp" width="28" height="28" alt="author" class="mCS_img_loaded" />
                                        </div>
                                        <div class="notification-event">
                                            <span class="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="author-thumb">
                                            <img loading="lazy" src="/assets/img/author-page.webp" width="36" height="36" alt="author" class="mCS_img_loaded" />
                                        </div>
                                        <div class="notification-event">
                                            <span class="chat-message-item">Don’t worry Mathilda!</span>
                                            <span class="chat-message-item">I already bought everything</span>
                                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar14-sm.webp" width="28" height="28" alt="author" class="mCS_img_loaded" />
                                        </div>
                                        <div class="notification-event">
                                            <span class="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <form class="need-validation">

                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Press enter to post..."></textarea>
                                    <div class="add-options-message">
                                        <a href="#" class="options-message">
                                            <svg class="olymp-computer-icon"><use xlinkHref="#olymp-computer-icon"></use></svg>
                                        </a>
                                        <div class="options-message smile-block">

                                            <svg class="olymp-happy-sticker-icon"><use xlinkHref="#olymp-happy-sticker-icon"></use></svg>

                                            <ul class="more-dropdown more-with-triangle triangle-bottom-right">
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