import React, { useEffect, useState } from 'react'
import Coin from '../Coin';
import Loader from './Loader';
import axios from 'axios'
export default function Home() {
    const [coinData, setCoinData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAllCoins = async () => {
            const { data } = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=520'
            );
            console.log(data);
            setCoinData(data);
            setLoading(false);
        }
        fetchAllCoins();

    })

    return (
        <div className='container'>
            {
                loading ? <Loader /> : coinData.map((i) => (
                    <Coin name={i.name}
                        symbol={i.symbol}
                        imgSrc={i.image}
                        price={i.current_price}
                        key={i.id} />
                ))
            }
        </div>
    )
}


