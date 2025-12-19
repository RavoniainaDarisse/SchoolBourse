import api from './api'

export const login = async (email, password) => {
  const response = await api.post('/login', {
    email,
    password,
  })

  const token = response.data.token

  if (token) {
    localStorage.setItem('token', token)
  }

  return response.data
}

export const register = async ({ email, password, username }) => {
  const response = await api.post('/signup', {
    email,
    password,
    username,
  })
  return response.data
}