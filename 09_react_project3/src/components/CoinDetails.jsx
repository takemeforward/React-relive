import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { server } from '..';
import axios from 'axios'
import Loader from './Loader';
import Error from './Error';
import Chart from './Chart';

const CoinDetails = () => {
    const params = useParams();

    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState('inr');
    const [days, setDays] = useState('24h');
    const [chartArray, setChartArray] = useState([]);


    const currencySymbol = currency === 'inr' ? '₹ ' : currency === 'usd' ? '$ ' : currency === 'eur' ? '€ ' : 'NA';

    const btns = ['24h', '7d', '14d', '30d', '60d', '100d', '1y', 'max'];


    useEffect(() => {

        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/${params.id}`)

                const { data: chartData } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
                setChartArray(chartData.prices);
                setCoin(data);
            } catch (error) {
                setError(true);
            }
            setLoading(false)
        }
        fetchCoins();
    }, [params.id, currency, days]);

    if (error) {
        return <Error message={"Error while fetching Coin."} />
    }
    return (
        <Container maxW={'container.xl'}>
            {
                loading ? <Loader /> : (
                    <>

                        <Box w={'full'} borderWidth={1}>
                            <Chart arr={chartArray} currency={currencySymbol} days={days} />
                        </Box>

                        <HStack p={'4'} wrap={'wrap'}>
                            {
                                btns.map((i) => (
                                    <Button key={i} onClick={() => (setDays(i))}>{i}</Button>
                                ))
                            }
                        </HStack>

                        <HStack >
                            <RadioGroup value={currency} onChange={setCurrency}>
                                <Radio m={'4'} value={'inr'}>INR</Radio>
                                <Radio m={'4'} value={'usd'}>USD</Radio>
                                <Radio m={'4'} value={'eur'}>EUR</Radio>
                            </RadioGroup>
                        </HStack>
                        <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
                            <Text fontSize={'small'} alignSelf={'center'} opacity={'0.7'}>
                                Last update on {Date(coin.market_data.last_updated).split("G")[0]}
                            </Text>
                            <Image src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'} />

                            <Stat>
                                <StatLabel>{coin.name}</StatLabel>
                                <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
                                <StatHelpText>
                                    <StatArrow type={coin.market_data.price_change_percentage_24h >= 0 ? 'increase' : 'decrease'} />
                                    {coin.market_data.price_change_percentage_24h}%
                                </StatHelpText>
                            </Stat>
                            <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'}>{`#${coin.market_cap_rank}`}</Badge>

                            <CustomBar low={coin.market_data.low_24h[currency]} high={coin.market_data.high_24h[currency]} currencySymbol={currencySymbol} />

                            <Box w={'full'} p={'4'} >
                                <Item title={"Max Supply"} value={coin.market_data.max_supply} />
                                <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
                                <Item title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
                                <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
                                <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
                            </Box>
                        </VStack>
                    </>
                )
            }
        </Container>
    )
}

const Item = ({ title, value }) => (
    <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
        <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
            {title}
        </Text>
        <Text>
            {value}
        </Text>
    </HStack>
)
const CustomBar = ({ low, high, currencySymbol }) => (
    <VStack w={'full'}>
        <Progress value={50} colorScheme={'teal'} w={'full'} />
        <HStack justifyContent={'space-between'} w={'full'} >
            <Badge children={`${currencySymbol} ${low}`} colorScheme={'red'} />
            <Text fontSize={'sm'}>24H Range</Text>
            <Badge children={`${currencySymbol} ${high}`} colorScheme={'green'} />
        </HStack>

    </VStack>
)
export default CoinDetails