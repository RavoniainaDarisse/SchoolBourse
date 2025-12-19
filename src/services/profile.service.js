import axios from 'axios'
import api from './api'

// Crée ou met à jour le profil
export const saveProfile = async (profileData) => {
  let token = localStorage.getItem('token')
  if (!token) throw new Error('Utilisateur non authentifié')

  // 🔥 SUPPRIME le "=" s’il existe
  if (token.startsWith('=')) {
    token = token.substring(1)
  }

  const response = await api.post('/profile', {
    token,
    ...profileData,
  })

  return response.data
}

export const sendTokenToN8n = async () => {
  let token = localStorage.getItem("token")
  if (!token) throw new Error("Utilisateur non authentifié")

  // 🔥 Raha misy "=" eo aloha
  if (token.startsWith("=")) {
    token = token.substring(1)
  }

  const response = await axios.post(
    "https://iandrianinameeting.app.n8n.cloud/webhook/recommandation",
    {
      token: token,
    }
  )

  return response.data
}

export const getDataFromN8n = async () => {
  let token = localStorage.getItem("token");
  if (!token) throw new Error("Utilisateur non authentifié");

  if (token.startsWith("=")) {
    token = token.substring(1);
  }

  // On peut passer le token en paramètre GET
  const response = await axios.get(
    "https://iandrianinameeting.app.n8n.cloud/webhook/recommandation",
    {
      params: { token }, // token envoyé comme query param
    }
  );

  return response.data;
};


export const getMe = async () => {
    const token = localStorage.getItem("token")
    if (!token) throw new Error("Utilisateur non authentifié")
  
    const response = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
  
    return response.data
  }


  export const sendProfileToN8n = async (profileId) => {
    const token = localStorage.getItem("token")
    if (!token) throw new Error("Utilisateur non authentifié")
    if (!profileId) throw new Error("ID du profil manquant")
  
    const response = await api.post(
      `/profiles/${profileId}/send-to-n8n`,
      null, // IMPORTANT
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
  
    return response.data
  }
  