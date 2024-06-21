import { CSSProperties } from 'react'

export type IconProps = {
  width?: string
  height?: string
  style?: CSSProperties
  className?: React.ComponentProps<'svg'>['className']
}

export { default as IconFacebook } from './IconFacebook'
export { default as IconInstagram } from './IconInstagram'
export { default as IconLinkedin } from './IconLinkedin'
export { default as IconPen } from './IconPen'
