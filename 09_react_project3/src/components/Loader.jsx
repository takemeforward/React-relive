import React from 'react'
import { Skeleton, HStack } from '@chakra-ui/react'
const Loader = () => {
    const skeletonArray = Array.from({ length: 15 }, (v, i) => i);
    return (
        <HStack wrap={'wrap'}>
            {skeletonArray.map((index) => (
                <Skeleton key={index} h={'52'} w={['80', '52']} m={'4'} shadow={'lg'} borderRadius={'lg'} />
            ))}
        </HStack>




    )
}

export default Loader