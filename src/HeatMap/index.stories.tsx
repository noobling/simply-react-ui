import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import HeatMap, { ColorMap, Coord, HeatMapProps } from '.'
export default {
  title: 'HeatMap',
  component: HeatMap
} as Meta

const xLabels = [
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
const yLabels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
const colorMap: ColorMap = { peak: 'black', offpeak: 'blue' }
const data: Coord[] = [
  { x: '1am', y: 'Mon', z: 'peak' },
  { x: '2am', y: 'Tues', z: 'offpeak' }
]

const Template = ({ xLabels, yLabels, colorMap, data }: HeatMapProps) => {
  return (
    <HeatMap
      xLabels={xLabels}
      yLabels={yLabels}
      colorMap={colorMap}
      data={data}
    />
  )
}

export const Default: Story<HeatMapProps> = Template.bind({})

Default.args = {
  xLabels,
  yLabels,
  colorMap,
  data
}
