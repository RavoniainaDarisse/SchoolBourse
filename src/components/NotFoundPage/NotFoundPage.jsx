import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-6 text-xl">Page non trouvée</p>
      <Link to="/" className="px-6 py-3 bg-[#6ED3C2] text-black rounded-full font-medium">
        Retour à l'accueil
      </Link>
    </div>
  )
}

export default NotFoundPage
