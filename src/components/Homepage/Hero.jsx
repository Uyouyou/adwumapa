import React from 'react';
import Ellipse439 from '../../assets/Ellipse 439.png';
import Ellipse438 from '../../assets/Ellipse 438.png';
import Stars from '../../assets/stars.png';
import Ellipse441 from '../../assets/Ellipse 441.png';
import Ellipse440 from '../../assets/Ellipse 440.png';
const Hero = () => {
  return (
   <section className='w-full h-[600px] bg-[#ffffff] flex flex-col lg:flex-row lg:justify-between items-center'>
    {/*Left div*/}
    <div className='flex flex-col items-center ml-0 lg:ml-[11rem] gap-1 lg:gap-8'>
      <div className=' mt-[5rem] lg:mt-[-5rem]'>
      <img className='w-[50px] h-[50px] lg:w-[73px] lg:h-[73px]' src={Ellipse439} alt="image" />
      </div>
     
      <div className='flex items-center justify-center ml-[-12rem] lg:ml-[-14rem] mt-[2rem]'>
       <span className='block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg'></span>
     </div>
 
     <div className='flex items-center justify-center mr-[-9rem] mt-[4rem] lg:mt-[3rem]'>
       <span className='block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg'></span>
     </div>


      <div className='mt-[-2.5rem]'>
      <img className='w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]' src={Ellipse438} alt="img" />
      </div>
    </div>

     {/*Middle div*/}
     <div className='w-[544px] h-[304px] gap-6 flex flex-col items-center mt-[5rem] lg:mt-[-9rem]'>
      <div className='w-[447px] h-[24px] gap-0 lg:gap-3 flex justify-between items-center'>
        <img className='w-[100px] h-[16px] lg:w-[116px] lg:h-[20px]' src={Stars} alt="stars rating" />
        <p className='font-montserrat text-[#000000] font-medium text-[15px] lg:text-base leading-6 text-center text-nowrap'>Used by 1,000 + tech talents and clients</p>
      </div>

      <h1 className='font-montserrat text-[#000000] font-bold text-[40px] lg:text-[54px] leading-[64px] text-center'>Bringing  <span className='font-montserrat text-[#2f66f6] font-bold text-[40px] lg:text-[54px] leading-[64px] text-center'>Great <br /> Work </span>to You</h1>

      <p className='font-montserrat font-normal text-[14px] lg:text-[18px] leading-6 text-center text-[#0a0f29]'>Find top African tech talents, hire anonymously, and pay <br /> securely in crypto.</p>

      <div className='w-[368px] h-[48px] gap-6 flex justify-between items-center'>
        <a  className="w-[180px] h-[43px] lg:w-[193px] lg:h-[48px] px-6 py-3 gap-2 rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center" href="#">Sign Up as Talent</a>
        <a  className="w-[160px] h-[43px] lg:w-[151px] lg:h-[48px] px-6 py-3 gap-2 rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#696F8C] border border-solid border-[#D7D9E4] font-montserrat text-[14px] lg:text-base font-medium text-center leading-6 text-nowrap text-[#ffffff]" href="#">Hire a Talent</a>
      </div>
     </div>

      {/*Right div*/}
      <div className='flex flex-col items-center mr-0 lg:mr-[11rem] gap-1 lg:gap-8 mt-[4rem] lg:mt-0'>
        <div className='mt-[2rem] lg:mt-[-2rem] mr-0 lg:mr-[5rem]'>
        <img className='w-[50px] h-[50px] lg:w-[59px] lg:h-[59px]' src={Ellipse441} alt="image" />
        </div>
       
        
      <div className='flex items-center justify-center mr-[-12rem] lg:mr-[-14rem] mt-[2rem]'>
       <span className='block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg'></span>
     </div>
 
     <div className='flex items-center justify-center ml-[-9rem] mt-[4rem] lg:mt-[3rem]'>
       <span className='block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg'></span>
     </div>


        <div className='mt-[-2.5rem]'>
        <img className='w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]' src={Ellipse440} alt="image" />
        </div>
      </div>
   </section>
  )
}

export default Hero