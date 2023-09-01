import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

import icon1 from '../../assets/images/icon01.png'
import icon2 from '../../assets/images/icon02.png'
import icon3 from '../../assets/images/icon03.png'


const WorksSection = () => {
  return (
    <>
    <section className="section">
        <div className="container">
            <div className="lg:w-[470px] mx-auto">
                <h2 className="text-center heading">
                    Providing the best medical services
                </h2>
                <p className="text-para text-center">
                    World class care for everyone. Our health sustem offers unmatched, export health care.
                </p>
            </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
           {/* =================== 1st Items ==================== */}
            <div className="py-12 px-5">
                <div className="flex items-center justify-center">
                    <img src={icon1} alt="" className="flex items-center justify-center" />
                </div>
                <div className="mt-10 text-center">
                    <h1 className="text-4xl text-center font-bold">Find a Doctor</h1>
                    <p className="text-para">
                        World class  care for everyone Our health System  offers unmatched export health  care from the lab to the clinic.
                    </p>
                    <Link  to="/doctors" className="group hover:bg-primaryColor hover:text-white border-primaryColor border h-12 w-12 rounded-full flex items-center justify-center mx-auto mt-8">
                        <BsArrowRight className=" font-bold text-xl text-primaryColor group-hover:text-white"/>
                    </Link>
                </div>
            </div>
           {/* =================== 2nd Items ==================== */}
            <div className="py-12 px-5">
                <div className="flex items-center justify-center">
                    <img src={icon2} alt="" className="flex items-center justify-center" />
                </div>
                <div className="mt-10 text-center">
                    <h1 className="text-4xl text-center font-bold">Find a Location</h1>
                    <p className="text-para">
                        World class  care for everyone Our health System  offers unmatched export health  care from the lab to the clinic.
                    </p>
                    <Link  to="/doctors" className="group hover:bg-primaryColor hover:text-white border-primaryColor border h-12 w-12 rounded-full flex items-center justify-center mx-auto mt-8">
                        <BsArrowRight className=" font-bold text-xl text-primaryColor group-hover:text-white"/>
                    </Link>
                </div>
            </div>
           {/* =================== 3rd Items ==================== */}
            <div className="py-12 px-5">
                <div className="flex items-center justify-center">
                    <img src={icon3} alt="" className="flex items-center justify-center" />
                </div>
                <div className="mt-10 text-center">
                    <h1 className="text-4xl text-center font-bold">Book Appointment</h1>
                    <p className="text-para">
                        World class  care for everyone Our health System  offers unmatched export health  care from the lab to the clinic.
                    </p>
                    <Link  to="/doctors" className="group hover:bg-primaryColor hover:text-white border-primaryColor border h-12 w-12 rounded-full flex items-center justify-center mx-auto mt-8">
                        <BsArrowRight className=" font-bold text-xl text-primaryColor group-hover:text-white"/>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>)
}

export default WorksSection