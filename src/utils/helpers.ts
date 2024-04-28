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

export const getDatePostfix = (day: number | undefined) => {
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
    return months.indexOf(month) + 1
  }
  return 0
}
