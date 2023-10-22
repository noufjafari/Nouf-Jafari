import Nav from '../Components/Nav';
import Footer from "../Components/Footer";
import wise from "../assets/Rectangle 6.png"
import twt from "../assets/Rectangle 7.png"
import course from "../assets/Rectangle 8.png"
import game from "../assets/Rectangle 9.png"
import disn from "../assets/Rectangle 10.png"
import harry from "../assets/Rectangle 11.png"
import lib from "../assets/Rectangle 12.png"
import tuq from "../assets/Rectangle 16.png"
import todo from "../assets/Rectangle 18 (1).png"
import weath from "../assets/Rectangle 19.png"
import cal from "../assets/Rectangle 20.png"
import tuq2 from "../assets/Rectangle 21.png"

import shape7 from "../assets/Group 17.png"
import shape8 from "../assets/Group 18.png"

export default function Projects() {
  return (
    <div>
                  <Nav/>
                  <div className="flex w-full flex-col mb-20 justify-center max-sm:mb-9 items-center">
                  <h1 className='text-4xl font-bold uppercase my-20 mb-20 max-sm:text-base max-sm:mb-12 max-sm:my-5'>Projects</h1>
                  </div>

<div className="w-full">
              <div className=" flex ">
                  <div className="">
                    <img src={shape7} className="w-80 max-sm:w-28 max-sm:mt-60" alt="" />
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:ml-5 gap-10 ml-24 uppercase ">
                  <div className="flex flex-col text-center gap-10">
                      <a href="/Project/1"><img src={wise} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                      <p className='max-sm:text-[0.55rem] '>Wise Wallet</p>
                      </div>

                      <div className="flex flex-col text-center gap-10">
                      <a href="/Project/2"><img src={twt} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                      <p className='max-sm:text-[0.55rem]'>Twitter pro</p>
                      </div>

                      <div className="flex flex-col text-center gap-10">
                      <a href="/Project/3"><img src={course} className="w-80 max-sm:w-28 shadow-xl hover:scale-110"alt="" /></a>
                      <p className='max-sm:text-[0.55rem] '>Course Track</p>
                      </div>

                      <div className="flex flex-col text-center gap-10">
                      <a href="/Project/4"><img src={game} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                      <p className='max-sm:text-[0.55rem] '>Save The Girl - game</p>
                      </div>
                  </div>
                  </div>


                <div className="flex flex-row-reverse my-10">

                  <div className="">
                  <img src={shape8} className="w-80 max-sm:w-28 max-sm:mt-60" alt="" />
                    </div>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 mr-[6.5rem] max-sm:mr-7 uppercase">

                    <div className="flex flex-col text-center gap-10">
                        <a href="/Project/5"><img src={disn} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                        <p className='max-sm:text-[0.55rem] max-sm:w-28 '>Disneyland world</p>
                        </div>

                        <div className="flex flex-col text-center gap-10">
                        <a href="/Project/6"><img src={harry} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                        <p className='max-sm:text-[0.55rem] max-sm:w-28 '>Harry world</p>
                        </div>

                        <div className="flex flex-col text-center gap-10">
                        <a href="/Project/7"><img src={lib} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                        <p className='max-sm:text-[0.55rem] max-sm:w-28 '>Library</p>
                        </div>

                        <div className="flex flex-col text-center gap-10">

                        <a href="/Project/8"><img src={tuq} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                        <p className='max-sm:text-[0.55rem] max-sm:w-28 '>Tuwaiq Academy - React</p>
                        </div>
                    </div>
                    </div>


                <div className="flex mt-10">

                    <div className="">
                    <img src={shape7} className="w-80 max-sm:w-28 max-sm:mt-60" alt="" />
                    </div>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 ml-24 max-sm:ml-5 uppercase">

                    <div className="flex flex-col text-center gap-10">
                        <a href="/Project/9"><img src={todo} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                        <p className='max-sm:text-[0.55rem] max-sm:w-28 '>To do list</p>
                        </div>

                        <div className="flex flex-col text-center gap-10">
                        <a href="/Project/10"><img src={weath} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                        <p className='max-sm:text-[0.55rem] max-sm:w-28 '>Weather API app</p>
                        </div>

                    <div className="flex flex-col text-center gap-10">
                        <a href="/Project/11"><img src={cal} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                        <p className='max-sm:text-[0.55rem] max-sm:w-28 '>Calculator website</p>
                      </div>
                        
                        <div className="flex flex-col text-center gap-10">
                          <a href="/Project/12"><img src={tuq2} className="w-80 max-sm:w-28 shadow-xl hover:scale-110" alt="" /></a>
                          <p className='max-sm:text-[0.55rem] max-sm:w-28 '>Tuwaiq Academy</p>
                        </div>


                        </div>
                        </div>

                        </div>
                  <div className="mt-20">
                    <Footer/>
                  </div>
    </div>
  )
}
