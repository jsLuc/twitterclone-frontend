import { Button } from '@chakra-ui/button'
import { UseDisclosureReturn } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'

interface SignUpModalProps {
  disclosure: UseDisclosureReturn
}
const SignUpModal: React.FC<SignUpModalProps> = ({
  disclosure: SignUpDisclosure,
}) => {
  const { isOpen, onClose } = SignUpDisclosure

  return (
    <Modal
      isCentered
      size="lg"
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onClose}
    >
      <ModalOverlay />
      <ModalContent
        background="black"
        color="white"
        border="#757575"
        borderStyle="solid"
        borderWidth="1px"
      >
        <ModalHeader>Create your account</ModalHeader>

        <ModalCloseButton color="white" />

        <ModalBody background="black" color="white">
          <Input
            variant="flushed"
            type="text"
            placeholder="Login"
            marginBottom="4"
          />

          <Input
            variant="flushed"
            type="text"
            placeholder="Email"
            marginBottom="4"
          />

          <Input
            variant="flushed"
            type="password"
            placeholder="Password"
            marginBottom="4"
          />

          <Text as="small" fontSize="sm">
            By signing up, you agree to our Terms, Privacy Policy, and Cookie
            Use.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="twitter" width="full" onClick={onClose}>
            Sign up
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SignUpModal
