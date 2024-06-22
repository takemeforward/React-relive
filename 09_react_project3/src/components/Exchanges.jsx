import React, { useEffect, useState } from 'react'
import Error from './Error';
import axios from 'axios'
import { server } from '..'
import { Container, HStack, Heading, Image, VStack, Text } from '@chakra-ui/react';
import Loader from './Loader';
const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`)
                setExchanges(data);
            } catch (error) {
                setError(true);
            }
            setLoading(false)
        }
        fetchExchanges();
    }, [])

    if (error) {
        return <Error message={"Error while fetching Exchanges."} />
    }
    return (
        <Container maxW={'container.xl'}>
            {
                loading ? <Loader /> : <>
                    <HStack wrap={'wrap'}>
                        {
                            exchanges.map((item) => (
                                <ExchangeCard
                                    key={item.id}
                                    name={item.name}
                                    img={item.image}
                                    rank={item.trust_score_rank}
                                    url={item.url}
                                />
                            ))
                        }
                    </HStack>
                </>
            }
        </Container>
    )
}

const ExchangeCard = ({ name, img, rank, url }) => (
    <a href={url} target={'blank'}>
        <VStack w={['80', '52']} shadow={'lg'} borderRadius={'lg'} transition={'all 0.5'} m={'4'} p={'8'} css={{
            "&:hover": {
                transform: "scale(1.1)"
            }
        }}>
            <Image
                src={img}
                h={'10'}
                w={'10'}
                objectFit={'contain'}
                alt={'Exchange'}
            />
            <Heading
                size={'md'}
                noOfLines={1}
            >
                {rank}
            </Heading>
            <Text fontSize={'l'} fontWeight={'600'}>{name}</Text>
        </VStack>
    </a>
)

export default Exchanges