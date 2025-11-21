import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
const Dashboard = ({children}) => {
    const routes=[
        {
            title:"Home",
            path:"/",
        },
        {
            title:"Form",
            path:"/form"
        },
        {
            title:"Products",
            path:"/product"
        }
    ]
  return (
    <>
    <div className='dashboard-outer'>
        <div className="sidebar">
            <div className='logo'>DASHBOARD</div>
            {routes.map((item)=>{
                return(
                <NavLink
                key={item.path}
                className='sidebar-item'
                to={item.path}
                >
                {item.title}
                </NavLink>
            )})}
        </div>
        <div className="main-content">
            <div className="header"></div>
            <div className="content">
                {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard