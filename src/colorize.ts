import pc from 'picocolors'
import type { ColorType, ColorizeOptions } from './types'

const RGB_LIKE_REGEX = /^(rgb|hsl|hsv|hwb)\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)$/
const ANSI_REGEX = /^(ansi|ansi256)\(\s?(\d+)\s?\)$/

const getMethod = (name: string, type: ColorType): string => type === 'foreground'
  ? name
  : `bg${name[0].toUpperCase()}${name.slice(1)}`

export function setColor(
  str: string,
  color: string | undefined,
  type: ColorType,
): string {
  if (!color)
    return str

  if (color in pc) {
    const method = getMethod(color, type)
    return (pc as any)[method](str)
  }

  if (color.startsWith('#')) {
    const method = getMethod('hex', type)
    return (pc as any)[method](color)(str)
  }

  if (color.startsWith('ansi')) {
    const matches = ANSI_REGEX.exec(color)

    if (!matches)
      return str

    const method = getMethod(matches[1], type)
    const value = Number(matches[2])

    return (pc as any)[method](value)(str)
  }

  const isRgbLike
    = color.startsWith('rgb')
    || color.startsWith('hsl')
    || color.startsWith('hsv')
    || color.startsWith('hwb')

  if (!isRgbLike)
    return str

  const matches = RGB_LIKE_REGEX.exec(color)

  if (!matches)
    return str

  const method = getMethod(matches[1], type)
  const firstValue = Number(matches[2])
  const secondValue = Number(matches[3])
  const thirdValue = Number(matches[4])

  return (pc as any)[method](firstValue, secondValue, thirdValue)(str)
}

export function colorize(options: ColorizeOptions) {
  const { text, color, bgColor, dimmed, bold, italic, underline, strikethrough, inverse } = options
  let result = text
  if (dimmed)
    result = pc.dim(result)

  if (color)
    result = setColor(result, color, 'foreground')

  if (bgColor)
    result = setColor(result, bgColor, 'background')

  if (bold)
    result = pc.bold(result)

  if (italic)
    result = pc.italic(result)

  if (underline)
    result = pc.underline(result)

  if (strikethrough)
    result = pc.strikethrough(result)

  if (inverse)
    result = pc.inverse(result)

  return result
}

