import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Deshan Bandara
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have taken medical service form them. They treat so well and they are provide the best medical
                            service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Deshan Bandara
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have taken medical service form them. They treat so well and they are provide the best medical
                            service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Deshan Bandara
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have taken medical service form them. They treat so well and they are provide the best medical
                            service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Deshan Bandara
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have taken medical service form them. They treat so well and they are provide the best medical
                            service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Deshan Bandara
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have taken medical service form them. They treat so well and they are provide the best medical
                            service"
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
