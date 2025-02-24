import React from 'react'


const Car = [
    {src:"/svg/car/Car1.svg",title:"اسپرت"},
    {src:"/svg/car/Car2.svg",title:"شاسی بلند"},
    {src:"/svg/car/Car3.svg",title:"کروک"},
    {src:"/svg/car/Car4.svg",title:"سدان"},
    {src:"/svg/car/Car5.svg",title:"کوپه"},
]



export const CarServices = () => {
  return (
    <div className='flex justify-center mt-10 gap-14'>
        {Car.map((item,index)=>(
            <div key={index} className=' border-2 rounded-t-3xl '>
                <div className='font-extrabold text-2xl text-center mt-5'>
                    {item.title}
                </div>
                <div >
                    <img src={item.src} className='w-full h-full' />
                </div>
                <div className='border-t-8 rounded-t-full mx-5 border-yellow-500'></div>
            </div>
        ))}
    </div>
  )
}
