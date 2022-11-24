import type { Colors } from 'picocolors/types'
export type ColorType = 'foreground' | 'background'
type Others =
  'isColorSupported' |
  'reset' |
  'bold' |
  'dim' |
  'italic' |
  'underline' |
  'inverse' |
  'hidden' |
  'strikethrough' |
  'createColors'

type Bg = `bg${string}` | Others
type Remove<T, K> = T extends K ? never : T
type IColors = Remove<keyof Colors, Bg>

export interface ColorizeOptions {
  color?: IColors
  bgColor?: IColors
  dimmed?: boolean
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  inverse?: boolean
  text: string
}
