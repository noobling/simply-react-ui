import React, { useContext } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import Grid from './Grid'
export type HeatMapValue = string | number

interface HeatMapData {
  x: HeatMapValue
  y: HeatMapValue
  z: string
}

interface Props {
  /**
   * Label displayed on the y axis
   */
  yLabel: string
  /**
   * Label displayed on the x axis
   */
  xLabel: string
  /**
   * Data to display on heat map.
   */
  data: HeatMapData[]
  /**
   * Mapping for z values and their color
   */
  colorMap: { [key: string]: string }
}

export default function HeatMap() {
  const xValues = [
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12am',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12am'
  ]
  const yValues = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

  return (
    <ThemeContext.Provider value={themes}>
      <Grid xValues={xValues} yValues={yValues} />
    </ThemeContext.Provider>
  )
}
