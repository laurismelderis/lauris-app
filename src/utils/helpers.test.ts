import '@testing-library/jest-dom'

import { getDatePostfix, getMonthName, getMonthNumber } from './helpers'

describe('helpers getDatePostfix(day: number | null | undefined)', () => {
  it('should return the right date', () => {
    expect(getDatePostfix(0)).toBe('')
    expect(getDatePostfix(1)).toBe('st')
    expect(getDatePostfix(2)).toBe('nd')
    expect(getDatePostfix(3)).toBe('rd')
    expect(getDatePostfix(4)).toBe('th')
    expect(getDatePostfix(11)).toBe('th')
    expect(getDatePostfix(12)).toBe('th')
    expect(getDatePostfix(13)).toBe('th')
    expect(getDatePostfix(14)).toBe('th')
    expect(getDatePostfix(20)).toBe('th')
    expect(getDatePostfix(21)).toBe('st')
    expect(getDatePostfix(22)).toBe('nd')
    expect(getDatePostfix(23)).toBe('rd')
    expect(getDatePostfix(24)).toBe('th')
    expect(getDatePostfix(101)).toBe('st')
    expect(getDatePostfix(102)).toBe('nd')
    expect(getDatePostfix(103)).toBe('rd')
    expect(getDatePostfix(104)).toBe('th')
    expect(getDatePostfix(111)).toBe('th')
    expect(getDatePostfix(112)).toBe('th')
    expect(getDatePostfix(113)).toBe('th')
    expect(getDatePostfix(114)).toBe('th')
  })
})

describe('helpers getMonthName(month: number | undefined)', () => {
  it('should return the right month name', () => {
    expect(getMonthName(0)).toBe('January')
    expect(getMonthName(1)).toBe('February')
    expect(getMonthName(2)).toBe('March')
    expect(getMonthName(3)).toBe('April')
    expect(getMonthName(4)).toBe('May')
    expect(getMonthName(5)).toBe('June')
    expect(getMonthName(6)).toBe('July')
    expect(getMonthName(7)).toBe('August')
    expect(getMonthName(8)).toBe('September')
    expect(getMonthName(9)).toBe('October')
    expect(getMonthName(10)).toBe('November')
    expect(getMonthName(11)).toBe('December')
  })
})

describe('helpers getMonthNumber(month: string | undefined)', () => {
  it('should return the right month number', () => {
    expect(getMonthNumber('January')).toBe(0)
    expect(getMonthNumber('February')).toBe(1)
    expect(getMonthNumber('March')).toBe(2)
    expect(getMonthNumber('April')).toBe(3)
    expect(getMonthNumber('May')).toBe(4)
    expect(getMonthNumber('June')).toBe(5)
    expect(getMonthNumber('July')).toBe(6)
    expect(getMonthNumber('August')).toBe(7)
    expect(getMonthNumber('September')).toBe(8)
    expect(getMonthNumber('October')).toBe(9)
    expect(getMonthNumber('November')).toBe(10)
    expect(getMonthNumber('December')).toBe(11)
  })
})
