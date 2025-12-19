import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import MatchesPage from './pages/MatchesPage/MatchesPage'
import VerifyPage from './pages/VerifyPage/VerifyPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SendCV from './pages/SendCV/SendCV'
import PrivateRoute from './PrivateRoute'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/sendcv" element={<SendCV />} /> */}

        {/* Routes protégées */}
        <Route
          path="/match"
          element={
            <PrivateRoute>
              <MatchesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/sendcv"
          element={
            <PrivateRoute>
              <SendCV />
            </PrivateRoute>
          }
        />
        <Route
          path="/verify"
          element={
            <PrivateRoute>
              <VerifyPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profileAdd"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        {/* Route 404 pour toutes les URLs non définies */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}

export default App
