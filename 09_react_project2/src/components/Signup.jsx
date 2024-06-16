import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={'auto'} p={'16'}>
            <form>
                <VStack alignItems={'stretch'}
                    spacing={"8"}
                    w={['full', '96']}
                    m={'auto'}
                    my={'16'}
                >
                    <Heading>Welcome to Our page.</Heading>
                    <Avatar alignSelf={'center'} size={'xl'} />
                    <Input placeholder='Full Name'
                        type='text'
                        required
                        focusBorderColor='purple.500'
                    />
                    <Input placeholder='Email'
                        type='email'
                        required
                        focusBorderColor='purple.500'
                    />
                    <Input placeholder='password'
                        type='password'
                        required
                        focusBorderColor='purple.500'
                    />

                    <Button type='submit' colorScheme='purple'>Sign Up</Button>
                    <Text textAlign={'end'}>Already have an Accound? {' '}
                        <Button variant={'link'} alignSelf={'flex-end'}>
                            <Link to={'/signup'}>Log In</Link>
                        </Button></Text>
                </VStack>
            </form>

        </Container>
    )
}

export default Signup