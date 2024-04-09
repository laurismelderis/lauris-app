const datePostfixes = ['st', 'nd', 'rd', 'th']

export const getDatePostfix = (day: number | undefined) => {
  return day ? datePostfixes[(day - 1) % 10 < 4 ? (day - 1) % 10 : 3] : ''
}
