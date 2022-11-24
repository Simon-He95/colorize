import { describe, it } from 'vitest'
import colorize from '../dist'

describe('should', () => {
  it('exported', () => {
    const data = colorize({
      text: 'Hello World',
      color: 'red',
      dimmed: true,
      strikethrough: true,
    })
    console.log(data)
  })
})
