import { Coord } from './index'
import { GridData } from './GridWithLabels'

export function mapCoordsToGrid(coords: Coord[]): GridData {
  const grid: GridData = {}
  coords.forEach((coord) => {
    grid[coord.x]
      ? (grid[coord.x] = { ...grid[coord.x], [coord.y]: coord.z })
      : (grid[coord.x] = { [coord.y]: coord.z })
  })
  return grid
}
