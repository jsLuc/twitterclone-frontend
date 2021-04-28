import { extendTheme } from '@chakra-ui/react'

import config from './config'
import components from './components'

const theme = extendTheme({
  config,
  components,
})

export default theme
