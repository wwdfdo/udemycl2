export const fetchRequest = async (url, method = 'GET', body) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response
}
