import React from 'react'
import { Link } from 'react-router-dom'
import ScheduleButton from '../ScheduleButton/ScheduleButton'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="mb-4 font-bold text-[150px]">404</h1>
      <p className="mb-6 text-xl text-center">Page non trouvée</p>

      <ScheduleButton text="Retour à l'accueil" to='/'/>
    </div>
  )
}

export default NotFoundPage
