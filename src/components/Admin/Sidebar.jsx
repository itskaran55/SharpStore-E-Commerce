import React from 'react'
import './AdminStyles/sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebarContainer'>
        <div className='adminInfo'>
            
        </div>
       <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/products">Manage Products</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
