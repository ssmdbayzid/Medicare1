import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'
import patientComments from '../../assets/data/patientCommentData';


const Testimonial = () => {
    return (
        <section>
            <div className="container">
                {/* ================ Section Heading  ================= */}
                <div className="xl:w-[470px] mx-auto">
                    <h1 className="heading text-center">What Our Patient Say</h1>
                    <p className="text-para text-center">
                        World class care for every one health system offers unmatched
                    </p>
                </div>

                {/* ================ Comments Slider  ================= */}

                <div className="mt-7 lg:mt-14">
                    <Swiper
                        modules={[ Pagination ]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
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
                        }}>
                        
                            {patientComments && patientComments.map((commenter, index) =>
                            <SwiperSlide>
                            <div key={index} className="py-7 px-5 rounded-3">
                                <div className="flex items-center gap-3">
                                    <img src={patientAvatar} alt="" />
                                    <div className={""}>
                                        <h2 className="text-4 leading-7 font-semibold text-headingColor">{commenter.name}</h2>

                                        {/* ========== Start ========== */}
                                        <div className="flex items-center gap-0.5">
                                            <HiStar className="text-secondaryColor" />
                                            <HiStar className="text-secondaryColor" />
                                            <HiStar className="text-secondaryColor" />
                                            <HiStar className="text-secondaryColor" />
                                            <HiStar className="text-secondaryColor" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-justify mt-3 lg:mt-5">
                                    {commenter.feedback}
                                </p>
                            </div>
                            </SwiperSlide>
                            )}
                       

                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Testimonial
