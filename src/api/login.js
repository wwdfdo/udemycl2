import { fetchRequest } from '@api'

export const login = async (body) => {
  const loginResponse = await fetchRequest(
    'http://143.198.82.73:8000/v1/auth/login',
    'POST',
    body
  )

  return loginResponse
}
