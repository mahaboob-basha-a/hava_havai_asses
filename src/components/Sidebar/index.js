import React from 'react'
import { TiHome } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import './index.css'

export default function Sidebar() {
  return (
    <div className='sidebar-constainer'>
        <aside className='home-section'>
          <ul>
            <li><TiHome className='home-icon' /> Home</li>
            <li><RxDashboard className='home-icon' /> Dashboard</li>
          </ul>
        </aside>
        <aside className='home-section services-section'>
            <h1>Services</h1>
            <ul>
            <li className='selected-one'>Airports</li>
            <li>Videos</li>
            </ul>
        </aside>
        <aside className='home-section other-section'>
            <h1>Others</h1>
            <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
            </ul>
    </aside>
    </div>
  )
}
