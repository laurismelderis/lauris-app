export interface CvEntry {
  id: number
  day: number
  month: number
  year: number
  title: string
  description?: string
}

export const cvEntries: Array<CvEntry> = [
  {
    id: 0,
    day: 13,
    month: 9,
    year: 2000,
    title: 'Born date',
  },
  {
    id: 1,
    day: 31,
    month: 5,
    year: 2019,
    title: 'Graduated Rigas 84th secondary school',
    description:
      'Earned primary and secondary school diploma. Graduated with honors from the school activist parliament, for providing a great assistance for 5 years.',
  },
]
