import React from 'react'
import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "3xl"
}

const Home = () => {

    return (

        <Box>
            <MyCarousel />
            <Container p={['4', '16']} maxWidth={'container.xl'} minH={'100vh'}>
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid black'} m={'auto'}>Services</Heading>
                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Text>
                </Stack>
            </Container>
        </Box >

    )
}

const MyCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
        >
            <Box w={'full'} h={'90vh'}>
                <img src={img1} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Watch the future.</Heading>
            </Box>
            <Box w={'full'} h={'90vh'}>
                <img src={img2} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Future is gaming.</Heading>
            </Box>
            <Box w={'full'} h={'90vh'}>
                <img src={img3} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming on console.</Heading>
            </Box>
            <Box w={'full'} h={'90vh'}>
                <img src={img4} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Night life is cool.</Heading>
            </Box>

        </Carousel>
    )
}

export default Home