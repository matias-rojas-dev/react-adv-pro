import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'

import Logo from '../logo.svg'

export const Navigation = () => {
  return <BrowserRouter>
    <div className='main-layout'>
      <nav>
        <img src={Logo} alt='Logo de carga ' />
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/users" element={<h1>Users Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>

    </div>
  </BrowserRouter>
}
