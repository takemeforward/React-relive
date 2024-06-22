import React from 'react'
import { Spinner, VStack } from '@chakra-ui/react'
const Loader = () => {
    return (
        <VStack
            display={'flex'}
            h={'90vh'}
            w={'90vw'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Spinner
                thickness="4px"
                speed="0.85s"
                emptyColor="whiteAlpha.700"
                color="blackAlpha.900"
                size="xl"
                transform="scale(2)"
            />
        </VStack>





    )
}

export default Loader