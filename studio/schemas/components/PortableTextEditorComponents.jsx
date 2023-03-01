import React from 'react'

export const HighlightIcon = () => <span style={{ fontWeight: 'bold' }}>H</span>

export const HighlightRender = props => (
  <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
)
