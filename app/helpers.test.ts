import '@testing-library/jest-dom'

import { getDatePostfix } from './helpers'

describe('helpers getDatePostfix(day: number)', () => {
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
