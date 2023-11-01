import { Suspense } from 'react'
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { routes } from './routes'

import Logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span> }>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="Logo de carga " />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {' '}
                    {name}{' '}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
