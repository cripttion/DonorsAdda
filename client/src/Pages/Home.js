import React from 'react'

import DonationCategoryCard from '../Components/DonationCategoryCard'
import bookSvg from '../assests/svg/mobile-book.svg'
import NavBar from '../Layouts/NavBar'
import Layout from '../Layouts/Layouts'
import bg from '../assests/Images/bg1.png'
import Designertitle from '../Components/Designertitle'

function Home() {
  return (
   <Layout>
   <div>
    <img src={bg} alt='firstBackground'/>
    <div className='mt-5'>
    <Designertitle
      title="Category"
      titleBack="DONATE THESE"
      />
    </div>
   
     <div className='flex flex-col md:flex-row gap-2 md:gap-10 rounded-xl mx-2 justify-center mt-10'>
        <DonationCategoryCard
          imageSrc={bookSvg}
          categoryname="Books"
          />

<DonationCategoryCard
          imageSrc={bookSvg}
          categoryname="Books"
          />


<DonationCategoryCard
          imageSrc={bookSvg}
          categoryname="Books"
          />

<DonationCategoryCard
          imageSrc={bookSvg}
          categoryname="Books"
          />
     </div>
     </div>
   </Layout>
  )
}

export default Home