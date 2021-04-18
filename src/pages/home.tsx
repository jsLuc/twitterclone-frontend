import styled from 'styled-components'

import { useScreenSize } from '@/hooks/useScreenSize'

import Layout from '@/components/Layout'
import Suggestions from '@/components/Suggestions'

const FeedContainer = styled.main`
  width: 100%;
  max-width: 600px;
  border: #2f3336 solid 1px;
`

const SuggestionsContainer = styled.div`
  flex: 1;
`

export default function Home() {
  const screenSize = useScreenSize()

  return (
    <Layout>
      <FeedContainer>hello world</FeedContainer>
      <SuggestionsContainer>
        {screenSize !== 'sm' && <Suggestions />}
      </SuggestionsContainer>
    </Layout>
  )
}
