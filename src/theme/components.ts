import { ThemeOverride } from '@chakra-ui/react'

const components: ThemeOverride['components'] = {
  Button: {
    baseStyle: {
      borderRadius: 'full',
    },
  },
  Input: {
    defaultProps: {
      focusBorderColor: 'twitter.500',
    },
  },
}

export default components
