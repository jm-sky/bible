export const parseJson = (string: string | null | undefined) => {
  let json = null
  try {
    json = JSON.parse(string ?? '')
  } catch (e) {
    json = null
  }
  return json
}
