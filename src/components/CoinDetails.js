import React from 'react';
//Styles
import styles from "./CoinDetails.module.css";

const CoinDetails = ({name,image,symbol,price,marketCap,priceChange}) => {
    return (
        <div className={styles.coinContainer} >
            <img className={styles.image}  src={image} alt={name} />
            <span className={styles.name} >{name}</span>
            <span className={styles.symbol} >{symbol.toUpperCase()}</span>
            <span className={styles.price} >{price.toLocaleString()} $</span>
            <span className={priceChange>0 ? styles.green : styles.red} >{priceChange} %</span>
            <span className={styles.marketCap} >{marketCap.toLocaleString()} $</span>
        </div>
    );
};

export default CoinDetails;