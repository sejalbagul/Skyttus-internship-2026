import api from '../services/api'

// Store/remove token in axios headers
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

export const removeAuthToken = () => {
  delete api.defaults.headers.common['Authorization']
}

export const getToken = () => {
  return localStorage.getItem('authToken')
}

// Decode JWT (assumes token is not expired, no verification)
export const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
  } catch (error) {
    return null
  }
}

// Check token expiry (exp claim in seconds)
export const isTokenExpired = (token) => {
  if (!token) return true
  const decoded = decodeToken(token)
  if (!decoded || !decoded.exp) return true
  const currentTime = Date.now() / 1000
  return decoded.exp < currentTime
}