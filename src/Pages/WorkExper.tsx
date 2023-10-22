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
      <div className="absolute top-0"><img src={shape1} alt="shape1" className='w-60 max-sm:w-20' /></div>

      <div className="flex w-full flex-col mb-20 max-sm:mb-16 justify-center items-center">
      <h1 className='text-4xl font-bold uppercase my-20 mb-40 max-sm:text-base max-sm:mb-10 max-sm:my-5'>Work Experience</h1>
        <div className="flex justify-center w-full gap-10 max-sm:flex-col max-sm:gap-0 max-sm:items-center">
          <div className="w-fit h-[17rem] max-sm:mb-1 flex justify-start items-start mb-40 max-sm:h-[6rem]">
          <img className='w-[16rem] h-[16rem] max-sm:w-[4rem] max-sm:h-[4rem] max-sm:left-6 max-sm:top-5 top-10 relative left-40' src={image1} alt="" />
          <img className='w-[16rem] h-[16rem] max-sm:w-[4rem] max-sm:h-[4rem] max-sm:top-1 max-sm:right-4 top-1 relative' src={image2} alt="" />
          </div>
          <div className="items-start justify-start ml-24 flex-col gap-7 max-sm:gap-4 max-sm:ml-0 max-sm:w-[65%] flex w-1/2 my-10 text-left">
           <div className=" w-[25rem] max-sm:w-[5rem] "><p className='text-2xl max-sm:text-sm font-semibold w-[39rem] max-sm:w-[10rem]'>COOP trainee</p>

          </div>
          <h3 className='w-[28rem] max-sm:w-[5rem] text-base max-sm:text-[0.53rem] '>Jun 2022 – Aug 2022 </h3>
          <h3 className='w-[38rem] text-lg max-sm:text-[0.65rem] max-sm:w-[16rem]'>Trained at King Saud bin Abdulaziz University for Health Sciences in the Information Technology Department, I had the opportunity to immerse myself in various facets of their department, including Application, Network, System, and User support, and was succeeded in developing a website capable of converting the paper form into electronic forms.</h3>
          <a href="https://media.licdn.com/dms/image/D4E2DAQEUUc7n5f7NHQ/profile-treasury-document-cover-images_480/0/1697933891399?e=1698548400&v=beta&t=u_4p_4pw3FGsHtK3-R4acTh5Cs0qvFhkKoOJLIiT_GE"><button className='w-1/8 px-10 py-2 mt-5 text-lg  max-sm:text-[0.55rem] max-sm:w-28  max-sm:px-2 max-sm:py-1 max-sm:ml-16 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>View certificate</button></a>
          </div>
        </div>
      </div>


      <div className="relative">
    <hr className='border-[11px] max-sm:border-[5px] relative top-[-1.7rem] bottom-0'/>
    <div className="relative top-[-1.7rem] w-1/4 "><img src={shape1} alt="shape1" className='w-60 max-sm:w-20' /></div>
     </div>


        <div className="flex justify-center mb-20 w-full gap-52 max-sm:flex-col-reverse max-sm:mb-5 max-sm:gap-0 max-sm:items-center">
        <div className=" items-start justify-start flex-col gap-7 max-sm:gap-4 max-sm:ml-0 max-sm:w-[65%] flex w-1/4 mb-10 text-left">
           <div className=" w-[25rem] max-sm:w-[5rem] "><p className='text-2xl max-sm:text-sm max-sm:w-[16rem] font-semibold w-[39rem] '>JavaScript Bootcamp for web development trainee</p>
          </div>
          <h3 className='w-[24.8rem] max-sm:w-[5rem] text-base max-sm:text-[0.53rem]'> Jul 2023 – Sep 2023 </h3>
          <h3 className='w-[38rem] text-lg max-sm:text-[0.65rem] max-sm:w-[16.3rem]'>Trained at Tuwaiq Academy it was an intensive training for website development in HTML, CSS, and Bootstrap to enhance the visual creativity of websites. Additionally, I gained knowledge in the React framework with TypeScript, enabling me to effectively work with APIs and handle CRUD operations. Throughout the program I consistently engaged in lab assignments and projects and developed a final project that was a required component of the boot camp.</h3>
          <a href="https://media.licdn.com/dms/image/D4E2DAQF9Vg_M_FHBPg/profile-treasury-document-cover-images_480/0/1697940089568?e=1698548400&v=beta&t=KVF0_9NB72_Y7a7XQuA69PAQoF81JfQ98nk8aq3gvGM"><button className='w-1/8 px-10 py-2 mt-5 text-lg  max-sm:text-[0.55rem] max-sm:w-28  max-sm:px-2 max-sm:py-1 max-sm:ml-16 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>View certificate</button></a>
          </div>
          <div className="w-fit h-[17rem] flex justify-start items-start mb-20 max-sm:mb-14 max-sm:h-[6rem]">
          <img className='w-[16rem] h-[16rem] top-10 max-sm:w-[4rem] max-sm:h-[4rem] max-sm:left-6 max-sm:top-5 relative left-40' src={image1} alt="" />

          <img className='w-[16rem] h-[16rem] top-1 max-sm:w-[4rem] max-sm:h-[4rem] max-sm:top-1 max-sm:right-4 relative ' src={image3} alt="" />
          </div>
        </div>

      <Footer/>
    </div>


  )
}
