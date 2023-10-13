import React from 'react'

import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
 
const Home = () => {
  return <>

    {/* ============== hero section ============== */}

    
      <section className='hero_section pt-[60px] 2xl:h-[1024]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

            {/* ============== hero content ============== */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live healthy, longer life.
                </h1>
                <br />
                <p className='text__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ut praesentium eaque exercitationem delectus perferendis illo itaque velit voluptas. 
                Reiciendis eum neque tempora ullam delectus, 
                dolorem ad enim? Aspernatur, illum aliquam.</p>

                 <button className='btn'>Request an Appoinment</button>

              </div>
                {/* ============== hero counter ============== */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      30+
                    </h2>
                    <span className='w-[100px] h-2 bg-yellow-300 rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experiance</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      15+
                    </h2>
                    <span className='w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Clinik Location</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      99%
                    </h2>
                  <span className='w-[100px] h-2 bg-blue-300 rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Patient Satisfaction</p>
                  </div>



                </div>
            </div>

            {/* ============== hero content ============== */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                <img className='w-full' src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    
    {/* ============== hero section end ============== */}

    <section>
      <br />
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Providing the best medical service
          </h2>
          <p className='text__para text-center'>
            World-class care for everyone. Our Health System offers unmatched, Expert health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt="" />
            </div>

            <div className="mt-[px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Doctor
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World calss care for everyone. Our Health System Offers unmatched, expert health care. 
                From the lab to the clinic.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid boder-[#181A1E] mt-[30px] 
              mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon02} alt="" />
            </div>

            <div className="mt-[px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Location
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World calss care for everyone. Our Health System Offers unmatched, expert health care.
                From the lab to the clinic.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid boder-[#181A1E] mt-[30px] 
              mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon03} alt="" />
            </div>

            <div className="mt-[px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Appoinment
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World calss care for everyone. Our Health System Offers unmatched, expert health care.
                From the lab to the clinic.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid boder-[#181A1E] mt-[30px] 
              mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  </>
}

export default Home