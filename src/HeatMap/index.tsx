import React from 'react'
import GridWithLabels from './GridWithLabels'
import { ThemeContext, themes } from './ThemeContext'
import { mapCoordsToGrid } from './Util'
export type HeatMapValue = string | number

export interface Coord {
  x: HeatMapValue
  y: HeatMapValue
  z: string
}

export interface ColorMap {
  [key: string]: string
}

export interface HeatMapProps {
  /**
   * Label displayed on the y axis
   */
  yLabels: string[]
  /**
   * Label displayed on the x axis
   */
  xLabels: string[]
  /**
   * Data to display on heat map.
   */
  data: Coord[]
  /**
   * Mapping for z values and their color
   *
   * @example
   * [{someZValue: 'green', anotherZValue: 'blue'}]
   */
  colorMap: ColorMap
}

export default function HeatMap({
  yLabels,
  xLabels,
  data,
  colorMap
}: HeatMapProps) {
  const grid = mapCoordsToGrid(data)
  return (
    <ThemeContext.Provider value={themes}>
      <GridWithLabels
        xLabels={xLabels}
        yLabels={yLabels}
        data={grid}
        colorMap={colorMap}
      />
    </ThemeContext.Provider>
  )
}
