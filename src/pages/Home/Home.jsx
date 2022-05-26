import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Home/Banner'
import Blog from '../../components/Home/Blog'
import Topic from '../../components/Home/Topic'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div >
    <Header></Header>
    <Banner></Banner>
    <Blog></Blog>
    <Topic></Topic>
    <Footer></Footer>
    </div>
  )
}

export default Home