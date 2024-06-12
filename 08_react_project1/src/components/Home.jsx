import React from 'react'
import Product from './Product'
export default function Home() {
    const arr = [1, 2, 3, 4]
    const products = arr.map((p) => {
        return (
            <Product key={p} value={p} />
        )
    })
    return (
        <div>
            {products}
        </div>
    )
}
