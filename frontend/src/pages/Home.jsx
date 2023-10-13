import React from 'react'

const Home = () => {
  return <>

    {/* ============== hero section ============== */}

    <>
      <section className='hero_section pt-[60px] 2xl:h-[800]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

            {/* ============== hero content ============== */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live healthy, longer life.
                </h1>
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
          </div>
        </div>
      </section>
    </>

  </>
}

export default Home