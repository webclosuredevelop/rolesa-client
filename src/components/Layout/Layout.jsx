import React from 'react'
import Header from '../Header/Header'
import LeftSidebar from '../Sidebars/LeftSidebar'
import RightSidebar from '../Sidebars/RightSidebar'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <div className='page-has-left-panels page-has-right-panels'>
            <LeftSidebar />
            <RightSidebar />
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout