import React, { useEffect } from 'react'

function LeftSidebar() {
    useEffect(() => {
        var $window = $(window),
            $document = $(document),
            $body = $('body'),
            $sidebar = $('.fixed-sidebar'),
            $preloader = $('#hellopreloader');
        // Toggle aside panels
        $(".js-sidebar-open").on('click', function () {
            var mobileWidthApp = $('body').outerWidth();
            if (mobileWidthApp <= 560) {
                $(this).closest('body').find('.popup-chat-responsive').removeClass('open-chat');
            }

            var $currentSidebar = $(this).closest($sidebar);

            if ($currentSidebar.hasClass('open')) {
                $sidebar.each(function () {
                    var $self = $(this);
                    $self.removeClass('open');
                    $self.find('.js-sidebar-open').removeClass('active');
                });
            } else {
                $sidebar.each(function () {
                    var $self = $(this);
                    $self.removeClass('open');
                    $self.find('.js-sidebar-open').removeClass('active');
                });
                $currentSidebar.addClass('open');
                $currentSidebar.find('.js-sidebar-open').addClass('active');
            }


            return false;
        });
        console.log('Component mounted successfully');
    }, []);
    return (
        <>
            {/* Preloader */}

            <div id="hellopreloader">
                <div className="preloader">
                    <svg width="45" height="45" stroke="#fff">
                        <g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
                            <circle cx="22" cy="22" r="6" stroke="none">
                                <animate attributeName="r" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite"
                                    values="6;22" />
                                <animate attributeName="stroke-opacity" begin="1.5s" calcMode="linear" dur="3s"
                                    repeatCount="indefinite" values="1;0" />
                                <animate attributeName="stroke-width" begin="1.5s" calcMode="linear" dur="3s"
                                    repeatCount="indefinite" values="2;0" />
                            </circle>
                            <circle cx="22" cy="22" r="6" stroke="none">
                                <animate attributeName="r" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite"
                                    values="6;22" />
                                <animate attributeName="stroke-opacity" begin="3s" calcMode="linear" dur="3s"
                                    repeatCount="indefinite" values="1;0" />
                                <animate attributeName="stroke-width" begin="3s" calcMode="linear" dur="3s"
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

            {/* ... end Preloader */}
            {/* Profile Settings Responsive */}

            <div id="responsive-container-panel" className="profile-settings-responsive">

                <a href="#" className="js-profile-settings-open profile-settings-open">
                    <svg className="settings-open-arrow" width="14" height="14">
                        <use xlinkHref="#olymp-popup-left-arrow"></use>
                    </svg>
                </a>
                <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <div className="ui-block">

                    </div>
                </div>
            </div>

            {/* ... end Profile Settings Responsive */}


            {/* Fixed Sidebar Left */}

            <div className="fixed-sidebar left">
                <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

                    <a href="/" className="logo">
                        <div className="img-wrap">
                            <img loading="lazy" src="/assets/img/logo.webp" alt="Olympus" width="34" height="34" />
                        </div>
                    </a>

                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                        <ul className="left-menu">
                            <li>
                                <a href="#" className="js-sidebar-open" >
                                    <svg className="olymp-menu-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="OPEN MENU">
                                        <use xlinkHref="#olymp-menu-icon"></use>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
                    <a href="/" className="logo">
                        <div className="img-wrap">
                            <img loading="lazy" src="/assets/img/logo.webp" alt="Olympus" width="34" height="34" />
                        </div>
                        <div className="title-block">
                            <h6 className="logo-title">olympus</h6>
                        </div>
                    </a>

                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                        <ul className="left-menu">
                            <li>
                                <a href="#" className="js-sidebar-open" >
                                    <svg className="olymp-close-icon left-menu-icon">
                                        <use xlinkHref="#olymp-close-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Collapse Menu</span>
                                </a>
                            </li>

                            <li>
                                <a href="16-FavPagesFeed.html">
                                    <svg className="olymp-star-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="FAV PAGE">
                                        <use xlinkHref="#olymp-star-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Pagina di prova</span>
                                </a>
                            </li>
                            
                        </ul>

                        <div className="profile-completion">

                            <div className="skills-item">
                                <div className="skills-item-info">
                                    <span className="skills-item-title">Profile Completion</span>
                                    <span className="skills-item-count"><span className="count-animate" data-speed="1000"
                                        data-refresh-interval="50" data-to="76" data-from="0"></span><span
                                            className="units">76%</span></span>
                                </div>
                                <div className="skills-item-meter">
                                    <span className="skills-item-meter-active bg-primary" style={{ width: "76%" }}></span>
                                </div>
                            </div>

                            <span>Complete <a href="#">your profile</a> so people can know more about you!</span>

                        </div>
                    </div>
                </div>
            </div>

            {/* ... end Fixed Sidebar Left */}


            {/* Fixed Sidebar Left */}

            <div className="fixed-sidebar left fixed-sidebar-responsive">

                <div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
                    <a href="#" className="logo js-sidebar-open" >
                        <img loading="lazy" src="/assets/img/logo.webp" alt="Olympus" width="34" height="34" />
                    </a>

                </div>

                <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
                    <a href="#" className="logo">
                        <div className="img-wrap">
                            <img loading="lazy" src="/assets/img/logo.webp" alt="Olympus" width="34" height="34" />
                        </div>
                        <div className="title-block">
                            <h6 className="logo-title">olympus</h6>
                        </div>
                    </a>

                    <div className="mCustomScrollbar" data-mcs-theme="dark">

                        <div className="control-block">
                            <div className="author-page author vcard inline-items">
                                <div className="author-thumb">
                                    <img alt="author" src="/assets/img/author-page.webp" width="36" height="36" className="avatar" />
                                    <span className="icon-status online"></span>
                                </div>
                                <a href="/" className="author-name fn">
                                    <div className="author-title">
                                        James Spiegel
                                        <svg className="olymp-dropdown-arrow-icon">
                                            <use xlinkHref="#olymp-dropdown-arrow-icon"></use>
                                        </svg>
                                    </div>
                                    <span className="author-subtitle">SPACE COWBOY</span>
                                </a>
                            </div>
                        </div>

                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">MAIN SECTIONS</h6>
                        </div>

                        <ul className="left-menu">
                            <li>
                                <a href="#" className="js-sidebar-open" >
                                    <svg className="olymp-close-icon left-menu-icon">
                                        <use xlinkHref="#olymp-close-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Collapse Menu</span>
                                </a>
                            </li>
                            <li>
                                <a href="mobile-index.html">
                                    <svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="NEWSFEED">
                                        <use xlinkHref="#olymp-newsfeed-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Newsfeed</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-28-YourAccount-PersonalInformation.html">
                                    <svg className="olymp-star-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="FAV PAGE">
                                        <use xlinkHref="#olymp-star-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Fav Pages Feed</span>
                                </a>
                            </li>
                            <li>
                                <a href="mobile-29-YourAccount-AccountSettings.html">
                                    <svg className="olymp-happy-faces-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="FRIEND GROUPS">
                                        <use xlinkHref="#olymp-happy-faces-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Friend Groups</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-30-YourAccount-ChangePassword.html">
                                    <svg className="olymp-headphones-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="MUSIC&PLAYLISTS">
                                        <use xlinkHref="#olymp-headphones-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Music & Playlists</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
                                    <svg className="olymp-weather-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="WEATHER APP">
                                        <use xlinkHref="#olymp-weather-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Weather App</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-32-YourAccount-EducationAndEmployement.html">
                                    <svg className="olymp-calendar-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="CALENDAR AND EVENTS">
                                        <use xlinkHref="#olymp-calendar-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Calendar and Events</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-33-YourAccount-Notifications.html">
                                    <svg className="olymp-badge-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="Community Badges">
                                        <use xlinkHref="#olymp-badge-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Community Badges</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-34-YourAccount-ChatMessages.html">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="Friends Birthdays">
                                        <use xlinkHref="#olymp-cupcake-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Friends Birthdays</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-35-YourAccount-FriendsRequests.html">
                                    <svg className="olymp-stats-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="Account Stats">
                                        <use xlinkHref="#olymp-stats-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Account Stats</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-manage-widgets-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="Manage Widgets">
                                        <use xlinkHref="#olymp-manage-widgets-icon"></use>
                                    </svg>
                                    <span className="left-menu-title">Manage Widgets</span>
                                </a>
                            </li>
                        </ul>

                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">YOUR ACCOUNT</h6>
                        </div>

                        <ul className="account-settings">
                            <li>
                                <a href="#">

                                    <svg className="olymp-menu-icon">
                                        <use xlinkHref="#olymp-menu-icon"></use>
                                    </svg>

                                    <span>Profile Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-star-icon left-menu-icon" data-bs-toggle="tooltip"
                                        data-bs-placement="right" data-bs-original-title="FAV PAGE">
                                        <use xlinkHref="#olymp-star-icon"></use>
                                    </svg>

                                    <span>Create Fav Page</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-logout-icon">
                                        <use xlinkHref="#olymp-logout-icon"></use>
                                    </svg>

                                    <span>Log Out</span>
                                </a>
                            </li>
                        </ul>

                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">About Olympus</h6>
                        </div>

                        <ul className="about-olympus">
                            <li>
                                <a href="#">
                                    <span>Terms and Conditions</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>FAQs</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Careers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            {/* ... end Fixed Sidebar Left */}
        </>
    )
}

export default LeftSidebar