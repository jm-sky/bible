export const parseJson = (string: string | null) => {
  let json = null;
  try {
    json = JSON.parse(string ?? '')
  } catch (e) {
    json = null
  }
  return json;
}
