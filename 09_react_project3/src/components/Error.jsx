import { Alert, AlertIcon, Text } from '@chakra-ui/react'
import React from 'react'

const Error = ({ message }) => {
    return (
        <Alert
            status={'error'}
            position={'fixed'}
            bottom={'4'}
            left={'50%'}
            transform={'translateX(-50%)'}
            width={'container.lg'}

        >
            <AlertIcon />
            <Text>{message}</Text>
        </Alert>
    )
}

export default Error