const getEvents = async () => {
  const resp = await fetch('http://localhost:3000/api/cv', {
    next: { revalidate: 10 },
  })
  const data = await resp.json()

  return data
}

export default getEvents
