import { createContext } from 'react'

export interface HeatMapTheme {
  /**
   * In unit
   */
  boxWidth: number
  /**
   * In unit
   */
  boxHeight: number
  /**
   * In unit
   */
  boxBorderWidth: number
  boxBorderColor: string
  boxBorderStyle: string
  /**
   * The unit for boxSize and boxBorderWidth
   *
   * @example px
   */
  unit: string
  /**
   * Margin between label and grid in unit
   */
  labelMargin: number
  /**
   * Font size of x and y labels in unit
   */
  labelSize: number
}

export const themes: HeatMapTheme = {
  boxHeight: 30,
  boxWidth: 40,
  boxBorderWidth: 1,
  boxBorderColor: 'black',
  boxBorderStyle: 'solid',
  unit: 'px',
  labelMargin: 10,
  labelSize: 12
}

export const ThemeContext = createContext(themes)
