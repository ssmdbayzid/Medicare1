import React from 'react'
import serviceData from '../../assets/data/data'

import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Service = () => {

  
  return (
    <section className="section">
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Our Medical Services</h2>
                <p className="text-para text-center">
                    World class care for everyone. Our health offers unmatched. export health care
                </p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8 lg:mt-14">
            {serviceData && serviceData.map((data, index)=> 
              <div key={index} className="p-3">
                <h2 className="text-3xl font-semibold">{data.name}</h2>
                <p className="text-para">{data.description}</p>
                <div className="flex items-center justify-between mt-8">
                  <Link
                  to="/doctors"
                  className="flex justify-center items-center hover:text-white border border-primaryColor hover:bg-primaryColor w-8 h-8 rounded-full" >
                    <BsArrowRight />
                  </Link>

                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center text-xl font-bold`}
                    style={{
                      background: `${data.bgColor}`,
                      color: `${data.textColor}`,
                      
                    }}
                  >
                    <span> {index + 1} </span> 
                  </div>
                </div>
              </div>
            )}
        </div>
        </div>        
    </section>
  )
}

export default Service