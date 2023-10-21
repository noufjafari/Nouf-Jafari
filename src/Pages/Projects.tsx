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
                  <div className="flex w-full flex-col mb-20 justify-center items-center">
                  <h1 className='text-4xl font-bold uppercase my-20 mb-40'>Projects</h1>
                  </div>


              <div className="">
                  <div className="">
                    <img src={shape7} className="" alt="" />
                  </div>
                  <div className="grid grid-cols-2 justify-center w[60%]">
                      <a href="/Project/1"><img src={wise} alt="" /></a>
                      <p></p>
                      <a href="/Project/2"><img src={twt} alt="" /></a>
                      <p></p>


                      <a href="/Project/3"><img src={course} alt="" /></a>
                      <p></p>

                      <a href="/Project/4"><img src={game} alt="" /></a>
                      <p></p>

                  </div>
                  </div>


                <div className="">

                  <div className="">
                  <img src={shape8} className="" alt="" />
                    </div>
                    <div className="grid grid-cols-2 justify-center">
                        <a href="/Project/5"><img src={disn} alt="" /></a>
                        <p></p>

                        <a href="/Project/6"><img src={harry} alt="" /></a>
                        <p></p>



                        <a href="/Project/7"><img src={lib} alt="" /></a>
                        <p></p>

                        <a href="/Project/8"><img src={tuq} alt="" /></a>
                        <p></p>

                    </div>
                    </div>


                <div className="">

                    <div className="">
                    <img src={shape7} className="" alt="" />
                    </div>
                    <div className="grid grid-cols-2 justify-center">
                        <a href="/Project/9"><img src={todo} alt="" /></a>
                        <p></p>

                        <a href="/Project/10"><img src={weath} alt="" /></a>
                        <p></p>



                        <a href="/Project/11"><img src={cal} alt="" /></a>
                        <p></p>

                        <a href="/Project/12"><img src={tuq2} alt="" /></a>
                        <p></p>

                        </div>
                        </div>

                  <div className="mt-20">
                    <Footer/>
                  </div>
    </div>
  )
}
