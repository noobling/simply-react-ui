import React, { CSSProperties, useContext } from 'react'
import Box from './Box'
import { ThemeContext } from './ThemeContext'
import { ColorMap } from '.'

interface Props {
  xLabels: string[]
  yLabels: string[]
  data: GridData
  colorMap: ColorMap
}

export default function GridWithLabels({
  xLabels,
  yLabels,
  data,
  colorMap
}: Props) {
  const { unit, labelMargin } = useContext(ThemeContext)
  console.log(data)
  return (
    <div style={{ display: 'flex' }}>
      <YLabels labels={yLabels} />
      <div>
        <Grid
          xLabels={xLabels}
          yLabels={yLabels}
          data={data}
          colorMap={colorMap}
        />
        <XLabels
          labels={xLabels}
          style={{
            marginTop: labelMargin + unit
          }}
        />
      </div>
    </div>
  )
}

export interface GridData {
  [key: string]: { [key: string]: string }
}

interface GridProps {
  yLabels: string[]
  xLabels: string[]
  /**
   * The values should correspond to a key in colorMap
   */
  data: GridData
  colorMap: { [key: string]: string }
}

function Grid({ yLabels, xLabels, data, colorMap }: GridProps) {
  return (
    <div>
      {yLabels.map((yLabel) => (
        <div key={yLabel} style={{ display: 'flex' }}>
          {xLabels.map((xLabel) => {
            return (
              <Box
                key={xLabel}
                background={colorMap[data[xLabel]?.[yLabel]] ?? 'white'}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

function YLabels({ labels, style }: any) {
  const {
    unit,
    labelMargin,
    labelSize,
    boxHeight,
    boxBorderWidth
  } = useContext(ThemeContext)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      {labels.map((label: any) => (
        <div style={styles().label} key={label}>
          {label}
        </div>
      ))}
    </div>
  )

  function styles() {
    const height = boxHeight + boxBorderWidth * 2
    return {
      label: {
        height: height + unit,
        marginRight: labelMargin,
        display: 'flex',
        alignItems: 'center',
        fontSize: labelSize
      } as CSSProperties
    }
  }
}

function XLabels({
  labels,
  style
}: {
  labels: string[]
  style: CSSProperties
}) {
  const { boxBorderWidth, boxWidth, unit, labelSize } = useContext(ThemeContext)
  const totalBoxLength = boxBorderWidth * 2 + boxWidth

  return (
    <div style={{ display: 'flex', ...style }}>
      {labels.map((label) => (
        <div style={styles().label} key={label}>
          {label}
        </div>
      ))}
    </div>
  )

  function styles() {
    return {
      label: {
        wordBreak: 'break-all',
        width: totalBoxLength + unit,
        fontSize: labelSize + unit,
        textAlign: 'center'
      } as CSSProperties
    }
  }
}
