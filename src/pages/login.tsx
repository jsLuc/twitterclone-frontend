import NextLink from 'next/link'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Center, Box as Flex, Text } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'

import SignUpModal from '@/components/SignUpModal'

function LoginPage() {
  const signUpModalDisclosure = useDisclosure()

  return (
    <>
      <Center height="100vh">
        <Flex flexDirection="column" width="400px">
          <Input
            variant="flushed"
            type="text"
            placeholder="Login"
            marginBottom="6"
          />

          <Input
            variant="flushed"
            type="password"
            placeholder="Password"
            marginBottom="6"
          />

          <NextLink href="/home">
            <Button width="full" colorScheme="twitter" marginBottom="6">
              Sign in
            </Button>
          </NextLink>

          <Center>
            <Text>
              Don't have an account yet?{' '}
              <Button
                colorScheme="twitter"
                variant="link"
                onClick={() => signUpModalDisclosure.onToggle()}
              >
                Sign up
              </Button>
            </Text>
          </Center>
        </Flex>
      </Center>

      <SignUpModal disclosure={signUpModalDisclosure} />
    </>
  )
}

export default LoginPage
