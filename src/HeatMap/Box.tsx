import React, { useContext, CSSProperties } from 'react'
import { ThemeContext } from './ThemeContext'

/**
 * A simple square
 */
export default function Box({ background }: CSSProperties) {
  const {
    boxHeight,
    boxWidth,
    boxBorderColor,
    boxBorderStyle,
    boxBorderWidth,
    unit
  } = useContext(ThemeContext)
  return (
    <div
      style={{
        width: boxWidth + unit,
        height: boxHeight + unit,
        borderWidth: boxBorderWidth + unit,
        borderStyle: boxBorderStyle,
        borderColor: boxBorderColor,
        background
      }}
    />
  )
}
