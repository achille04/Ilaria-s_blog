import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className='sidebarImage' src="https://wallpapercave.com/wp/wp8701335.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora id in omnis voluptates quia accusamus voluptate blanditiis.</p>
            </div>
            <div className="sidebarItem">

                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>

            </div>
            <div className="sidebarItem">

                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>

                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>

                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>

                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>

            </div>
        </div>
    )
}
