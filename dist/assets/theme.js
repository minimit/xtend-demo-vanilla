import 'core-js'
import 'xtend-library/src/xt.js'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/addons/test.js' // example override file: check console.debug

import './scripts/general.js'

/**
 * favicon
 */

const changeMq = () => {
  const colorSchemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const favicon = document.querySelector('#favicon')
  const faviconDark = document.querySelector('#favicon-dark')
  if (colorSchemeMq.matches) {
    favicon.remove()
    document.head.append(faviconDark)
  } else {
    document.head.append(favicon)
    faviconDark.remove()
  }
}

changeMq()
