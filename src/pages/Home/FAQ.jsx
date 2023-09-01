import React, {useEffect, useState} from 'react'
import img from '../../assets/images/faq-img.png'
import faqData from '../../assets/data/faqData'
import { BiMinus, BiPlus } from 'react-icons/bi'

    const initialState = [
        {
            id: "",
            question: "",
            answer: "",

        }
    ]

const FAQ = () => {

    const [items, setItems] = useState(initialState)

    useEffect(()=>{
        if (faqData) {
            setItems(faqData)
        }
    },[])

    const handleOpenAnswer = (id, isSelect)=> {
        const updateItem = items.map((item)=> {
            if(item.id === id){
                return {...item, isSelect: isSelect}
            }
            return  item
        })
        setItems(updateItem)
    }
    if(items){
        console.log(items)
    }
    return (
        <section className='section'>
            <div className="container">
                <div className="flex justify-between items-center gap-12 lg:gap-0">
                    <div className="w-1/2  hidden md:block">
                        <img src={img} alt="" className='w-3/4' />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold md:heading">Most question  by our beloved patient</h2>
                        <div className="mt-5">
                            {items && items.map((data, index) => <div key={index}
                                className=" border p-3 mb-3 pr-5">
                                <div
                                onClick={() => handleOpenAnswer(data.id, !data.isSelect)}
                                className="flex w-full justify-between items-center cursor-pointer">
                                    <p className='font-semibold'>{data.question}</p>
                                    <span 
                                        className="p-2 border rounded-md cursor-pointer">
                                        {
                                            !data.isSelect ? <BiPlus /> : <BiMinus />
                                        }
                                    </span>
                                </div>

                                {data.isSelect && <p className="text-textColor mt-3 text-justify"> {data.answer}</p>
                                }
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ