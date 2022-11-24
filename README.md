<span><p align="center">![kv](/assets/kv.png)</p></span>

一个基于[picocolors](https://github.com/SimonHe1995/picocolors)封装的colorful terminal输出库

![screenshot](/assets/screenshot.png)

## Install
```
  npm i @simonhe/colorize
```

## Usage
```js
import colorize from '@simonhe/colorize'

colorize({
  text: 'hi',
  color: 'red',
})
colorize({
  text: 'hi',
  bgColor: 'red',
})
colorize({
  text: 'hi',
  bgColor: 'red',
  dimmed: true
})
/*
  color?: IColors
  bgColor?: IColors
  dimmed?: boolean
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  inverse?: boolean
  text: string
  */
```

## Why use picocolors
- No dependencies.
- 14 times smaller and 2 times faster than chalk.
- Used by popular tools like PostCSS, SVGO, Stylelint, and Browserslist.
- Node.js v6+ & browsers support. Support for both CJS and ESM projects.
- TypeScript type declarations included.
- NO_COLOR friendly.

## License
MIT

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
