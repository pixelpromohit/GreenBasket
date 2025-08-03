import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories';
import Bestsellers from '../components/Bestsellers';
import BottomBanner from '../components/BottomBanner';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div className='mt-6 md:mt-10'>
      <MainBanner/>
      <Categories/>
      <Bestsellers/>
      <BottomBanner/>
      <div id="newsletter">
        <NewsLetter/>
      </div>
    </div>
  )
}

export default Home;
