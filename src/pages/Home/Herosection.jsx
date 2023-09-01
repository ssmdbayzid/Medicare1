import React from 'react'
import img1 from '../../assets/images/hero-img01.png'
import img2 from '../../assets/images/hero-img02.png'
import img3 from '../../assets/images/hero-img03.png'

const Herosection = () => {
    return (
        <>
            <section className="hero_section pt-16 2xl:h-[800px]">
                <div className="container">
                    <div className="flex  lg:flex-row flex-col gap-24 items-center">

                        {/* ============= hero section =============== */}
                        
                        <div className="lg:w-[570px]">
                            <h1 className="text-center md:text-left md:text-6xl text-4xl leading-[60px] md:leading-[70px] font-bold">
                                We help patients  
                                live a healthy, 
                                longer life
                            </h1>
                            <p className="text-para">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores illum ipsa officiis sed? Obcaecati quis eaque sint iusto asperiores tenetur!
                            </p>
                            <button className="btn">Request An Appointment</button>
                            <div className="flex mt-8 gap-5">
                                <div>
                                    <p className="text-4xl  font-bold">
                                        30+
                                        <hr className=" -mt-3 w-[80px]  bg-secondaryColor h-2"></hr>                                       
                                    </p>
                                    <p className="text-textColor mt-1">
                                       30+ Years of Experience
                                    </p>
                                </div>
                                <div>
                                    <p className="text-4xl  font-bold">
                                        15+
                                        <hr className=" -mt-3 w-[80px]  bg-purpleColor h-2"></hr>                                       
                                    </p>
                                    <p className="text-textColor mt-1">
                                       30+ Years of Experience
                                    </p>
                                </div>
                                <div>
                                    <p className="text-4xl  font-bold">
                                        30+
                                        <hr className=" -mt-3 w-[80px]  bg-primaryColor h-2"></hr>                                       
                                    </p>
                                    <p className="text-textColor mt-1">
                                       30+ Years of Experience
                                    </p>
                                </div>

                            </div>

                        </div>
                        

                        {/* ============= Hero content =============== */}
                        <div className="flex justify-end gap-10 mb-6 ">
                            <div  className="mb-5">
                                <img src={img1} className="w-full" alt="" srcset="" />
                            </div>
                            <div className="mt-10 ml-5 flex flex-col gap-2 md:gap-10">
                                <img src={img2} alt="" className="w-full mb-2" />
                                <img src={img3} alt="" className="w-full"  />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection