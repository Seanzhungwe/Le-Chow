
import Logo from '../assets/Images/hat.svg'
// import Food from '../assets/Images/food.jpeg'
// import Vegan from '../assets/Images/vegan.jpeg'
// import lemonade from '../assets/Images/lemonade.jpeg'
import ScrollTbtn from '../Components/Scrollbtn'
// import SearchBar from '../Components/SearchBar/SearchBar'
// import Feed from '../Components/Feed/Feed'
import Gallery from '../Pages/Gallery'
import Carousel from '../Components/Carousel/Carousel'



const Home = () => {




  return (
    <>
      <section id="Home">

        <div className="lechow">
        <img className='logo' src={Logo} alt="logo" />
          <div className="logo-frame">
            <h2>Lechow</h2>
            <p>For all the foodies</p>
          </div>
        </div>


        <div className="search">



          <div className="categories">
            <h3 className="text-1xl font-bold text-center mb-8"> Catergories</h3>

            <div className="cate-cards">
              <div className="cate-card"><h4>Beverages</h4></div>
              <div className="cate-card"><h4>Salads</h4></div>
              <div className="cate-card"><h4>Vegan</h4></div>
              <div className="cate-card"><h4>Meaty</h4></div>

            </div>

          </div>
        </div>

      </section>

      {/* /////////////////////////////////////////////////////// */}
      <section id="Menu">

        <h2 className="text-2xl font-bold text-center"> Menu</h2>

        <Carousel />


        <section id="feed">
          {/* <Feed /> */}
        </section>

      </section>

      <section id='Gallery'>
        <Gallery />
      </section>
      <ScrollTbtn />
    </>
  )
}

export default Home