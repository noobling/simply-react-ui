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

const LogViewer: React.FC<LogViewerProps & React.ComponentProps<'div'>> = ({
  text = '',
  theme,
  customTheme,
  autoScroll = false,
  ...rest
}) => {
  const lines = text?.split(/\r?\n/)
  const selectedTheme = theme === 'light' ? themes.light : themes.dark
  const userTheme = { ...selectedTheme, ...customTheme }
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (ref.current && autoScroll)
      // @ts-ignore already checked if its null
      setTimeout(() => ref.current.scrollIntoView({ behavior: 'smooth' }), 0)
  }, [text])

  return (
    <ThemeContext.Provider value={userTheme}>
      <Container {...rest}>
        <div>
          {lines.map((line, index) => (
            <LineItem key={index} text={line} number={index + 1} />
          ))}
          <div ref={ref} />
        </div>
      </Container>
    </ThemeContext.Provider>
  )
}

export default LogViewer
