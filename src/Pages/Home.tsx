import Nav from '../Components/Nav';
import Footer from "../Components/Footer";
import shape1 from "../assets/image 2.png";
import shape2 from "../assets/image 3.png";
import shape3 from "../assets/image 1.png";
import shape4 from "../assets/image 4 (1).png";
export default function Home() {
  return (
    <>
      <Nav/>
      <div className="absolute top-0"><img src={shape1} alt="shape1" className='w-60 max-sm:w-20' /></div>
      <div className="flex h-fit w-full flex-col mt-20 max-sm:mt-5">
        <div className="flex justify-center items-center w-full">
      <div className="h-[15rem] max-sm:h-[7.5rem] border-black border-2 w-[50rem] max-sm:w-[15rem] max-sm:mt-1 mt-20 gap-4 justify-center flex flex-col items-center">
        <h3 className='text-4xl max-sm:text-base uppercase'>Front-end developer</h3>
        <h1 className='text-8xl max-sm:text-2xl font-bold uppercase'>Nouf Jafari</h1>
      </div></div>
      

      <div className="relative">
      <div className=" flex flex-row-reverse w-full mt-10 max-sm:mt-5"><img src={shape2} alt="shape2" className='w-60 max-sm:w-20' />
    </div>
    <hr className='border-[11px] max-sm:border-[5px] relative top-[-2rem] max-sm:top-[-1rem] bottom-0'/>
    <div className=" flex flex-row-reverse w-full mt-0 relative max-sm:top-[-1rem] top-[-2rem]"><img src={shape3} alt="shape3" className='w-[14.1rem] max-sm:w-[4.6rem]' />    </div>
     </div>


      <div className=" items-center justify-center flex-col gap-32 flex w-full mb-20 max-sm:mb-5 max-sm:gap-14">
      <div className="justify-center flex gap-20  max-sm:gap-7">
      <h1 className='text-4xl uppercase mt-8 font-bold max-sm:text-sm '>Overview</h1>
      <div className="flex-col flex border-r-2 border-black"></div>
          <h3 className='w-[35rem] text-xl max-sm:text-xs max-sm:w-[11rem]'>Fresh graduate in Software Engineering with a Bachelor's degree -College of Computer Science and Engineering at the University of Jeddah. Passionate about technology, interested in UI /UX.</h3>
      </div>


      <div className="justify-center flex gap-20  max-sm:gap-7">
      <h3 className='w-[35rem] text-xl max-sm:text-xs max-sm:w-[11rem]'>After completing a motivating educational journey, I'm looking forward to building my career as a front-end developer and searching for a well-established organization where I can get the opportunity to improve my abilities, learn, and develop my knowledge.</h3>
      <div className="flex-col flex border-r-2 border-black"></div>
      <h1 className='text-4xl uppercase mt-8 font-bold max-sm:text-sm'>goals</h1>
      </div>
      </div>


      <div className="relative h-fit">
      <div className=" w-full mt-10 relative top-[-2rem]"><img src={shape4} alt="shape4" className='w-[14.1rem] max-sm:w-[4.6rem]' /></div>
    <hr className='border-[11px]  max-sm:border-[5px] relative top-[-2rem] bottom-0'/>

     </div>


      <div className="items-center justify-center gap-28 w-full max-sm:gap-14 max-sm:mb-6 flex mb-12">
      <h1 className='text-5xl uppercase mt-8 font-bold mb-3 max-sm:text-base max-sm:mt-0'>MY CV</h1>
      <a href="https://drive.google.com/file/d/1twSvmZHOG09qAwLaOhB6dc286KYpsi43/view"><button className='w-1/8 px-10 py-2 mt-5 text-lg max-sm:text-xs max-sm:mt-0 max-sm:w-24 max-sm:px-2 max-sm:py-1 max-sm:mb-2 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>View CV</button></a>
      </div>
      </div>


      <Footer/>

    </>
  )
}
