import { Box, Button, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { videosArray } from './Data'

const Videos = () => {

    const [currVideo, setCurrVideo] = useState(videosArray[0])


    return (

        <Stack direction={['column', 'row']} minH={'100vh'} p={'8'} pt={'20'} >
            <VStack w={'full'}>
                <video
                    src={currVideo.sources}
                    width={'100%'}
                    controls

                    style={{ width: '100%', borderRadius: '10px' }}
                >

                </video>
                <VStack alignItems={'star'} p={'8'} w={'full'} overflowY={'auto'}>
                    <Heading>
                        {currVideo.title}({currVideo.subtitle})
                    </Heading>
                    <Text>{currVideo.description}</Text>
                </VStack>
            </VStack>
            <VStack
                w={['full', 'xl']}
                alignItems={'stretch'}
                p={'8'}
                spacing={'8'}
                overflowY={'auto'}
            >
                {
                    videosArray.map((item, index) => (
                        <Box>
                            {/* <Image src={item.thumb} /> */}
                            <Button
                                variant={'ghost'}
                                colorScheme='purple'
                                onClick={() => setCurrVideo(item)}

                            >
                                Lecture {index + 1}
                            </Button>
                        </Box>

                    ))
                }
            </VStack>
        </Stack>
    )
}

export default Videos