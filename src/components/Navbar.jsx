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
      <div className="flex items-center py-3 justify-between px-4 md:px-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
  {/* SVG inline */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-556.0382 37.5756 265.7354 312.1118"
    className="h-12 w-12 md:h-16 md:w-16"
  >
    <g transform="matrix(1, 0, 0, 1, -837.1498, 35.5416)" id="object-1">
      <path d="M 498.509 44.815 C 505.787 62.539 505.483 86.637 501.112 105.043 C 490.364 150.302 448.884 176.069 423.555 212.301 C 413.667 226.446 406.378 243.76 409.914 261.251 C 411.726 270.433 416.1 277.44 423.855 282.874 C 428.399 286.057 436.337 288.146 441.652 286.803 C 450.343 284.608 449.187 278.033 452.25 271.819 C 452.959 270.383 457.857 265.678 457.993 263.956 C 458.088 257.224 456.251 255.76 459.085 249.369 C 461.781 243.291 478.126 236.252 478.194 231.658 C 478.418 216.526 470.669 208.094 479.501 192.8 C 488.451 177.299 502.493 171.644 511.962 156.324 C 502.243 157.831 497.451 156.308 490.664 149.19 C 493.707 145.024 496.654 139.759 499.317 135.251 C 500.363 136.991 502.246 140.62 504.336 141.647 C 510.312 144.586 528.575 131.045 530.617 141.182 C 532.409 150.07 526.352 160.679 522.058 168.003 C 516.129 177.69 507.058 183.578 499.154 191.379 C 484.283 204.571 492.925 214.896 493.74 231.211 C 494.444 245.278 480.15 248.617 472.112 256.978 C 475.348 268.48 476.344 272.514 464.883 278.477 C 458.821 299.619 440.052 313.321 418.301 314.111 C 387.743 315.222 365.136 289.554 364.047 260.137 C 362.442 216.764 403.486 189.771 433.133 165.221 C 463.967 140.192 493.309 113.217 497.91 71.52 C 498.96 62 498.881 54.319 498.509 44.815 Z" style={{ strokeWidth: 1 }} />
      <path d="M 489.302 68.954 C 489.311 73.513 484.957 85.043 482.916 89.245 C 441.157 175.2 272.08 173.161 319.691 301.453 C 314.067 297.617 308.819 292.601 303.995 287.84 C 295.407 278.988 287.511 267.099 284.213 255.151 C 263.508 181.481 351.342 155.887 403.19 134.861 C 440.549 119.71 469.695 105.636 489.302 68.954 Z" style={{ strokeWidth: 1 }} />
      <path d="M 375.084 46.668 C 388.435 45.937 396.085 45.01 391.228 61.594 C 393.952 62.646 397.943 63.622 400.45 64.946 C 406.462 68.121 410.668 70.809 417.07 73.304 C 417.631 70.788 420.021 62.39 423.625 62.998 C 438.537 65.512 452.474 69.234 467.81 70.523 C 469.715 70.683 472.004 77.471 472.591 79.11 C 468.605 84.313 464.849 88.104 460.04 92.487 L 455.341 83.891 C 445.51 83.553 440.651 82.085 431.202 79.117 C 428.62 82.291 425.062 86.913 420.298 87.436 C 410.29 88.535 392.634 78.611 383.485 74.212 C 378.792 71.954 377.202 65.527 376.29 61.343 C 373.033 61.669 367.941 62.143 364.899 62.885 C 353.108 65.76 349.668 69.947 337.545 67.793 C 335.014 69.821 332.499 71.867 329.998 73.931 C 328.863 77.931 328.415 79.542 326.51 83.32 C 321.287 89.857 312.452 93.153 308.533 101.02 C 307.448 103.2 306.154 105.419 305.02 107.603 C 306.709 118.725 306.142 122.575 302.565 132.925 C 314.617 145.431 310.078 148.38 326.215 157.742 C 321.188 160.733 316.849 163.546 311.993 166.813 C 302.952 160.065 302.362 158.097 296.332 148.743 C 294.93 146.566 291 143.593 289.452 140.751 C 284.848 132.301 290.623 124.084 290.916 115.415 C 290.977 113.608 289.744 109.212 289.204 107.242 C 293.517 92.768 301.34 83.853 313.69 75.594 C 317.369 60.987 323.356 61.806 333.597 49.924 L 344.492 53.805 C 357.615 48.386 360.959 47.631 375.084 46.668 Z" style={{ strokeWidth: 1 }} />
      {/* ajoute les autres paths si nécessaire */}
    </g>
  </svg>

</Link>


        {/* Desktop Nav */}
        <nav className="items-center hidden gap-8 md:flex">
          <Link to="/profileAdd" className="text-lg hover:underline">
            Compléter mon profil
          </Link>
          <Link to="/SendCV" className="text-lg hover:underline">
            Envoyer mon CV
          </Link>


          <Link
            to="/match"
            className="block text-lg"
            onClick={() => setOpen(false)}
          >
            Voir mes bourses correspondantes
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
            Compléter mon profil
          </Link>

          <Link
            to="/SendCV"
            className="block text-lg"
            onClick={() => setOpen(false)}
          >
            Envoyer mon CV
          </Link>

          <Link
            to="/match"
            className="block text-lg"
            onClick={() => setOpen(false)}
          >
            Voir mes bourses correspondantes
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
