import { IEvent } from '@/src/models/Event'

const updateEvent = async (id: string, event: IEvent) => {
  try {
    const { title, descriptionType, description, day, month, year } = event

    const resp = await fetch(`http://localhost:3000/api/cv/${id}`, {
      method: 'PUT',
      next: { revalidate: 10 },
      body: JSON.stringify({
        title,
        descriptionType,
        description,
        day,
        month,
        year,
      }),
    })
    const data = await resp.json()

    return data
  } catch (error) {
    throw new Error(String(error))
  }
}

export default updateEvent
