import { Button, ButtonGroup } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Center, Flex, Heading } from '@chakra-ui/layout'
import NextLink from 'next/link'

import SignUpModal from '@/components/SignUpModal'

function IndexPage() {
  const signUpModalDisclosure = useDisclosure()

  return (
    <>
      <Flex
        as="main"
        height="100vh"
        flexDirection={{
          base: 'column-reverse',
          lg: 'row',
        }}
      >
        <Flex
          flex={{
            base: '45',
            lg: '55',
          }}
          backgroundColor="twitter.500"
        />
        <Center
          flex={{
            base: '55',
            lg: '45',
          }}
          flexDirection="column"
        >
          <Heading as="h1" marginBottom="16px">
            Join us today.
          </Heading>

          <ButtonGroup>
            <Button
              colorScheme="twitter"
              size="lg"
              onClick={() => signUpModalDisclosure.onToggle()}
            >
              Sign up
            </Button>

            <NextLink href="/login">
              <Button variant="outline" size="lg">
                Log in
              </Button>
            </NextLink>
          </ButtonGroup>
        </Center>
      </Flex>
      <SignUpModal disclosure={signUpModalDisclosure} />
    </>
  )
}

export default IndexPage
