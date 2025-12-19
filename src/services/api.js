import axios from 'axios'

const api = axios.create({
  baseURL: 'https://iandrianinameeting.app.n8n.cloud/webhook',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
