import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScheduleButton from './ScheduleButton/ScheduleButton'

function Navbar() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Vérifie si un token existe
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <header className="flex items-center justify-between px-2 border-b md:px-16">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center gap-2 font-sans text-sm font-semibold">
        <span className="font-bold text-[50px]">FP</span>
        <span className="tracking-wide text-[15px]">FIVE PATHWAYS FINANCIAL</span>
      </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="items-center hidden gap-8 text-sm md:flex">
      <Link to="/profileAdd" className='mx-5 text-2xl'>Remplir Profil</Link>
      <Link to="/SendCV" className='text-2xl'>Envoyer le CV</Link>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3"
          >
            <ScheduleButton text="Se déconnecter" />
          </button>
        ) : (
          <button className="flex items-center gap-2 px-6 py-3">
            <ScheduleButton text="Se connectez" to="login" />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <button className="px-4 py-2 border rounded md:hidden">
        MENU
      </button>
    </header>
  )
}

export default Navbar
