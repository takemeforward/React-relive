// import { Button, HStack } from '@chakra-ui/react'
// import React from 'react'
// import { Link } from 'react-router-dom'
// const Header = () => {
//     return (
//         <HStack
//             p={'4'}
//             shadow={'base'}
//             bgColor={'blackAlpha.900'}
//         >
//             <Button variant={'unstyled'} color={'white'}>
//                 <Link to={'/'}>Home</Link>
//             </Button>
//             <Button variant={'unstyled'} color={'white'}>
//                 <Link to={'/exchanges'}>Exchanges</Link>
//             </Button>
//             <Button variant={'unstyled'} color={'white'}>
//                 <Link to={'/coins'}>Coins</Link>
//             </Button>

//         </HStack>
//     )
// }

import React from "react";
import { Image, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import logoImg from '../assets/logo.png'

const Header = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Link to={'/'}><Image maxW={'60px'} src={logoImg} objectFit={'contain'} /></Link>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};



const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}

                pt={[4, 4, 0, 0]}
            >
                <Link to="/">Home</Link>
                <Link to="/exchanges"> Exchange </Link>
                <Link to="/coins"> Coins </Link>
                <Link to="/contact-us"> Contact Us </Link>
                <Link to="/about-us"> About Us </Link>

            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            py={4}
            px={12}
            bg={'blackAlpha.900'}
            color={'whiteAlpha.900'}
            shadow={'lg'}
            justifyContent={'space-between'}
            {...props}
        >
            {children}
        </Flex>
    );
};


export default Header