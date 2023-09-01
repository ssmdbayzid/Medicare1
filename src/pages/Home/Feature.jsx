import React from 'react'
import { Link } from 'react-router-dom'
import featureImage from '../../assets/images/feature-img.png'
import videoIcon from '../../assets/images/video-icon.png'
import avatar from '../../assets/images/avatar-icon.png'


const Feature = () => {
  return (
    <section className="">
        <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">

        {/* ========================= Feature Section Start ==================== */}

        <div className="lg:w-[670px]">

        {/* ========================= Feature Content ==================== */}

            <h2 className="text-4xl font-[700] md:heading">
                Get virtual treatment <br /> anytime.
            </h2>
            <ul className="pl-4">
                <li className="text-para">
                 1. Schedule the appointment directly.
                </li>
                <li className="text-para">
                 2. Search for your physician here. and contact their office.
                </li>
                <li className="text-para">
                 3. View your physicians who are accepting new patients. use the online Scheduling tool to select an appointment time.
                </li>
            </ul>

            <Link to="/"><button className="btn">Learn  More</button> </Link>
        </div>

        {/* ========================= Feature Image ==================== */}
        <div className="relative z-10 xl:w-90 flex justify-end mt-20 lg:mt-0">
            <img src={featureImage} className="w-3/4" alt="" />
       
        <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-12 left-0 md:bottom-18 md:left-2 z-20 p-2 pb-3 lg:pt-4 lg:pb-6 rounded-lg ">
            <div className="flex justify-between items-center ">
                <p className="text-[10px]"><span className="font-bold">Tue 24</span> &nbsp; 10.00 AM </p>
                <div className="w-8 h-8 bg-secondaryColor rounded-lg flex items-center justify-center">
                <img src={videoIcon} alt="" />
                </div>
            </div>
            <span className=" text-[10px] inline-block px-3 py-1 my-2 font-bold bg-primaryColor/10 text-primaryColor rounded-full">Consultent</span>

            <div className="flex items-center ">
                <img src={avatar} alt="" />
                <span className="text-[12px] ml-2">Wayne Colline</span>
            </div>
        </div>
       
       
        </div>

        </div>
        </div>    
    </section>
  )
}

export default Feature