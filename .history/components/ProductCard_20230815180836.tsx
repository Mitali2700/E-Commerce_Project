'use client';
import { ProductCardProps } from '@/types';
import React from 'react'

function ProductCard({ product }: ProductCardProps) {
    const {
        title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, } = product;

    return (
        <div>ProductCard</div>
    );
}

export default ProductCard