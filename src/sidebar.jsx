import React from 'react'
import './App.css';

export default function Sidebar({name, active, handleClick}) {
    return (
        <div>
            <button className={`sidebar-items-btn ${active ? 'active' : ""}`} onClick={handleClick}>{name}</button>
        </div>
    )
}
