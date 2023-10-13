import React from 'react'

const Home = () => {
  return <>

    {/* ============== hero section ============== */}

    <>
      <section className='hero__section pt-[60px] 2xl:h-[800]'>
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

              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  </>
}

export default Home