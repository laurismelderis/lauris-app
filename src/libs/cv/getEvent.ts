const getEvent = async (id: string) => {
  try {
    const resp = await fetch(`http://localhost:3000/api/cv/${id}`, {
      next: { revalidate: 10 },
    })
    const data = await resp.json()

    return data
  } catch (error) {
    throw new Error(String(error))
  }
}

export default getEvent
