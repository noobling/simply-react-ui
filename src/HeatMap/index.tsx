import React, { useContext } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import GridWithLabels from './GridWithLabels'
export type HeatMapValue = string | number

interface HeatMapData {
  x: HeatMapValue
  y: HeatMapValue
  z: string
}

export interface ColorMap {
  [key: string]: string
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
   *
   * @example
   * [{someZValue: 'green', anotherZValue: 'blue'}]
   */
  colorMap: ColorMap
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
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm',
    '12am'
  ]
  const yValues = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

  return (
    <ThemeContext.Provider value={themes}>
      <GridWithLabels xLabels={xValues} yLabels={yValues} />
    </ThemeContext.Provider>
  )
}
