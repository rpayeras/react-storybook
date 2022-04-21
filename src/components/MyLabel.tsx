import React from 'react'
import './MyLabel.css'

export interface Props {
  /**
  * This is message that will show on label
  */
  label: string;
  /**
  * Size of label
  */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Color of component
   */
  color: 'primary'|'secondary'|'tertiary';
  /**
   * All text with uppercase
   */
  allCaps: boolean;
  /**
   * Custom color for font
   */
  fontColor?: string;
}

export const MyLabel = ({label = 'No label', size = 'normal', color='primary', allCaps = false, fontColor}: Props) => {
  return (
    <span className={`label ${ size } text-${color}`} style={{color: fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}