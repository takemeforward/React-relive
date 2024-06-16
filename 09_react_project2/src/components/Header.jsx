import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Stack,
    VStack,
    HStack
}
    from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                pos={'fixed'}
                top={'4'}
                left={'4'}
                colorScheme='purple'
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen}
                zIndex={'overlay'}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} onClose={onClose} placement='left' >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>VideoHub</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button variant={'ghost'} colorScheme='purple' onClick={onClose}>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button variant={'ghost'} colorScheme='purple' onClick={onClose}>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button variant={'ghost'} colorScheme='purple' onClick={onClose}>
                                <Link to={'/videos?category=free'}>Free videos</Link>
                            </Button>
                            <Button variant={'ghost'} colorScheme='purple' onClick={onClose}>
                                <Link to={'/upload'}>Upload videos</Link>
                            </Button>
                        </VStack>
                        <HStack pos={'absolute'} bottom={'4'} left={'4'} w={'full'} gap={'8'}>
                            <Button colorScheme='purple' onClick={onClose}>
                                <Link to={'/login'}>Log in</Link>
                            </Button>
                            <Button colorScheme='purple' variant={'outline'} onClick={onClose}>
                                <Link to={'/signup'}>Sign up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header