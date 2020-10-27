import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  CSSProperties
} from 'react'
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

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <YLabels labels={yValues} />
        <div>{renderGrid()}</div>
      </div>

      <XLabels
        labels={xValues}
        style={{
          marginLeft: (maxYLabelWidth || 0) + labelMargin + unit,
          marginTop: labelMargin + unit
        }}
      />
    </div>
  )

  function renderGrid() {
    return yValues.map((value) => {
      return (
        <Row
          yLabel={value}
          xValues={xValues}
          key={value}
          maxYLabelWidth={maxYLabelWidth}
          setMaxYLabelWidth={setMaxYLabelWidth}
        />
      )
    })
  }
}

function Row({ yLabel, xValues, maxYLabelWidth, setMaxYLabelWidth }: any) {
  const ref = useRef(null)
  const { unit, labelMargin, labelSize } = useContext(ThemeContext)

  useEffect(() => {
    // @ts-ignore
    const width = ref.current?.offsetWidth
    setMaxYLabelWidth((current: any) => {
      return width > current || !current ? width : current
    })
  }, [ref.current])

  return (
    <div style={{ display: 'flex' }}>
      {/* <div ref={ref} style={styles().label}>
        {yLabel}
      </div> */}
      {xValues.map((label: any) => (
        <Box key={label} />
      ))}
    </div>
  )

  function styles() {
    return {
      label: {
        marginRight: labelMargin,
        width: maxYLabelWidth + unit,
        fontSize: labelSize
      } as CSSProperties
    }
  }
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
        fontSize: labelSize + unit
      } as CSSProperties
    }
  }
}
