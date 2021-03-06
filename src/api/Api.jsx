const { API_HOST, A, E, UB } = window.CONFIG

export async function getData(section) {
  try {
    const url = `${API_HOST}/${section}/?a=${A}&e=${E}&ub=${UB}`
    const res = await fetch(url)
    const result = await res.json()

    return result
  } catch (e) {
    console.log(e)
  }
}

export async function getServices(category) {
  try {
    const url = `${API_HOST}/servicios/?a=${A}&e=${E}&ub=${UB}&c=${category}`

    const res = await fetch(url)
    const result = await res.json()

    return result
  } catch (e) {
    console.log(e)
  }
}
