import React from 'react'

import aboutImg from '../../assets/images/about.png'
import aboutImgCart from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="section">
    <div className="container">
        <div className="flex justify-between items-center gap-12 lg:gap-20 xl:gap-0 flex-col lg:flex-row">

            {/* ============ About Image ============= */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" className="" />
                <div className="absolute z-20 bottom-4 w-48 md:w-80 right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutImgCart} alt="" />
                </div>
            </div>

            {/* ============ About Content ============= */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">Proud to be one of the nations best</h2>
                <p  className="text-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta sequi minus, fuga officiis sapiente eligendi, deleniti quas inventore quibusdam fugit laboriosam, perferendis doloremque tempore impedit eos tenetur. Delectus minus eius earum, repellendus beatae harum consequatur! Tempore harum voluptate magni. Fuga dicta at repellat? Esse repudiandae necessitatibus quod sint ab fugit placeat,
                </p>
                <p  className="text-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fuga quasi, et aspernatur distinctio dolorem corporis praesentium sunt vero sint natus suscipit deleniti dolore quis possimus laudantium consequatur fugiat dicta dolorum voluptate ipsam? Necessitatibus sit similique atque doloribus totam, officiis libero, eius, deserunt voluptate modi excepturi provident voluptatibus.
                </p>

                <Link to="/" ><button className="btn" >Learn More</button> </Link>

            </div>

        </div>
    </div>    
    </section>
  )
}

export default About