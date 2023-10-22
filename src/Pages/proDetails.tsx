import Nav from '../Components/Nav';
import Footer from "../Components/Footer";
import shape1 from "../assets/image 2.png";
import shape2 from "../assets/image 3.png";
import shape3 from "../assets/image 1.png";
import { useParams } from "react-router-dom";
import video1 from "../assets/waie.mp4"
import video2 from "../assets/twt.mp4"
import video3 from "../assets/coures.mp4"
import video4 from "../assets/game.mp4"
import video5 from "../assets/disn.mp4"
import video6 from "../assets/harry.mp4"
import video7 from "../assets/laib.mp4"
import video8 from "../assets/tuwag.mp4"
import video9 from "../assets/todo.mp4"
import video10 from "../assets/weath.mp4"
import video11 from "../assets/cal.mp4"
import video12 from "../assets/tuwag2.mp4"

export default function proDetails() {

    const params = useParams()
    
    let ProjectData = null;

        if (params.id == '1'){
            ProjectData={
                video: `${video1}`,
                title:'Wise Wallet',
                definition:'Wise Wallet is a website built using React and TypeScript technology that contains functions and designs to help people make smart financial decisions and manage their money effectively. It provides tips to help you save, manage your budget, and track your expenses. *Team work*',
                tools:  'React, typescript, tailwind',
                btn1: 'https://github.com/noufjafari/Wise-Wallet.git',
                btn2: 'https://www.figma.com/file/ymt6QdNOppp9OQHZTSIvxD/Wise-wallet?type=design&node-id=0%3A1&mode=design&t=MNjkW1k3aN8Wj15m-1',
                btn3: 'https://wise-wallet.netlify.app/',
            }
        }

        if (params.id == '2'){
            ProjectData={
                video: `${video2}`,
                title:'Twitter pro',
                definition:'Twitter pro is a website that looks and operates like the original twitter application. *Team work* ',
                tools:  'React, typescript, tailwind',
                btn1: 'https://github.com/noufjafari/Twitter-pro.git',
                btn2: 'https://www.figma.com/file/O825KrTrIxxLkk3CKNUDT9/Twitter-pro?type=design&node-id=0%3A1&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://twitter-pro-website.netlify.app/',
            }
        }

        if (params.id == '3'){
            ProjectData={
                video: `${video3}`,
                title:'Course Track ',
                definition:'Course Track is a dashboard website where students and teachers add a view their courses. *Team work* ',
                tools:  'React, typescript, tailwind',
                btn1: 'https://github.com/noufjafari/Course-Track.git',
                btn2: 'https://www.figma.com/file/JzzqQVgx2HLLQh2oeXKDDz/Course-Track?type=design&node-id=0%3A1&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://course-track.netlify.app/',
            }
        }

        if (params.id == '4'){
            ProjectData={
                video: `${video4}`,
                title:'Save The Girl - game ',
                definition:'It is a website game called Save The Girl the game is very simple the player must guess which door to open so the little girl can run and be safe. ',
                tools:  'HTML, JAVASCRIPT, css',
                btn1: 'https://github.com/noufjafari/SaveTheGirl-game.git ',
                btn2: 'https://www.figma.com/file/HA3wZAGrAcwveyOvFLf0b8/Savethegirl?type=design&node-id=0%3A1&mode=design&t=zBLFxPpnu8EPrrsP-1',
                btn3: 'https://noufjafari.github.io/SaveTheGirl-game/',
            }
        }
        if (params.id == '5'){
            ProjectData={
                video: `${video5}`,
                title:'Disneyland world',
                definition:'Disneyland World is a website for all fans of Disneyland, and it displays the features of Disneyland, its locations, and its parks. ',
                tools:  'React, typescript, tailwind',
                btn1: 'https://github.com/noufjafari/Disneyland.git',
                btn2: 'https://www.figma.com/file/c7C2bKV40CF8Rav0cYYMR3/Disneyland-world?type=design&node-id=1%3A2&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://disneyland-world.netlify.app/',
            }
        }

        if (params.id == '6'){
            ProjectData={
                video: `${video6}`,
                title:'Harry world',
                definition:'Harry World is a website for Harry Potter fans it has all of the books and movies of Harry Potter, and it shows all the cast in the movies ',
                tools:  'React, typescript, tailwind',
                btn1: 'https://github.com/noufjafari/Harry-website.git',
                btn2: 'https://www.figma.com/file/Jox5yj5y3pdyu1kjDCeZPE/Harry-world?type=design&node-id=1%3A2&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://harry-website.netlify.app/',
            }
        }
        if (params.id == '7'){
            ProjectData={
                video: `${video7}`,
                title:'Library',
                definition:'"Library" website is a digital library for readers that includes more than one book and a summary of each book. ',
                tools:  'React, typescript, tailwind',
                btn1: 'https://github.com/noufjafari/library.git ',
                btn2: 'https://www.figma.com/file/FqQZmeZICShtry8wInUztf/Library?type=design&node-id=0%3A1&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://the-library-website.netlify.app/',
            }
        }

        if (params.id == '8'){
            ProjectData={
                video: `${video8}`,
                title:'Tuwaiq Academy - React',
                definition:'Tuwaiq Academy website is website that looks like the original Tuwaiq Academy website. ',
                tools:  'React, typescript, tailwind',
                btn1: 'https://github.com/noufjafari/Tuwaiq-Academy-React.git',
                btn2: 'https://www.figma.com/file/wm0WADcZFDd4VzDXd2QRyt/Tuwaiq-Academy-React?type=design&node-id=1%3A2&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://tuwaiq-academy-react.netlify.app/',
            }
        }
        if (params.id == '9'){
            ProjectData={
                video: `${video9}`,
                title:'To do list ',
                definition:'It is a simple website where you can add your tasks to list. ',
                tools:  'HTML, JAVASCRIPT, css',
                btn1: 'https://github.com/noufjafari/ToDo-list.git',
                btn2: 'https://www.figma.com/file/hxR89twTW0bEZCAiS4vFB4/To-do-list?type=design&node-id=1%3A2&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://noufjafari.github.io/ToDo-list/',
            }
        }
        if (params.id == '10'){
            ProjectData={
                video: `${video10}`,
                title:'Weather API app ',
                definition:'“Weather API app” is simple a website that shows the weather in which city you may search for. ',
                tools:  'HTML, JAVASCRIPT, css',
                btn1: 'https://github.com/noufjafari/Weather-API-app.git',
                btn2: 'https://www.figma.com/file/veKplWiCezf5JcCLfGyygV/Weather-API-app?type=design&node-id=1%3A2&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: ' https://noufjafari.github.io/Weather-API-app/',
            }
        }
        if (params.id == '11'){
            ProjectData={
                video: `${video11}`,
                title:'Calculator website ',
                definition:'It is a simple calculator website that can Addition, subtraction, multiplication, and division operations. ',
                tools:  'HTML, JAVASCRIPT, css',
                btn1: 'https://github.com/noufjafari/Calculator-website.git/',
                btn2: 'https://www.figma.com/file/mHKcUvwgm1TDPsgH8dS40v/Calculator-website?type=design&node-id=1%3A2&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://noufjafari.github.io/Calculator-website/',
            }
        }
        if (params.id == '12'){
            ProjectData={
                video: `${video12}`,
                title:'Tuwaiq Academy ',
                definition:'“Tuwaiq Academy website” is website that looks like the original Tuwaiq Academy website. ',
                tools:  'HTML, CSS',
                btn1: 'https://github.com/noufjafari/Tuwaiq_Academy.git',
                btn2: 'https://www.figma.com/file/jQXxoQURUEQ98eW01DSkRo/Tuwaiq-Academy?type=design&node-id=1%3A2&mode=design&t=4Pe0OZCmuO2K67Gj-1',
                btn3: 'https://noufjafari.github.io/Tuwaiq_Academy/',
            }
        }

  return (
    <div>
        <Nav/>
      <div className="absolute top-0"><img src={shape1} alt="shape1" className='w-60 max-sm:w-20' /></div>
      {
    ProjectData != null ? 
    <>
        <div className="flex w-full flex-col mb-20  max-sm:mb-9  justify-center items-center">
            <h1 className='text-4xl font-bold uppercase mt-20 mb-10 max-sm:text-base max-sm:mt-2'>MY Projects</h1>
            <h1 className='text-xl uppercase mb-10  max-sm:mb-9 max-sm:text-xs '>{ProjectData.title}</h1>
            <video src={ProjectData.video} className='w-1/2 rounded-lg' autoPlay loop muted></video>
        </div>

        <div className="relative">
      <div className=" flex flex-row-reverse w-full"><img src={shape2} alt="shape2" className='w-60 max-sm:w-20' />
    </div>
    <hr className='border-[11px] relative top-[-2rem] max-sm:border-[5px] max-sm:top-[-12px] bottom-0'/>
    <div className=" flex flex-row-reverse w-full mt-0 relative top-[-2rem] max-sm:top-[-1rem]"><img src={shape3} alt="shape3" className='w-[14.1rem] max-sm:w-[4.6rem]' />    </div>
     </div>

     <div className="items-center justify-center ml-[14rem] flex-col gap-7 flex w-[70%] max-sm:ml-12 mb-10 max-sm:mb-4 text-left">
           <h1 className='text-2xl uppercase w-[38rem] max-sm:text-sm max-sm:w-[16rem]'>definition</h1>
          <h3 className='w-[38rem] text-base mb-20 max-sm:mb-7 max-sm:text-[0.60rem] max-sm:w-[16rem]'>{ProjectData.definition}</h3>

          <h1 className='text-2xl uppercase w-[38rem] max-sm:w-[16rem] max-sm:text-sm'>Tools</h1>
          <h3 className='w-[38rem] max-sm:w-[16rem] text-base max-sm:mb-3 mb-20 lowercase max-sm:text-[0.65rem]'>{ProjectData.tools}</h3>

            <div className="justify-center gap-7 flex w-[38rem] max-sm:w-[10rem] max-sm:gap-5 mb-20 max-sm:mb-7">
                <a href={ProjectData.btn1} ><button className='w-1/8 px-10 py-2 mt-5 text-lg max-sm:text-[0.55rem] max-sm:w-16 max-sm:px-2 max-sm:py-0  rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>github</button></a>
                <a href={ProjectData.btn2} ><button className='w-1/8 px-10 py-2 mt-5 text-lg  max-sm:text-[0.55rem] max-sm:w-16  max-sm:px-2 max-sm:py-0 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>Figma</button></a>
                <a href={ProjectData.btn3}><button className='w-1/8 px-10 py-2 mt-5 text-lg max-sm:text-[0.55rem] max-sm:w-16 max-sm:px-2 max-sm:py-0 rounded-full bg-[#D9D9D9] hover:bg-zinc-800 hover:text-white focus:outline-none uppercase'>website</button></a>
            </div>
          </div>

        </> 
    : ''
    
    }
      <Footer/>

    </div>
  )
}
        

