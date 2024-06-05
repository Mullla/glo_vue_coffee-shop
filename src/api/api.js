const API_URL = 'http://localhost:3000'

export const sendContacts = async (data) => {
  return fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export const getSortedCoffee = async (value) => {
  return fetch(`${API_URL}/coffee?q=${value}`).then((resp) => resp.json())
}

export const getItems = async (slug) => {
  return fetch(`${API_URL}/${slug}`).then((resp) => resp.json())
}

export const getItemById = async (slug, id) => {
  return fetch(`${API_URL}/${slug}/${id}`).then((resp) => resp.json())
}
