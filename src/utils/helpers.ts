const datePostfixes = ['st', 'nd', 'rd', 'th']

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getDatePostfix = (day: number | null | undefined) => {
  if (day && day % 100 > 10 && day % 100 < 20) {
    return datePostfixes[3]
  }
  return day ? datePostfixes[(day - 1) % 10 < 4 ? (day - 1) % 10 : 3] : ''
}

export const getMonthName = (month: number | undefined) => {
  if ((month || typeof month === 'number') && month >= 0 && month <= 11) {
    return months[month]
  }
  return ''
}

export const getMonthNumber = (month: string | undefined) => {
  if (month && months.includes(month)) {
    return months.indexOf(month)
  }
  return 0
}

// UTC +3
export const LATVIA_TIMEZONE_OFFSET = 3

export const getUtcTime = (): Date => {
  const date = new Date()
  const localTime = date.getTime()
  const localOffset = date.getTimezoneOffset() * 60_000
  const utc = localTime + localOffset

  return new Date(utc)
}

export const getLatviaTime = (): Date => {
  const utc = getUtcTime().getTime()

  return new Date(utc + 3_600_000 * LATVIA_TIMEZONE_OFFSET)
}
