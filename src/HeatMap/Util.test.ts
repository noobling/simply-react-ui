import { Coord } from './index'
import { mapCoordsToGrid } from './Util'

const data: Coord[] = [
  { x: 'x', y: 'y', z: 'z' },
  { x: 'x', y: 'y1', z: 'z' },
  { x: 'x1', y: 'y1', z: 'z' }
]
const expected = { x: { y: 'z', y1: 'z' }, x1: { y1: 'z' } }

describe('mapCoordsToGrid', () => {
  it('should map data correctly', () => {
    const result = mapCoordsToGrid(data)
    expect(result).toEqual(expected)
  })
})
