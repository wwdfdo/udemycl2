import { fetchRequest } from '@api'

export const signup = async (body) => {
  const signupResposne = await fetchRequest(
    'http://143.198.82.73:8000/v1/auth/users',
    'POST',
    body
  )

  return signupResposne
}
