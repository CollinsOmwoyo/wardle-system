import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/clothing'

export default {
  getAll() {
    return axios.get(API_URL, { headers: authHeader() })
  },
  create(data) {
    return axios.post(API_URL, data, { headers: authHeader() })
  },
  update(id, data) {
    return axios.put(`${API_URL}/${id}`, data, { headers: authHeader() })
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`, { headers: authHeader() })
  },
}

function authHeader() {
  return { Authorization: `Bearer ${localStorage.getItem('token')}` }
}
