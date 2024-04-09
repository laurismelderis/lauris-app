const datePostfixes = ['st', 'nd', 'rd', 'th']

export const getDatePostfix = (day: number | undefined) => {
  if (day && day > 10 && day < 20) {
    return datePostfixes[3]
  }
  return day ? datePostfixes[(day - 1) % 10 < 4 ? (day - 1) % 10 : 3] : ''
}
