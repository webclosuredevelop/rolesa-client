import React from 'react'
import Header from '../Header/Header'
import LeftSidebar from '../Sidebars/LeftSidebar'
import RightSidebar from '../Sidebars/RightSidebar'
function Profile() {
    return (
        <>
            <div className='page-has-left-panels page-has-right-panels'>
            <LeftSidebar/>
                <RightSidebar/>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="top-header">
                                    <div className="top-header-thumb">

                                    </div>
                                    <div className="profile-section">
                                        <div className="row">
                                            <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                                                <ul className="profile-menu">
                                                    <li>
                                                        <a href="02-ProfilePage.html" className="active">Timeline</a>
                                                    </li>
                                                    <li>
                                                        <a href="05-ProfilePage-About.html">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="06-ProfilePage.html">Friends</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col col-lg-5 ms-auto col-md-5 col-sm-12 col-12">
                                                <ul className="profile-menu">
                                                    <li>
                                                        <a href="07-ProfilePage-Photos.html">Photos</a>
                                                    </li>
                                                    <li>
                                                        <a href="09-ProfilePage-Videos.html">Videos</a>
                                                    </li>
                                                    <li>
                                                        <div className="more">
                                                            <svg className="olymp-three-dots-icon">
                                                                <use xlinkHref="#olymp-three-dots-icon"></use>
                                                            </svg>
                                                            <ul className="more-dropdown more-with-triangle">
                                                                <li>
                                                                    <a href="#">Report Profile</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Block Profile</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="control-block-button">
                                            <a href="35-YourAccount-FriendsRequests.html" className="btn btn-control bg-blue">
                                                <svg className="olymp-happy-face-icon">
                                                    <use xlinkHref="#olymp-happy-face-icon"></use>
                                                </svg>
                                            </a>

                                            <a href="#" className="btn btn-control bg-purple">
                                                <svg className="olymp-chat---messages-icon">
                                                    <use xlinkHref="#olymp-chat---messages-icon"></use>
                                                </svg>
                                            </a>

                                            <div className="btn btn-control bg-primary more">
                                                <svg className="olymp-settings-icon">
                                                    <use xlinkHref="#olymp-settings-icon"></use>
                                                </svg>

                                                <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#update-header-photo">Update Profile Photo</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#update-header-photo">Update Header Photo</a>
                                                    </li>
                                                    <li>
                                                        <a className='disabled' href="#">Account Settings</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="top-header-author">
                                        <a href="02-ProfilePage.html" className="author-thumb">
                                            <img loading="lazy" src="/assets/img/author-main1.webp" alt="author" width="124" height="124" />
                                        </a>
                                        <div className="author-content">
                                            <a href="02-ProfilePage.html" className="h4 author-name">James Spiegel</a>
                                            <div className="country">San Francisco, CA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ... end Top Header-Profile */}
                <div className="container-fluid">
                    <div className="row">

                        {/* Main Content */}

                        <div className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                            <div id="newsfeed-items-grid">

                                <div className="ui-block">

                                    {/* Post */}

                                    <article className="hentry post video">
                                    <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Profile Intro</h6>
                                </div>
                                <div className="ui-block-content">

                                    {/* W-Personal-Info */}

                                    <ul className="widget w-personal-info item-block">
                                        <li>
                                            <span className="title">About Me:</span>
                                            <span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the
                                                “Daydreams” Agency in Pier 56.</span>
                                        </li>
                                        <li>
                                            <span className="title">Favourite TV Shows:</span>
                                            <span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,
                                                American Guy.</span>
                                        </li>
                                     </ul>
                                </div>
                            </div>

                                        <div className="post__author author vcard inline-items">
                                            <img loading="lazy" src="/assets/img/author-page.webp" width="36" height="36" alt="author" />

                                            <div className="author-date">
                                                <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                                                shared a
                                                <a href="#">link</a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        7 hours ago
                                                    </time>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="#olymp-three-dots-icon"></use>
                                                </svg>
                                                <ul className="more-dropdown">
                                                    <li>
                                                        <a href="#">Edit Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Turn Off Notifications</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Select as Featured</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        <p>If someone missed it, check out the new song by System of a Revenge! I thinks they are
                                            going back to their roots...</p>

                                        <div className="post-video">
                                            <div className="video-thumb">
                                                <img loading="lazy" src="/assets/img/video5.webp" alt="photo" width="178" height="178" />
                                                <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video">
                                                    <svg className="olymp-play-icon">
                                                        <use xlinkHref="#olymp-play-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="video-content">
                                                <a href="#" className="h4 title">System of a Revenge - Nothing Else Matters (LIVE)</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempo
                                                    incididunt ut labore..</p>
                                                <a href="#" className="link-site">YOUTUBE.COM</a>
                                            </div>
                                        </div>

                                        <div className="post-additional-info inline-items">

                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-heart-icon">
                                                    <use xlinkHref="#olymp-heart-icon"></use>
                                                </svg>
                                                <span>15</span>
                                            </a>

                                            <ul className="friends-harmonic">
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic9.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic10.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic7.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic8.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic11.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="names-people-likes">
                                                <a href="#">Jenny</a>, <a href="#">Robert</a> and
                                                <br />13 more liked this
                                            </div>

                                            <div className="comments-shared">
                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-speech-balloon-icon">
                                                        <use xlinkHref="#olymp-speech-balloon-icon"></use>
                                                    </svg>
                                                    <span>1</span>
                                                </a>

                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-share-icon">
                                                        <use xlinkHref="#olymp-share-icon"></use>
                                                    </svg>
                                                    <span>16</span>
                                                </a>
                                            </div>


                                        </div>


                                    </article>

                                    {/* .. end Post */}
                                </div>
                                <div className="ui-block">
                                    {/* Post */}

                                    <article className="hentry post">

                                        <div className="post__author author vcard inline-items">
                                            <img loading="lazy" src="/assets/img/author-page.webp" width="36" height="36" alt="author" />

                                            <div className="author-date">
                                                <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        2 hours ago
                                                    </time>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="#olymp-three-dots-icon"></use>
                                                </svg>
                                                <ul className="more-dropdown">
                                                    <li>
                                                        <a href="#">Edit Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Turn Off Notifications</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Select as Featured</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt
                                            ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            consequat.
                                        </p>

                                        <div className="post-additional-info inline-items">

                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-heart-icon">
                                                    <use xlinkHref="#olymp-heart-icon"></use>
                                                </svg>
                                                <span>36</span>
                                            </a>

                                            <ul className="friends-harmonic">
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic7.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic8.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic9.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic10.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic11.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="names-people-likes">
                                                <a href="#">You</a>, <a href="#">Elaine</a> and
                                                <br />34 more liked this
                                            </div>


                                            <div className="comments-shared">
                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-speech-balloon-icon">
                                                        <use xlinkHref="#olymp-speech-balloon-icon"></use>
                                                    </svg>
                                                    <span>17</span>
                                                </a>

                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-share-icon">
                                                        <use xlinkHref="#olymp-share-icon"></use>
                                                    </svg>
                                                    <span>24</span>
                                                </a>
                                            </div>


                                        </div>


                                    </article>

                                    {/* .. end Post */}
                                    {/* Comments */}

                                    <ul className="comments-list">
                                        <li className="comment-item">
                                            <div className="post__author author vcard inline-items">
                                                <img loading="lazy" src="/assets/img/avatar10-sm.webp" alt="author" width="36" height="36" />

                                                <div className="author-date">
                                                    <a className="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                                                    <div className="post__date">
                                                        <time className="published" dateTime="2017-03-24T18:18">
                                                            5 mins ago
                                                        </time>
                                                    </div>
                                                </div>

                                                <a href="#" className="more">
                                                    <svg className="olymp-three-dots-icon">
                                                        <use xlinkHref="#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>

                                            </div>

                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der
                                                doloremque laudantium.</p>

                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-heart-icon">
                                                    <use xlinkHref="#olymp-heart-icon"></use>
                                                </svg>
                                                <span>8</span>
                                            </a>
                                            <a href="#" className="reply">Reply</a>
                                        </li>
                                        <li className="comment-item has-children">
                                            <div className="post__author author vcard inline-items">
                                                <img loading="lazy" src="/assets/img/avatar5-sm.webp" alt="author" width="42" height="42" />

                                                <div className="author-date">
                                                    <a className="h6 post__author-name fn" href="#">Green Goo Rock</a>
                                                    <div className="post__date">
                                                        <time className="published" dateTime="2017-03-24T18:18">
                                                            1 hour ago
                                                        </time>
                                                    </div>
                                                </div>

                                                <a href="#" className="more">
                                                    <svg className="olymp-three-dots-icon">
                                                        <use xlinkHref="#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>

                                            </div>

                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiten, sed
                                                quia
                                                consequuntur magni dolores eos qui ratione voluptatem sequi en lod nesciunt. Neque
                                                porro
                                                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit en
                                                lorem ipsum der.
                                            </p>

                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-heart-icon">
                                                    <use xlinkHref="#olymp-heart-icon"></use>
                                                </svg>
                                                <span>5</span>
                                            </a>
                                            <a href="#" className="reply">Reply</a>

                                            <ul className="children">
                                                <li className="comment-item">
                                                    <div className="post__author author vcard inline-items">
                                                        <img loading="lazy" src="/assets/img/avatar8-sm.webp" alt="author" width="36"
                                                            height="36" />

                                                        <div className="author-date">
                                                            <a className="h6 post__author-name fn" href="#">Diana Jameson</a>
                                                            <div className="post__date">
                                                                <time className="published" dateTime="2017-03-24T18:18">
                                                                    39 mins ago
                                                                </time>
                                                            </div>
                                                        </div>

                                                        <a href="#" className="more">
                                                            <svg className="olymp-three-dots-icon">
                                                                <use xlinkHref="#olymp-three-dots-icon"></use>
                                                            </svg>
                                                        </a>

                                                    </div>

                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                                        eu fugiat nulla pariatur.</p>

                                                    <a href="#" className="post-add-icon inline-items">
                                                        <svg className="olymp-heart-icon">
                                                            <use xlinkHref="#olymp-heart-icon"></use>
                                                        </svg>
                                                        <span>2</span>
                                                    </a>
                                                    <a href="#" className="reply">Reply</a>
                                                </li>
                                                <li className="comment-item">
                                                    <div className="post__author author vcard inline-items">
                                                        <img loading="lazy" src="/assets/img/avatar2-sm.webp" alt="author" width="42"
                                                            height="42" />

                                                        <div className="author-date">
                                                            <a className="h6 post__author-name fn" href="#">Nicholas Grisom</a>
                                                            <div className="post__date">
                                                                <time className="published" dateTime="2017-03-24T18:18">
                                                                    24 mins ago
                                                                </time>
                                                            </div>
                                                        </div>

                                                        <a href="#" className="more">
                                                            <svg className="olymp-three-dots-icon">
                                                                <use xlinkHref="#olymp-three-dots-icon"></use>
                                                            </svg>
                                                        </a>

                                                    </div>

                                                    <p>Excepteur sint occaecat cupidatat non proident.</p>

                                                    <a href="#" className="post-add-icon inline-items">
                                                        <svg className="olymp-heart-icon">
                                                            <use xlinkHref="#olymp-heart-icon"></use>
                                                        </svg>
                                                        <span>0</span>
                                                    </a>
                                                    <a href="#" className="reply">Reply</a>

                                                </li>
                                            </ul>

                                        </li>

                                        <li className="comment-item">
                                            <div className="post__author author vcard inline-items">
                                                <img loading="lazy" src="/assets/img/avatar4-sm.webp" alt="author" width="42" height="42" />

                                                <div className="author-date">
                                                    <a className="h6 post__author-name fn" href="#">Chris Greyson</a>
                                                    <div className="post__date">
                                                        <time className="published" dateTime="2017-03-24T18:18">
                                                            1 hour ago
                                                        </time>
                                                    </div>
                                                </div>

                                                <a href="#" className="more">
                                                    <svg className="olymp-three-dots-icon">
                                                        <use xlinkHref="#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>

                                            </div>

                                            <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                in culpa qui officia deserunt mollit.</p>

                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-heart-icon">
                                                    <use xlinkHref="#olymp-heart-icon"></use>
                                                </svg>
                                                <span>7</span>
                                            </a>
                                            <a href="#" className="reply">Reply</a>

                                        </li>
                                    </ul>

                                    {/* ... end Comments */}
                                    <a href="#" className="more-comments">View more comments <span>+</span></a>

                                    {/* Comment Form  */}

                                    <form className="comment-form inline-items">

                                        <div className="post__author author vcard inline-items">
                                            <img loading="lazy" src="/assets/img/author-page.webp" width="36" height="36" alt="author" />

                                            <div className="form-group with-icon-right ">
                                                <textarea className="form-control" placeholder=""></textarea>
                                                <div className="add-options-message">
                                                    <a href="#" className="options-message" data-bs-toggle="modal"
                                                        data-bs-target="#update-header-photo">
                                                        <svg className="olymp-camera-icon">
                                                            <use xlinkHref="#olymp-camera-icon"></use>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="btn btn-md-2 btn-primary">Post Comment</button>

                                        <button
                                            className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel</button>

                                    </form>

                                    {/* ... end Comment Form  */}
                                </div>
                                <div className="ui-block">
                                    {/* Post */}

                                    <article className="hentry post has-post-thumbnail shared-photo">

                                        <div className="post__author author vcard inline-items">
                                            <img loading="lazy" src="/assets/img/author-page.webp" width="36" height="36" alt="author" />

                                            <div className="author-date">
                                                <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                                                shared
                                                <a href="#">Diana Jameson</a>’s <a href="#">photo</a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        7 hours ago
                                                    </time>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <svg className="olymp-three-dots-icon">
                                                    <use xlinkHref="#olymp-three-dots-icon"></use>
                                                </svg>
                                                <ul className="more-dropdown">
                                                    <li>
                                                        <a href="#">Edit Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delete Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Turn Off Notifications</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Select as Featured</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        <p>Hi! Everyone should check out these amazing photographs that my friend shot the past
                                            week. Here’s one of them...leave a kind comment!</p>

                                        <div className="post-thumb">
                                            <img loading="lazy" src="/assets/img/post-photo6.webp" alt="photo" width="618" height="412" />
                                        </div>

                                        <ul className="children single-children">
                                            <li className="comment-item">
                                                <div className="post__author author vcard inline-items">
                                                    <img loading="lazy" src="/assets/img/avatar8-sm.webp" alt="author" width="36"
                                                        height="36" />
                                                    <div className="author-date">
                                                        <a className="h6 post__author-name fn" href="#">Diana Jameson</a>
                                                        <div className="post__date">
                                                            <time className="published" dateTime="2017-03-24T18:18">
                                                                16 hours ago
                                                            </time>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p>Here’s the first photo of our incredible photoshoot from yesterday. If you like
                                                    it please say so and tel me what you wanna see next!</p>
                                            </li>
                                        </ul>

                                        <div className="post-additional-info inline-items">

                                            <a href="#" className="post-add-icon inline-items">
                                                <svg className="olymp-heart-icon">
                                                    <use xlinkHref="#olymp-heart-icon"></use>
                                                </svg>
                                                <span>15</span>
                                            </a>

                                            <ul className="friends-harmonic">
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic5.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic10.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic7.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic8.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/friend-harmonic2.webp" alt="friend" width="28"
                                                            height="28" />
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="names-people-likes">
                                                <a href="#">Diana</a>, <a href="#">Nicholas</a> and
                                                <br />13 more liked this
                                            </div>

                                            <div className="comments-shared">
                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-speech-balloon-icon">
                                                        <use xlinkHref="#olymp-speech-balloon-icon"></use>
                                                    </svg>
                                                    <span>0</span>
                                                </a>

                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-share-icon">
                                                        <use xlinkHref="#olymp-share-icon"></use>
                                                    </svg>
                                                    <span>16</span>
                                                </a>
                                            </div>

                                        </div>


                                    </article>

                                    {/* .. end Post */}
                                </div>
                            </div>

                            <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html"
                                data-container="newsfeed-items-grid">
                                <svg className="olymp-three-dots-icon">
                                    <use xlinkHref="#olymp-three-dots-icon"></use>
                                </svg>
                            </a>
                        </div>

                        {/* ... end Main Content */}


                        {/* Left Sidebar */}

                      
                   

                        <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">

                          
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Blog Posts</h6>
                                </div>
                                {/* W-Blog-Posts */}

                                <ul className="widget w-blog-posts">
                                    <li>
                                        <article className="hentry post">

                                            <a href="#" className="h4">My Perfect Vacations in South America and Europe</a>

                                            <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut
                                                labore et.</p>

                                            <div className="post__date">
                                                <time className="published" dateTime="2017-03-24T18:18">
                                                    7 hours ago
                                                </time>
                                            </div>

                                        </article>
                                    </li>
                                    <li>
                                        <article className="hentry post">

                                            <a href="#" className="h4">The Big Experience of Travelling Alone</a>

                                            <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut
                                                labore et.</p>

                                            <div className="post__date">
                                                <time className="published" dateTime="2017-03-24T18:18">
                                                    March 18th, at 6:52pm
                                                </time>
                                            </div>

                                        </article>
                                    </li>
                                </ul>

                                {/* .. end W-Blog-Posts */}
                            </div>

                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Friends (86)</h6>
                                </div>
                                <div className="ui-block-content">

                                    {/* W-Faved-Page */}

                                    <ul className="widget w-faved-page js-zoom-gallery">
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar38-sm.webp" alt="author" width="36" height="36" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar24-sm.webp" width="42" height="42" alt="user" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar36-sm.webp" alt="author" width="42" height="42" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar35-sm.webp" alt="user" width="42" height="42" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar34-sm.webp" alt="author" width="42" height="42" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar33-sm.webp" alt="author" width="42" height="42" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar32-sm.webp" alt="user" width="42" height="42" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar31-sm.webp" alt="author" width="42" height="42" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar30-sm.webp" alt="author" width="42" height="42" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar29-sm.webp" width="42" height="42" alt="user" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar28-sm.webp" width="42" height="42" alt="user" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar27-sm.webp" width="42" height="42" alt="user" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar26-sm.webp" width="42" height="42" alt="user" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img loading="lazy" src="/assets/img/avatar25-sm.webp" width="42" height="42" alt="user" />
                                            </a>
                                        </li>
                                        <li className="all-users">
                                            <a href="#">+74</a>
                                        </li>
                                    </ul>

                                    {/* .. end W-Faved-Page */}
                                </div>
                            </div>

                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Favourite Pages</h6>
                                </div>

                                {/* W-Friend-Pages-Added */}

                                <ul className="widget w-friend-pages-added notification-list friend-requests">
                                    <li className="inline-items">
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar41-sm.webp" alt="author" width="36" height="36" />
                                        </div>
                                        <div className="notification-event">
                                            <a href="#" className="h6 notification-friend">The Marina Bar</a>
                                            <span className="chat-message-item">Restaurant / Bar</span>
                                        </div>
                                        <span className="notification-icon" data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-original-title="ADD TO YOUR FAVS">
                                            <a href="#">
                                                <svg className="olymp-star-icon">
                                                    <use xlinkHref="#olymp-star-icon"></use>
                                                </svg>
                                            </a>
                                        </span>

                                    </li>

                                    <li className="inline-items">
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar42-sm.webp" alt="author" width="36" height="36" />
                                        </div>
                                        <div className="notification-event">
                                            <a href="#" className="h6 notification-friend">Tapronus Rock</a>
                                            <span className="chat-message-item">Rock Band</span>
                                        </div>
                                        <span className="notification-icon" data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-original-title="ADD TO YOUR FAVS">
                                            <a href="#">
                                                <svg className="olymp-star-icon">
                                                    <use xlinkHref="#olymp-star-icon"></use>
                                                </svg>
                                            </a>
                                        </span>

                                    </li>

                                    <li className="inline-items">
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar43-sm.webp" alt="author" width="36" height="36" />
                                        </div>
                                        <div className="notification-event">
                                            <a href="#" className="h6 notification-friend">Pixel Digital Design</a>
                                            <span className="chat-message-item">Company</span>
                                        </div>
                                        <span className="notification-icon" data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-original-title="ADD TO YOUR FAVS">
                                            <a href="#">
                                                <svg className="olymp-star-icon">
                                                    <use xlinkHref="#olymp-star-icon"></use>
                                                </svg>
                                            </a>
                                        </span>
                                    </li>

                                    <li className="inline-items">
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar44-sm.webp" alt="author" width="36" height="36" />
                                        </div>
                                        <div className="notification-event">
                                            <a href="#" className="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
                                            <span className="chat-message-item">Clothing Store</span>
                                        </div>
                                        <span className="notification-icon" data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-original-title="ADD TO YOUR FAVS">
                                            <a href="#">
                                                <svg className="olymp-star-icon">
                                                    <use xlinkHref="#olymp-star-icon"></use>
                                                </svg>
                                            </a>
                                        </span>

                                    </li>

                                    <li className="inline-items">
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar45-sm.webp" alt="author" width="36" height="36" />
                                        </div>
                                        <div className="notification-event">
                                            <a href="#" className="h6 notification-friend">Crimson Agency</a>
                                            <span className="chat-message-item">Company</span>
                                        </div>
                                        <span className="notification-icon" data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-original-title="ADD TO YOUR FAVS">
                                            <a href="#">
                                                <svg className="olymp-star-icon">
                                                    <use xlinkHref="#olymp-star-icon"></use>
                                                </svg>
                                            </a>
                                        </span>
                                    </li>

                                    <li className="inline-items">
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar46-sm.webp" alt="author" width="38" height="38" />
                                        </div>
                                        <div className="notification-event">
                                            <a href="#" className="h6 notification-friend">Mannequin Angel</a>
                                            <span className="chat-message-item">Clothing Store</span>
                                        </div>
                                        <span className="notification-icon" data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-original-title="ADD TO YOUR FAVS">
                                            <a href="#">
                                                <svg className="olymp-star-icon">
                                                    <use xlinkHref="#olymp-star-icon"></use>
                                                </svg>
                                            </a>
                                        </span>
                                    </li>
                                </ul>

                                {/* .. end W-Friend-Pages-Added */}
                            </div>

                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">James's Poll</h6>
                                </div>
                                <div className="ui-block-content">

                                    {/* W-Pool */}

                                    <ul className="widget w-pool">
                                        <li>
                                            <p>If you had to choose, which actor do you prefer to be the next Darkman? </p>
                                        </li>
                                        <li>
                                            <div className="skills-item">
                                                <div className="skills-item-info">
                                                    <span className="skills-item-title">
                                                        <span className="radio">
                                                            <label>
                                                                <input type="radio" name="optionsRadios" />
                                                                Thomas Bale
                                                            </label>
                                                        </span>
                                                    </span>
                                                    <span className="skills-item-count">
                                                        <span className="count-animate" data-speed="1000" data-refresh-interval="50"
                                                            data-to="62" data-from="0"></span>
                                                        <span className="units">62%</span>
                                                    </span>
                                                </div>
                                                <div className="skills-item-meter">
                                                    <span className="skills-item-meter-active bg-primary" style={{ width: "62%" }}></span>
                                                </div>

                                                <div className="counter-friends">12 friends voted for this</div>

                                                <ul className="friends-harmonic">
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic1.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic2.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic3.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic4.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic5.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic6.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic7.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic8.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic9.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+3</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="skills-item">
                                                <div className="skills-item-info">
                                                    <span className="skills-item-title">
                                                        <span className="radio">
                                                            <label>
                                                                <input type="radio" name="optionsRadios" />
                                                                Ben Robertson
                                                            </label>
                                                        </span>
                                                    </span>
                                                    <span className="skills-item-count">
                                                        <span className="count-animate" data-speed="1000" data-refresh-interval="50"
                                                            data-to="27" data-from="0"></span>
                                                        <span className="units">27%</span>
                                                    </span>
                                                </div>
                                                <div className="skills-item-meter">
                                                    <span className="skills-item-meter-active bg-primary" style={{ width: "27%" }}></span>
                                                </div>
                                                <div className="counter-friends">7 friends voted for this</div>

                                                <ul className="friends-harmonic">
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic7.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic8.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic9.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic10.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic11.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic12.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic13.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="skills-item">
                                                <div className="skills-item-info">
                                                    <span className="skills-item-title">
                                                        <span className="radio">
                                                            <label>
                                                                <input type="radio" name="optionsRadios" />
                                                                Michael Streiton
                                                            </label>
                                                        </span>
                                                    </span>
                                                    <span className="skills-item-count">
                                                        <span className="count-animate" data-speed="1000" data-refresh-interval="50"
                                                            data-to="11" data-from="0"></span>
                                                        <span className="units">11%</span>
                                                    </span>
                                                </div>
                                                <div className="skills-item-meter">
                                                    <span className="skills-item-meter-active bg-primary" style={{ width: "11%" }}></span>
                                                </div>

                                                <div className="counter-friends">2 people voted for this</div>

                                                <ul className="friends-harmonic">
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic14.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img loading="lazy" src="/assets/img/friend-harmonic15.webp" alt="friend"
                                                                width="28" height="28" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>

                                    {/* .. end W-Pool */}
                                    <a href="#" className="btn btn-md-2 btn-border-think custom-color c-grey full-width">Vote Now!</a>
                                </div>
                            </div>

                        </div>

                        {/* ... end Right Sidebar */}

                    </div>
                </div>

                {/* Window-popup Update Header Photo */}

                <div className="modal fade" id="update-header-photo" tabIndex="-1" role="dialog" aria-labelledby="update-header-photo"
                    aria-hidden="true">
                    <div className="modal-dialog window-popup update-header-photo" role="document">
                        <div className="modal-content">
                            <a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg className="olymp-close-icon">
                                    <use xlinkHref="#olymp-close-icon"></use>
                                </svg>
                            </a>

                            <div className="modal-header">
                                <h6 className="title">Update Header Photo</h6>
                            </div>

                            <div className="modal-body">
                                <a href="#" className="upload-photo-item">
                                    <svg className="olymp-computer-icon">
                                        <use xlinkHref="#olymp-computer-icon"></use>
                                    </svg>

                                    <h6>Upload Photo</h6>
                                    <span>Browse your computer.</span>
                                </a>

                                <a href="#" className="upload-photo-item" data-bs-toggle="modal" data-bs-target="#choose-from-my-photo">

                                    <svg className="olymp-photos-icon">
                                        <use xlinkHref="#olymp-photos-icon"></use>
                                    </svg>

                                    <h6>Choose from My Photos</h6>
                                    <span>Choose from your uploaded photos</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ... end Window-popup Update Header Photo */}

                {/* Window-popup Choose from my Photo */}

                <div className="modal fade" id="choose-from-my-photo" tabIndex="-1" role="dialog" aria-labelledby="choose-from-my-photo"
                    aria-hidden="true">
                    <div className="modal-dialog window-popup choose-from-my-photo" role="document">

                        <div className="modal-content">
                            <a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg className="olymp-close-icon">
                                    <use xlinkHref="#olymp-close-icon"></use>
                                </svg>
                            </a>
                            <div className="modal-header">
                                <h6 className="title">Choose from My Photos</h6>

                                {/* Nav tabs */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#home" role="tab"
                                            aria-expanded="true">
                                            <svg className="olymp-photos-icon">
                                                <use xlinkHref="#olymp-photos-icon"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#profile" role="tab" aria-expanded="false">
                                            <svg className="olymp-albums-icon">
                                                <use xlinkHref="#olymp-albums-icon"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="modal-body">
                                {/* Tab panes */}
                                <div className="tab-content">
                                    <div className="tab-pane fade active show" id="home" role="tabpanel" aria-expanded="true">

                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo1.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo2.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo3.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo4.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo5.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo6.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo7.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo8.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="choose-photo-item">
                                            <div className="radio">
                                                <label className="custom-radio">
                                                    <img loading="lazy" src="/assets/img/choose-photo9.webp" alt="photo" width="247"
                                                        height="166" />
                                                    <input type="radio" name="optionsRadios" />
                                                </label>
                                            </div>
                                        </div>


                                        <a href="#" className="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                                        <a href="#" className="btn btn-primary btn-lg btn--half-width">Confirm Photo</a>

                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-expanded="false">

                                        <div className="choose-photo-item">
                                            <figure>
                                                <img loading="lazy" src="/assets/img/choose-photo10.webp" alt="photo" width="225"
                                                    height="180" />
                                                <figcaption>
                                                    <a href="#">South America Vacations</a>
                                                    <span>Last Added: 2 hours ago</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="choose-photo-item">
                                            <figure>
                                                <img loading="lazy" src="/assets/img/choose-photo11.webp" alt="photo" width="225"
                                                    height="180" />
                                                <figcaption>
                                                    <a href="#">Photoshoot Summer 2016</a>
                                                    <span>Last Added: 5 weeks ago</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="choose-photo-item">
                                            <figure>
                                                <img loading="lazy" src="/assets/img/choose-photo12.webp" alt="photo" width="225"
                                                    height="180" />
                                                <figcaption>
                                                    <a href="#">Amazing Street Food</a>
                                                    <span>Last Added: 6 mins ago</span>
                                                </figcaption>
                                            </figure>
                                        </div>

                                        <div className="choose-photo-item">
                                            <figure>
                                                <img loading="lazy" src="/assets/img/choose-photo13.webp" alt="photo" width="224"
                                                    height="179" />
                                                <figcaption>
                                                    <a href="#">Graffity & Street Art</a>
                                                    <span>Last Added: 16 hours ago</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="choose-photo-item">
                                            <figure>
                                                <img loading="lazy" src="/assets/img/choose-photo14.webp" alt="photo" width="225"
                                                    height="180" />
                                                <figcaption>
                                                    <a href="#">Amazing Landscapes</a>
                                                    <span>Last Added: 13 mins ago</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="choose-photo-item">
                                            <figure>
                                                <img loading="lazy" src="/assets/img/choose-photo15.webp" alt="photo" width="225"
                                                    height="180" />
                                                <figcaption>
                                                    <a href="#">The Majestic Canyon</a>
                                                    <span>Last Added: 57 mins ago</span>
                                                </figcaption>
                                            </figure>
                                        </div>


                                        <a href="#" className="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                                        <a href="#" className="btn btn-primary btn-lg disabled btn--half-width">Confirm Photo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ... end Window-popup Choose from my Photo */}

                {/* Playlist Popup */}

                <div className="window-popup playlist-popup" tabIndex="-1" role="dialog" aria-labelledby="playlist-popup"
                    aria-hidden="true">

                    <a href="" className="icon-close js-close-popup">
                        <svg className="olymp-close-icon">
                            <use xlinkHref="#olymp-close-icon"></use>
                        </svg>
                    </a>

                    <div className="mCustomScrollbar">
                        <table className="playlist-popup-table">

                            <thead>

                                <tr>

                                    <th className="play">
                                        PLAY
                                    </th>

                                    <th className="cover">
                                        COVER
                                    </th>

                                    <th className="song-artist">
                                        SONG AND ARTIST
                                    </th>

                                    <th className="album">
                                        ALBUM
                                    </th>

                                    <th className="released">
                                        RELEASED
                                    </th>

                                    <th className="duration">
                                        DURATION
                                    </th>

                                    <th className="spotify">
                                        GET IT ON SPOTIFY
                                    </th>

                                    <th className="remove">
                                        REMOVE
                                    </th>
                                </tr>

                            </thead>

                            <tbody>
                                <tr>
                                    <td className="play">
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="#olymp-music-play-icon-big"></use>
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="cover">
                                        <div className="playlist-thumb">
                                            <img loading="lazy" src="/assets/img/playlist19.webp" alt="thumb-composition" width="34"
                                                height="34" />
                                        </div>
                                    </td>
                                    <td className="song-artist">
                                        <div className="composition">
                                            <a href="#" className="composition-name">We Can Be Heroes</a>
                                            <a href="#" className="composition-author">Jason Bowie</a>
                                        </div>
                                    </td>
                                    <td className="album">
                                        <a href="#" className="album-composition">Ziggy Firedust</a>
                                    </td>
                                    <td className="released">
                                        <div className="release-year">2014</div>
                                    </td>
                                    <td className="duration">
                                        <div className="composition-time">
                                            <time className="published" dateTime="2017-03-24T18:18">6:17</time>
                                        </div>
                                    </td>
                                    <td className="spotify">
                                        <svg className="composition-icon" width="22" height="22">
                                            <use xlinkHref="#olymp-spotify-icon"></use>
                                        </svg>
                                    </td>
                                    <td className="remove">
                                        <a href="#" className="remove-icon">
                                            <svg className="olymp-close-icon">
                                                <use xlinkHref="#olymp-close-icon"></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="play">
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="#olymp-music-play-icon-big"></use>
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="cover">
                                        <div className="playlist-thumb">
                                            <img loading="lazy" src="/assets/img/playlist6.webp" alt="thumb-composition" width="34"
                                                height="34" />
                                        </div>
                                    </td>
                                    <td className="song-artist">
                                        <div className="composition">
                                            <a href="#" className="composition-name">The Past Starts Slow and Ends</a>
                                            <a href="#" className="composition-author">System of a Revenge</a>
                                        </div>
                                    </td>
                                    <td className="album">
                                        <a href="#" className="album-composition">Wonderize</a>
                                    </td>
                                    <td className="released">
                                        <div className="release-year">2014</div>
                                    </td>
                                    <td className="duration">
                                        <div className="composition-time">
                                            <time className="published" dateTime="2017-03-24T18:18">6:17</time>
                                        </div>
                                    </td>
                                    <td className="spotify">
                                        <svg className="composition-icon" width="22" height="22">
                                            <use xlinkHref="#olymp-spotify-icon"></use>
                                        </svg>
                                    </td>
                                    <td className="remove">
                                        <a href="#" className="remove-icon">
                                            <svg className="olymp-close-icon">
                                                <use xlinkHref="#olymp-close-icon"></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="play">
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="#olymp-music-play-icon-big"></use>
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="cover">
                                        <div className="playlist-thumb">
                                            <img loading="lazy" src="/assets/img/playlist7.webp" alt="thumb-composition" width="34"
                                                height="34" />
                                        </div>
                                    </td>
                                    <td className="song-artist">
                                        <div className="composition">
                                            <a href="#" className="composition-name">The Pretender</a>
                                            <a href="#" className="composition-author">Kung Fighters</a>
                                        </div>
                                    </td>
                                    <td className="album">
                                        <a href="#" className="album-composition">Warping Lights</a>
                                    </td>
                                    <td className="released">
                                        <div className="release-year">2014</div>
                                    </td>
                                    <td className="duration">
                                        <div className="composition-time">
                                            <time className="published" dateTime="2017-03-24T18:18">6:17</time>
                                        </div>
                                    </td>
                                    <td className="spotify">
                                        <svg className="composition-icon" width="22" height="22">
                                            <use xlinkHref="#olymp-spotify-icon"></use>
                                        </svg>
                                    </td>
                                    <td className="remove">
                                        <a href="#" className="remove-icon">
                                            <svg className="olymp-close-icon">
                                                <use xlinkHref="#olymp-close-icon"></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="play">
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="#olymp-music-play-icon-big"></use>
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="cover">
                                        <div className="playlist-thumb">
                                            <img loading="lazy" src="/assets/img/playlist8.webp" alt="thumb-composition" width="34"
                                                height="34" />
                                        </div>
                                    </td>
                                    <td className="song-artist">
                                        <div className="composition">
                                            <a href="#" className="composition-name">Seven Nation Army</a>
                                            <a href="#" className="composition-author">The Black Stripes</a>
                                        </div>
                                    </td>
                                    <td className="album">
                                        <a href="#" className="album-composition ">Icky Strung (LIVE at Cube Garden)</a>
                                    </td>
                                    <td className="released">
                                        <div className="release-year">2014</div>
                                    </td>
                                    <td className="duration">
                                        <div className="composition-time">
                                            <time className="published" dateTime="2017-03-24T18:18">6:17</time>
                                        </div>
                                    </td>
                                    <td className="spotify">
                                        <svg className="composition-icon" width="22" height="22">
                                            <use xlinkHref="#olymp-spotify-icon"></use>
                                        </svg>
                                    </td>
                                    <td className="remove">
                                        <a href="#" className="remove-icon">
                                            <svg className="olymp-close-icon">
                                                <use xlinkHref="#olymp-close-icon"></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="play">
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="#olymp-music-play-icon-big"></use>
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="cover">
                                        <div className="playlist-thumb">
                                            <img loading="lazy" src="/assets/img/playlist9.webp" alt="thumb-composition" width="34"
                                                height="34" />
                                        </div>
                                    </td>
                                    <td className="song-artist">
                                        <div className="composition">
                                            <a href="#" className="composition-name">Leap of Faith</a>
                                            <a href="#" className="composition-author">Eden Artifact</a>
                                        </div>
                                    </td>
                                    <td className="album">
                                        <a href="#" className="album-composition">The Assassins’s Soundtrack</a>
                                    </td>
                                    <td className="released">
                                        <div className="release-year">2014</div>
                                    </td>
                                    <td className="duration">
                                        <div className="composition-time">
                                            <time className="published" dateTime="2017-03-24T18:18">6:17</time>
                                        </div>
                                    </td>
                                    <td className="spotify">
                                        <svg className="composition-icon" width="22" height="22">
                                            <use xlinkHref="#olymp-spotify-icon"></use>
                                        </svg>
                                    </td>
                                    <td className="remove">
                                        <a href="#" className="remove-icon">
                                            <svg className="olymp-close-icon">
                                                <use xlinkHref="#olymp-close-icon"></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="play">
                                        <a href="#" className="play-icon">
                                            <svg className="olymp-music-play-icon-big">
                                                <use xlinkHref="#olymp-music-play-icon-big"></use>
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="cover">
                                        <div className="playlist-thumb">
                                            <img loading="lazy" src="/assets/img/playlist10.webp" alt="thumb-composition" width="34"
                                                height="34" />
                                        </div>
                                    </td>
                                    <td className="song-artist">
                                        <div className="composition">
                                            <a href="#" className="composition-name">Killer Queen</a>
                                            <a href="#" className="composition-author">Archiduke</a>
                                        </div>
                                    </td>
                                    <td className="album">
                                        <a href="#" className="album-composition ">News of the Universe</a>
                                    </td>
                                    <td className="released">
                                        <div className="release-year">2014</div>
                                    </td>
                                    <td className="duration">
                                        <div className="composition-time">
                                            <time className="published" dateTime="2017-03-24T18:18">6:17</time>
                                        </div>
                                    </td>
                                    <td className="spotify">
                                        <svg className="composition-icon" width="22" height="22">
                                            <use xlinkHref="#olymp-spotify-icon"></use>
                                        </svg>
                                    </td>
                                    <td className="remove">
                                        <a href="#" className="remove-icon">
                                            <svg className="olymp-close-icon">
                                                <use xlinkHref="#olymp-close-icon"></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*--------------------------------------------- MediaPlayer ---------------------------------------------------*/}

                    <audio id="mediaplayer" data-showplaylist="true">
                        <source src="mp3/Twice.mp3" title="Track 1" data-poster="track1.webp" type="audio/mpeg" />
                        <source src="mp3/Twice.mp3" title="Track 2" data-poster="track2.webp" type="audio/mpeg" />
                        <source src="mp3/Twice.mp3" title="Track 3" data-poster="track3.webp" type="audio/mpeg" />
                        <source src="mp3/Twice.mp3" title="Track 4" data-poster="track4.webp" type="audio/mpeg" />
                    </audio>

                    {/* JS library for MediaPlayer */}
                    <script defer src="/assets/js/libs/mediaelement-and-player.min.js"></script>
                    <script defer src="/assets/js/libs/mediaelement-playlist-plugin.min.js"></script>
                    {/* ...end JS library for MediaPlayer */}

                    {/*---------------------------------------------- ... end MediaPlayer ------------------------------------------*/}

                </div>

                <div className="ui-block popup-chat popup-chat-responsive" tabIndex="-1" role="dialog"
                    aria-labelledby="popup-chat-responsive" aria-hidden="true">

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
                                            <img loading="lazy" src="/assets/img/avatar14-sm.webp" width="28" height="28" alt="author"
                                                className="mCS_img_loaded" />
                                        </div>
                                        <div className="notification-event">
                                            <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow!
                                                I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                            <span className="notification-date"><time className="entry-date updated"
                                                dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/author-page.webp" width="36" height="36" alt="author"
                                                className="mCS_img_loaded" />
                                        </div>
                                        <div className="notification-event">
                                            <span className="chat-message-item">Don’t worry Mathilda!</span>
                                            <span className="chat-message-item">I already bought everything</span>
                                            <span className="notification-date"><time className="entry-date updated"
                                                dateTime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="author-thumb">
                                            <img loading="lazy" src="/assets/img/avatar14-sm.webp" width="28" height="28" alt="author"
                                                className="mCS_img_loaded" />
                                        </div>
                                        <div className="notification-event">
                                            <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow!
                                                I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                            <span className="notification-date"><time className="entry-date updated"
                                                dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <form className="need-validation">

                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Press enter to post..."></textarea>
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
                                                        <img loading="lazy" src="/assets/img/icon-chat1.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat2.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat3.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat4.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat5.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat6.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat7.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat8.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat9.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat10.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat11.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat12.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat13.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat14.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat15.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat16.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat17.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat18.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat19.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat20.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat21.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat22.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat23.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat24.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat25.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat26.webp" alt="icon" width="20"
                                                            height="20" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img loading="lazy" src="/assets/img/icon-chat27.webp" alt="icon" width="20"
                                                            height="20" />
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

            {/* ... end Window-popup-CHAT for responsive min-width: 768px  */}
        </>
    )
}

export default Profile