import React, { useEffect, useState } from 'react'
import Error from './Error';
import axios from 'axios'
import { server } from '..'
import { Container, HStack, Heading, Image, VStack, Text, Button, Input, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('inr');

    const currencySymbol = currency === 'inr' ? '₹ ' : currency === 'usd' ? '$ ' : currency === 'eur' ? '€ ' : 'NA';
    useEffect(() => {

        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
                setCoins(data);
            } catch (error) {
                setError(true);
            }
            setLoading(false)
        }
        fetchCoins();
    }, [currency, page]);

    const changePage = (p) => {
        if (p > 0) {
            setPage(p);
            setLoading(true);
        }
    }

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setPage(value);
        }
    };

    const handlePrevClick = () => {
        if (page > 1)
            changePage(page - 1);
    };

    const handleNextClick = () => {
        if (page < 132)
            changePage(page + 1);

    };
    if (error) {
        return <Error message={"Error while fetching Coins."} />
    }
    return (
        <Container maxW={'container.xl'}>
            {
                loading ? <Loader /> : <>

                    <HStack >
                        <RadioGroup value={currency} onChange={setCurrency}>
                            <Radio m={'4'} value={'inr'}>INR</Radio>
                            <Radio m={'4'} value={'usd'}>USD</Radio>
                            <Radio m={'4'} value={'eur'}>EUR</Radio>
                        </RadioGroup>
                    </HStack>
                    <HStack wrap={'wrap'}>
                        {
                            coins.map((item) => (
                                <CoinsCard
                                    id={item.id}
                                    key={item.id}
                                    name={item.name}
                                    img={item.image}
                                    symbol={item.symbol}
                                    price={item.current_price}
                                    currencySymbol={currencySymbol}
                                />
                            ))
                        }
                    </HStack>
                    <HStack w={'full'} textAlign={'center'} m={'8'} justifyContent={'center'}>
                        <Button onClick={handlePrevClick}>Prev</Button>
                        <Input textAlign={'center'} p={'0'} w={'6'} type='text' value={page} onChange={handleInputChange} onBlur={handleInputChange} />
                        <Button onClick={handleNextClick}>Next</Button>
                    </HStack>
                </>
            }
        </Container>
    )
}

const CoinsCard = ({ id, name, img, symbol, price, currencySymbol = '₹ ' }) => (
    <Link to={`/coin/${id}`}>
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
                {symbol}
            </Heading>
            <Text fontSize={'l'} fontWeight={'600'}>{name}</Text>
            <Text fontSize={'l'} fontWeight={'400'}>{price ? `${currencySymbol}${price}` : 'NA'}</Text>
        </VStack>
    </Link>
)

export default Coins