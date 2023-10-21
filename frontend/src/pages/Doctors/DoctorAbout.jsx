//import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-black font-semibold fles items-center gap-2'>About of 
                  <span className='text-[#246BCE] font-bold text-[24px] leading-9 ml-3'>
                     Deshan Bandara 
                </span>
            </h3>
            <p className="text__para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, consectetur alias. 
                Consequuntur voluptatum recusandae sit,
                hic animi maiores alias! Aliquid, sed rem quo explicabo autem quis eligendi magnam vero adipisci?
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-black font-semibold'>Education</h3>
              <ul className='pt-4 md:p-5'>
                  <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                      <div>
                          <span className='text-[#246BCE] text-[15px] leading-6 font-semibold'>
                              {formateDate("08-29-2010")} - {formateDate("08-31-2015")}
                          </span>
                          <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                      </div>
                      <p className='text-[14px] leading-5 font-medium text-textColor'>New Asiri Hospital, Colombo</p>
                  </li>
                  <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                      <div>
                          <span className='text-[#246BCE] text-[15px] leading-6 font-semibold'>
                              {formateDate("10-01-2015")} - {formateDate("10-04-2018")}
                          </span>
                          <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                      </div>
                      <p className='text-[14px] leading-5 font-medium text-textColor'>New Asiri Hospital, Colombo</p>
                  </li>
              </ul>
        </div>

        <div className="mt-12">
              <h3 className='text-[20px] leading-[30px] text-black font-semibold'>Experiance</h3>
              <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ae]'>
                    <span className='text-[#bcb340] text-[15px leading-6 font-semibold]'>
                        {formateDate("10-01-2015")} - {formateDate("10-04-2018")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Apolo Hospital, Colombo</p>
                </li>
                <li className='p-4 rounded bg-[#fff9ae]'>
                    <span className='text-[#bcb340] text-[15px leading-6 font-semibold]'>
                        {formateDate("10-01-2015")} - {formateDate("10-04-2018")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Apolo Hospital, Colombo</p>
                </li>
              </ul>
        </div>


        

    </div>
  )
}

export default DoctorAbout