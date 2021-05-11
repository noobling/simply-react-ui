import * as React from 'react'
import LineItem from './LineItem'
import { Theme, ThemeContext, themes } from './ThemeContext'

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
   * Stay at the bottom useful for log streams
   *
   * @default false
   */
  stickyBottom?: boolean
}

const LogViewer: React.FC<LogViewerProps & React.ComponentProps<'div'>> = ({
  text = '',
  theme,
  customTheme,
  stickyBottom: autoScroll = false,
  ...rest
}) => {
  const { background } = React.useContext(ThemeContext)
  const lines = text?.split(/\r?\n/)
  const selectedTheme = theme === 'light' ? themes.light : themes.dark
  const userTheme = { ...selectedTheme, ...customTheme }
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (ref.current && autoScroll) {
      setTimeout(() => {
        if (ref.current) {
          // @ts-ignore already checked if its null
          ref.current.scrollTop = ref.current.scrollHeight
        }
      }, 0)
    }
  }, [text])

  return (
    <ThemeContext.Provider value={userTheme}>
      <div style={{ background, padding: '1.5rem' }} {...rest} ref={ref}>
        {lines.map((line, index) => (
          <LineItem key={index} text={line} number={index + 1} />
        ))}
      </div>
    </ThemeContext.Provider>
  )
}

export default LogViewer
