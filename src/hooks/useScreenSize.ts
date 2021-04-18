import { useMediaQuery } from 'react-responsive'

export const useScreenSize = () => {
  const isLarge = useMediaQuery({ minWidth: 1280 })
  const isMedium = useMediaQuery({ minWidth: 1000 })

  if (isLarge) return 'lg'

  if (isMedium) return 'md'

  return 'sm'
}
