import scss from '../../index.es.js'
import sass from 'node-sass'

export default {
  input: '../input.js',
  output: {
    file: 'output.js',
    format: 'esm'
  },
  plugins: [scss({ fileName: 'output.css', sass })]
}
