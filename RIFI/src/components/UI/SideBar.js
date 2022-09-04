import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function SideBar(props) {
  const { visiable, menuItems } = props
  const showMenuItem = (menuitem,idx) => {
    return (
      <li key={idx} className=''>
        <div className="iocn-link">
          <NavLink to={menuitem.link}>
            {menuitem.icon}
            <span className="link_name">{menuitem.name}</span>
          </NavLink>
          {menuitem.subMenu && <i onClick={(e) => e.target.parentNode.parentNode.classList.toggle('showMenu')} className='bx bxs-chevron-down arrow' ></i>}
        </div>
        <ul className={menuitem.subMenu ? "sub-menu" : "sub-menu blank"}>
          <li><NavLink className="link_name" to={menuitem.link}>{menuitem.name}</NavLink></li>
          {
            menuitem.subMenu && menuitem.subMenu.map((sub,idx) =>
              <li key={idx}><NavLink to={sub.link}>{sub.name}</NavLink></li>
            )
          }
        </ul>
      </li>
    )
  }
  return (
    <div className={visiable ? "sidebar" : "sidebar close"}>
      <ul className="nav-links">
        {
          menuItems.map((item,idx) => showMenuItem(item,idx))
        }
      </ul>
    </div>
  )
}
