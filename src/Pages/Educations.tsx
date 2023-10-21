import Nav from '../Components/Nav';
import Footer from "../Components/Footer";
import shape5 from "../assets/image 5 (1).png";
import shape3 from "../assets/image 1 (1).png";
import shape4 from "../assets/image 4 (3).png";

export default function Educations() {
  return (
    <>
            <Nav/>
            <div className="absolute top-0"><img src={shape5} alt="shape1" className='w-60' /></div>
            <div className="flex w-full flex-col mt-20 justify-center items-center">
            <h1 className='text-4xl font-bold uppercase my-5 mb-16'>Education</h1>
            <div className=" items-center justify-center flex-col gap-7 flex w-full my-10 text-left">
           <div className=" w-[45rem]"><h1 className='text-lg font-semibold w-54'>Bachelor’s Degree | Mar 2023 </h1>
          </div>

          <h3 className='w-[48rem] ml-12 text-base'>Bachelor's degree in Software Engineering - College of Computer Science and Engineering at University of Jeddah.</h3>
          </div>
          <a href="https://media.licdn.com/dms/image/D4D2DAQGebqeYYum6nA/profile-treasury-image-shrink_800_800/0/1683545011616?e=1698076800&v=beta&t=w5XkeU8JZHtu22ZgCqG77gm9mavS_SzqoZlBZGXtFho"><button className='w-1/8 px-10 py-2 my-5 text-lg max-sm:text-xs max-sm:w-28 
          max-sm:p-2 max-sm:ml-8 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white 
          focus:outline-none uppercase '>View certificate</button></a>
            </div>

            <div className="relative h-40 flex">
      <div className=" flex flex-row w-1/4 relative top-[-2.1rem] "><img src={shape4} alt="shape2" className='w-[12.1rem] h-[12.1rem]' />
    </div>
    <div className=" flex flex-row-reverse w-1/4 ml-[69rem] relative top-[-5rem]"><img src={shape3} alt="shape3" className='w-[14.1rem]  h-[17.1rem]' />    </div>
     </div>
     <div className="relative">
      <Footer/></div>

    </>
  )
}