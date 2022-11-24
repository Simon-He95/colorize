import { describe, it } from 'vitest'
import colorize from '../dist'

describe('should', () => {
  it('exported', () => {
    console.log(colorize({
      text: 'bold',
      bold: true,
    }), colorize({
      text: 'dim',
      dimmed: true,
    }), colorize({
      text: 'italic',
      italic: true,
    }), colorize({
      text: 'underline',
      underline: true,
    }), colorize({
      text: 'inverse',
      inverse: true,
    }), colorize({
      text: 'strikethrough',
      strikethrough: true,
    }), colorize({
      text: 'black',
      color: 'black',
    }))

    console.log(colorize({
      text: 'red',
      color: 'red',
    }), colorize({
      text: 'green',
      color: 'green',
    }), colorize({
      text: 'yellow',
      color: 'yellow',
    }), colorize({
      text: 'blue',
      color: 'blue',
    }), colorize({
      text: 'magenta',
      color: 'magenta',

    }), colorize({
      text: 'cyan',
      color: 'cyan',
    }), colorize({
      text: 'white',
      color: 'white',
    }), colorize({
      text: 'gray',
      color: 'gray',
    }), colorize({
      text: 'bgBlack',
      bgColor: 'black',
    }))

    console.log(colorize({
      text: 'bgRed',
      bgColor: 'red',
    }), colorize({
      text: 'bgGreen',
      bgColor: 'green',
    }), colorize({
      text: 'bgYellow',
      bgColor: 'yellow',
    }), colorize({
      text: 'bgBlue',
      bgColor: 'blue',
    }), colorize({
      text: 'bgMagenta',
      bgColor: 'magenta',
    }), colorize({
      text: 'bgCyan',
      bgColor: 'cyan',
    }), colorize({
      text: 'bgWhite',
      bgColor: 'white',
    }))
  })
})
