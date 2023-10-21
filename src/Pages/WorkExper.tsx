import Nav from '../Components/Nav';
import Footer from "../Components/Footer";
import shape1 from "../assets/image 2.png";
import image1 from "../assets/Rectangle 24 (1).png";
import image2 from "../assets/Group 16.png";
import image3 from "../assets/Group 15.png";
export default function WorkExper() {
  return (
    <div>
            <Nav/>
      <div className="absolute top-0"><img src={shape1} alt="shape1" className='w-60' /></div>

      <div className="flex w-full flex-col mb-20 justify-center items-center">
      <h1 className='text-4xl font-bold uppercase my-20 mb-40'>Work Experience</h1>
        <div className="flex justify-center w-full">
          <div className="w-fit h-[17rem]  flex justify-start items-start mb-40">
          <img className='w-[16rem] h-[16rem] top-10 relative left-40' src={image1} alt="" />
          <img className='w-[16rem] h-[16rem] top-1 relative' src={image2} alt="" />
          </div>
          <div className="items-start justify-start ml-24 flex-col gap-7 flex w-1/2 my-10 text-left">
           <div className=" w-[25rem] "><h1 className='text-2xl font-semibold w-[39rem]'>King Saud bin Abdulaziz University for Health Sciences</h1>
          </div>
          <h3 className='w-[28rem] text-base'>Jun 2022 – Aug 2022 </h3>
          <h3 className='w-[38rem] text-lg'>Trained in IT department learn all about the department (Application, Network, System, and User support).</h3>
          <a href="https://drive.google.com/file/d/1zurSFPDzSrWIcywIZbMDcVfMx_2YAjOw/view"><button className='w-1/8 px-10 py-2 mt-5 text-lg max-sm:text-xs max-sm:w-28 max-sm:p-2 max-sm:ml-8 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>View certificate</button></a>
          </div>
        </div>
      </div>


      <div className="relative">
    <hr className='border-[11px] relative top-[-1.7rem] bottom-0'/>
    <div className="relative top-[-1.7rem] w-1/4 "><img src={shape1} alt="shape1" className='w-60' /></div>
     </div>


        <div className="flex justify-center mb-20 ">
        <div className=" items-start justify-start flex-col gap-7 flex w-1/4 mb-10 text-left">
           <div className=" w-[25rem] "><h1 className='text-2xl font-semibold w-[39rem]'>Tuwaiq Academy </h1>
          </div>
          <h3 className='w-[24.8rem] text-base'> Jul 2023 – Sep 2023 </h3>
          <h3 className='w-[25rem] text-lg'>Trained for web development using JavaScript and React TypeScript.</h3>
          {/* the link */}
          <a href=""><button className='w-1/8 px-10 py-2 mt-5 text-lg max-sm:text-xs max-sm:w-28 max-sm:p-2 max-sm:ml-8 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>View certificate</button></a>
          </div>
          <div className="w-fit h-[17rem]  flex justify-start items-start mb-20">
          <img className='w-[16rem] h-[16rem] top-10 relative left-40' src={image1} alt="" />

          <img className='w-[16rem] h-[16rem] top-1 relative ' src={image3} alt="" />
          </div>
        </div>

      <Footer/>
    </div>


  )
}
