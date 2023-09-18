import React,{useEffect} from 'react'
import UserCountCard from '../Components/UserCountCard'
import DonationCategoryCard from '../Components/DonationCategoryCard'
import bookSvg from '../assests/svg/mobile-book.svg'
import { AiOutlineRight } from 'react-icons/ai';
import qr from '../assests/svg/qr.avif'
import Layout from '../Layouts/Layouts'
import bg from '../assests/Images/bg1.png'
import Designertitle from '../Components/Designertitle'
import TopdonorCard from '../Components/TopdonorCard';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import food from '../assests/svg/food.avif'
import cloth from '../assests/svg/cloth.avif';
import accesoris from '../assests/svg/acces.avif';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray"}}
      onClick={onClick}
    >
      Next
      </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:'block',background: "gray" }}
      onClick={onClick}
    />
  );
}

function Home() {
  const settings = {
    dots: false,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    cssEase: "linear",
  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
   <Layout>

    <img src={bg} alt='firstBackground'/>
    <div className='mt-5'>
    <Designertitle
      title="LEGACY"
      titleBack="PROUD TO BE"
      />
    </div>
   
     <div className='flex flex-col md:flex-row gap-2 md:gap-10 rounded-xl mx-2 justify-center mt-20'>
        <UserCountCard
             number="10+"
             name = "NGOs"
          />
           <UserCountCard
             number="1000+"
             name = "Helped till yet"
          />
          <UserCountCard
           number="100+"
           name="Donor's"
           />
           <UserCountCard
           number="10+"
           name="Places"
           />
           <UserCountCard
           number="1000+"
           name="Volunteers"
           />
     </div>
<div className='mt-20'>
   <Designertitle
    title="THANK YOU"
    titleBack ="OUR TOP DONOR'S"
    />
    </div>
   
    <div className='mx-32 mt-20'>
    <Slider {...settings}>
          <div>
            <TopdonorCard imageUrl={bg} name="Tanu"/>
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu"/>
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu"/>
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>

          <div>
            <TopdonorCard imageUrl={bg} name="Tanu" />
          </div>
         
          
        </Slider>
</div>

<div className='mt-20'>
   <Designertitle
    
    titleBack ="FEATURES"
    />
    </div>
<div className='features'>
    <div className='flex flex-col md:flex-row mt-20 gap-0 md:gap-36 items-center mx-0 md:mx-36'>
      <div className=''>
        <img src={bookSvg} width={400} height={400} />
      </div>
      <div className='text-justify w-full md:w-1/2 p-4 md:mx-0'>
         <p>Experience the power of instant giving on our site. With just a few clicks, you can make a swift and impactful donation, helping us drive positive change faster than ever before. Join us in our mission to make a difference now!</p>
      </div>
    </div>
    <div className='flex flex-col md:flex-row mt-0 gap-0 md:gap-36 items-center mx-0 md:mx-36'>
      
      <div className='text-justify w-full md:w-1/2 p-4 md:mx-0'>
         <p>Revolutionize the way you give back with our QR code donation system. Experience the ultimate ease and speed as you directly support those in need, eliminating middlemen and ensuring your contribution reaches its destination swiftly. Scan, donate, and make a direct impact, all in one seamless process.</p>
      </div>
      <div className=''>
        <img src={qr} width={400} height={400} style={{mixBlendMode:'darken'}}/>
      </div>
    </div>
    <h3 className='font-bold text-center mt-10'>You can now contribute these also!</h3>
    <div className='flex flex-col md:flex-row justify-center gap-2 md:gap-10 mt-10'>
      
      <DonationCategoryCard
        imageUrl={bookSvg}
        name="BOOKS"
      />
        <DonationCategoryCard
        imageUrl={food}
        name="FOODS"
      />
        <DonationCategoryCard
        imageUrl={cloth}
        name="CLOTHES"
      />
        <DonationCategoryCard
        imageUrl={accesoris}
        name="Accesories"
      />
    </div>
    </div>
   </Layout>
  )
}

export default Home