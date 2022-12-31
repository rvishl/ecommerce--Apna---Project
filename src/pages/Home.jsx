
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Nav from '../components/Nav';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Announcement />
      <Nav />
      <Slider />
      <Categories />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home;