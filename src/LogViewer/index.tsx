import * as React from 'react'
import LineItem from './LineItem'
import Container from './Container'
import { ThemeContext, themes, Theme } from './ThemeContext'

type CustomTheme<T> = {
  [P in keyof T]?: T[P]
}

/**
 * Create your highly customised log viewer
 */
export interface LogViewerProps {
  /**
   * Your log output you want to display
   */
  text: string
  /**
   * Choose from default themes to customise appearance
   */
  theme?: 'light' | 'dark'
  /**
   * Override the default themes' properties
   */
  customTheme?: CustomTheme<Theme>
  /**
   * Scroll to bottom on rerender useful for log streams
   *
   * @default false
   */
  autoScroll?: boolean
}

export const LogViewer: React.FC<
  LogViewerProps & React.ComponentProps<'div'>
> = ({ text = '', theme, customTheme, autoScroll = false, ...rest }) => {
  const lines = text?.split(/\r?\n/)
  const selectedTheme = theme === 'light' ? themes.light : themes.dark
  const userTheme = { ...selectedTheme, ...customTheme }
  const lastRef = React.useRef(null)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (lastRef.current && autoScroll)
      // @ts-ignore already checked if its null
      lastRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [lastRef.current, containerRef?.current?.clientHeight])
  console.log(lastRef)
  return (
    <ThemeContext.Provider value={userTheme}>
      <Container {...rest}>
        <div ref={containerRef}>
          {lines.map((line, index) => (
            <LineItem key={index} text={line} number={index + 1} />
          ))}
          <div ref={lastRef} />
        </div>
      </Container>
    </ThemeContext.Provider>
  )
}
