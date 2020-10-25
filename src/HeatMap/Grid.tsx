import React, { useContext, useRef, useState, useEffect } from 'react'
import Box from './Box'
import { ThemeContext } from './ThemeContext'

interface Props {
  xValues: string[]
  yValues: string[]
}

/**
 * Renders a grid of xValues.length x yValues.length
 */
export default function Grid({ xValues, yValues }: Props) {
  // Used to set all y labels to the width of the longest y label
  const [maxYLabelWidth, setMaxYLabelWidth] = useState<number>()
  const { unit, labelMargin } = useContext(ThemeContext)
  const grid = yValues.map((value, index) => {
    const isFinal = yValues.length === index + 1
    return (
      <Row
        yLabel={value}
        xValues={xValues}
        withXLabels={isFinal}
        key={value}
        maxYLabelWidth={maxYLabelWidth}
        setMaxYLabelWidth={setMaxYLabelWidth}
      />
    )
  })
  return (
    <div>
      {grid}
      <XLabels
        xLabels={xValues}
        style={{
          marginLeft: (maxYLabelWidth || 0) + labelMargin + unit,
          marginTop: labelMargin + unit
        }}
      />
    </div>
  )
}

function Row({
  yLabel,
  xValues,
  withXLabels,
  maxYLabelWidth,
  setMaxYLabelWidth
}: any) {
  const ref = useRef(null)
  const { unit, labelMargin } = useContext(ThemeContext)
  useEffect(() => {
    // @ts-ignore
    const width = ref.current?.offsetWidth
    setMaxYLabelWidth((current: any) => {
      return width > current || !current ? width : current
    })
  }, [ref.current])

  return (
    <div style={{ display: 'flex' }}>
      <div
        ref={ref}
        style={{ marginRight: labelMargin, width: maxYLabelWidth + unit }}
      >
        {yLabel}
      </div>
      {xValues.map((label: any) => (
        <Box key={label} />
      ))}
    </div>
  )
}

function XLabels({ xLabels, style }: { xLabels: string[]; style: any }) {
  const { boxBorderWidth, boxWidth, unit } = useContext(ThemeContext)
  const totalBoxLength = boxBorderWidth * 2 + boxWidth
  return (
    <div style={{ display: 'flex', ...style }}>
      {xLabels.map((label) => (
        <div
          style={{
            wordBreak: 'break-all',
            width: totalBoxLength + unit
          }}
          key={label}
        >
          {label}
        </div>
      ))}
    </div>
  )
}
