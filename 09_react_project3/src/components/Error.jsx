import { Alert, Image, AlertIcon, Box, Text, VStack, Heading, Button } from '@chakra-ui/react'
import React from 'react'

const Error = ({ message }) => {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                backgroundColor="gray.50"
            >
                <VStack spacing={4} textAlign="center">
                    <Image
                        src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600" // Cute image URL
                        alt="Error Image"
                        w="300px"
                    />
                    <Heading as="h1" size="xl">
                        Oops! Something went wrong.
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        {message || "We're sorry, but we can't process your request right now."}
                    </Text>
                    <Button
                        colorScheme="blue"
                        onClick={() => window.location.reload()}
                    >
                        Try Again
                    </Button>
                </VStack>
            </Box>
            <Alert
                status={'error'}
                position={'fixed'}
                bottom={'4'}
                left={'50%'}
                transform={'translateX(-50%)'}
                width={'container.lg'}
                zIndex={'overlay'}
            >
                <AlertIcon />
                <Text>{message}</Text>
            </Alert>
        </>

    )
}

export default Error