import React from 'react'

export const mathInlineIcon = () => (
  <span>
    <span style={{ fontWeight: 'bold' }}>∑</span>b
  </span>
)
export const mathIcon = () => <span style={{ fontWeight: 'bold' }}>∑</span>

export const HighlightIcon = () => <span style={{ fontWeight: 'bold' }}>H</span>

export const HighlightRender = props => (
  <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
)
