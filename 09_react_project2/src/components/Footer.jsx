import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin, AiOutlineSend, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack
                    alignItems={'stretch'}
                    w={'full'}
                    px={'4'}
                >
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get update
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'}
                        padding={'2'}
                    >
                        <Input placeholder='Enter email here...'
                            border={'none'}
                            borderRadius={'none'}
                            outline={'none'}
                            focusBorderColor='none'
                        />
                        <Button
                            p={'0'}
                            colorScheme='purple'
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack
                    w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textAlign={'center'} textTransform={'uppercase'}>
                        Video Hub
                    </Heading>
                    <Text>
                        All rights recieved
                    </Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <HStack pt={'4'}>
                        <Button variant={'link'} colorScheme={'purple'}>
                            <a target='blank' href="https://youtube.com/">
                                <AiFillYoutube size={'30'} color={'red'} />
                            </a>
                        </Button>
                        <Button variant={'link'} colorScheme={'purple'}>
                            <a target='blank' href="https://instagram.com/kaih_ke_lunga">
                                <AiFillInstagram size={'26'} color={'red'} />
                            </a>
                        </Button>
                        <Button variant={'link'} colorScheme={'purple'}>
                            <a target='blank' href="https://www.linkedin.com/in/in-vishal-kumar/">
                                <AiFillLinkedin size={'24'} color={'red'} />
                            </a>
                        </Button>
                    </HStack>

                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer