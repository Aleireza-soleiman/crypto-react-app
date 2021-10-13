import React, { useEffect, useState } from 'react';
//Api
import { getCoins } from '../service/api';
//Component
import CoinDetails from './CoinDetails';
//Styles
import styles from "./LandingPage.module.css";

const LandingPage = () => {
    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setCoins(await getCoins());
        }
        fetchAPI();
    },[]);
    const searchHandler = (event)=>{
        setSearch(event.target.value);
    }
    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input className={styles.input} type="text" placeholder="search ..."  value={search} onChange={searchHandler} />
            <div className={styles.container} >
                {
                    searchedCoin.map(coin => <CoinDetails
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                    />)
                }
            </div>
        </>
    );
};

export default LandingPage;