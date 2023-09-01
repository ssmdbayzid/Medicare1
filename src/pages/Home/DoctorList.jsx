import React from 'react'
import doctorsData from '../../assets/data/doctorsData'
import star from '../../assets/images/Star.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const DoctorList = () => {
  return (
    <section>
        <div className="container">
            {/* ====================== Section Heading ================== */}
            <div className="w-full xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Our great doctors</h2>
                <p className="text-para text-center">
                World class care for everyone. Our health offers unmatched. export health care
                </p>
            </div>

            {/* ====================== Doctor List ================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 lg:mt-14">
            {
                doctorsData && doctorsData.map((data, index)=>
                <div key={index} className="mx-auto p-3 lg:p-5">
                    <div className="">
                        <img src={data.photo} alt="" className="w-full" />
                    </div>
                    <h2 className="text-[20px] md:text-[26px] leading-[30px] lg:leading-9 text-textColor font-[800] lg:font-[700] mt-2 lg:mt-3">{data.name}</h2>
                    <div className="flex justify-between items-center mt-3 lg:mt-5">
                        <p className="text-irisBlueColor bg-[#CCF0F3] px-5 py-1.5 rounded font-[700]">{data.specialization}</p>

                        <div className="flex items-center gap-2 lg:gap-3">
                            <img src={star} alt="" srcset="" />
                            <span>{data.avgRating}</span>
                            <span className="text-textColor">({data.totalRating})</span>
                        </div>          
                    </div>
                    <div className="flex justify-between items-center mt-3 lg:mt-5">
                           <div>
                            <p className="text-lg font-semibold">1500 patient</p>
                            <p className='text-sm'>At {data.hospital}</p>
                           </div>

                           <Link to={`/doctors/${data.id}`} className="flex items-center justify-center h-8 w-8 border rounded-full hover:bg-primaryColor hover:text-white"> 
                            <BsArrowRight />
                            </Link>

                        </div>
                </div> 
                )}
        </div>
        </div>
    </section>
  )
}

export default DoctorList