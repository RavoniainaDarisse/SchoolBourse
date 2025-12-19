import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScheduleButton from './ScheduleButton/ScheduleButton'
import { Menu, X } from 'lucide-react'
import ScheduleSubmit from './ScheduleButton/ScheduleSubmit'

function Navbar() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [open, setOpen] = useState(false)

  // Vérifie si un token existe
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    navigate('/')
    setOpen(false)
  }

  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-4 md:px-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-[40px] md:text-[50px]">V</span>
          <span className="text-sm tracking -wide md:text-[15px]">
            Vatsy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-8 md:flex">
          <Link to="/profileAdd" className="text-lg hover:underline">
            Remplir Profil
          </Link>
          <Link to="/SendCV" className="text-lg hover:underline">
            Envoyer le CV
          </Link>

          {isAuthenticated ? (
            <ScheduleSubmit text="Se déconnecter" onClick={handleLogout} />
          ) : (
            <ScheduleButton text="Se connecter" to="/login" />
          )}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="px-4 py-6 space-y-4 border-t md:hidden">
          <Link
            to="/profileAdd"
            className="block text-lg"
            onClick={() => setOpen(false)}
          >
            Remplir Profil
          </Link>

          <Link
            to="/SendCV"
            className="block text-lg"
            onClick={() => setOpen(false)}
          >
            Envoyer le CV
          </Link>

          {isAuthenticated ? (
            <ScheduleSubmit
              text="Se déconnecter"
              onClick={handleLogout}
              full
            />
          ) : (
            <ScheduleButton
              text="Se connecter"
              to="/login"
              full
              onClick={() => setOpen(false)}
            />
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar
