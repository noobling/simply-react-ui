import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { LogViewer } from './index'
export default {
  title: 'LogViewer',
  component: LogViewer
}
// We create a “template” of how args map to rendering
const text = `yarn run v1.22.4
$ start-server-and-test serve http://localhost:8000 cy:run
1: starting server using command "npm run serve"
and when url "http://localhost:8000" is responding with HTTP status code 200
running tests using command "npm run cy:run"

npm WARN lifecycle The node binary used for scripts is /tmp/yarn--1599295401272-0.8535979788498027/node but npm is using /opt/hostedtoolcache/node/10.22.0/x64/bin/node itself. Use the  option to include the path for the node binary npm was executed with.

> gatsby-starter-default@0.1.0 serve /home/runner/work/rebranch/rebranch
> gatsby serve -p 8000`

const backgroundColor = {
  description: 'Play around with the background color',
  control: { type: 'color' }
}

const Template = ({
  text,
  theme,
  autoScroll = false,
  backgroundColor,
  ...rest
}: any) => {
  return (
    <LogViewer
      text={text}
      theme={theme}
      autoScroll={autoScroll}
      customTheme={{ background: backgroundColor || '#242a2e' }}
      {...rest}
    />
  )
}

export const Default: Story<any> = Template.bind({})
Default.args = {
  text
}
Default.argTypes = {
  backgroundColor
}

export const AutoScroll: Story<any> = Template.bind({})

AutoScroll.args = {
  text,
  autoScroll: true,
  style: { height: '100px', overflowY: 'scroll', background: 'black' }
}
AutoScroll.argTypes = {
  backgroundColor
}
