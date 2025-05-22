import React from 'react'
import Billboard from '../components/Billboard'
import Services from '../components/Services'
import BestSelling from '../components/BestSelling'
import LimitedOffer from '../components/LimitedOffer'
import ItemListing from '../components/ItemListing'
import Categories from '../components/Categories'
import Instagram from '../components/Instagram'

export default function Home() {
  return (
    <div>
      <Billboard />
      <Services />
      <BestSelling />
      <LimitedOffer />
      <ItemListing />
      <Categories />
      <Instagram />
    </div>
  )
}
