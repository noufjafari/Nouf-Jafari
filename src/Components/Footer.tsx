import linked from "../assets/Ellipse 1.png"
import github from "../assets/Ellipse 2.png"
import phone from "../assets/Ellipse 4.png"
import email from "../assets/Ellipse 3.png"
export default function Footer() {
  return (
    <div>
        
        <footer className="bg-[#D9D9D9] flex flex-col justify-center py-5 max-sm:py-3 ">
            <div className="bg-[#D9D9D9] p-4 max-sm:p-1 max-sm:text-[0.50rem] text-center text-base uppercase"> Contact me</div>
                <div className="flex justify-center flex-row bg-[#D9D9D9] gap-3">

                <a href="https://github.com/noufjafari" className="bg-[#D9D9D9] w-10 max-sm:w-5 hover:scale-75"><img className="bg-[#D9D9D9] w-20" src={github} alt="github" /></a> 
                <a href="https://www.linkedin.com/in/nouf-jafari/" className="bg-[#D9D9D9] w-10 max-sm:w-5 hover:scale-75"><img className="bg-[#D9D9D9] w-20" src={linked} alt="linkedin" /></a> 
                <a href="mailto:wisewallet81@gmail.com" className="bg-[#D9D9D9] w-10 max-sm:w-5 hover:scale-75"><img className="bg-[#D9D9D9] w-20" src={email} alt="email" /></a> 
                <a href="tel:+996508501151" className="bg-[#D9D9D9] w-10 max-sm:w-5 hover:scale-75" ><img className="bg-[#D9D9D9] w-20" src={phone} alt="phone" /></a> 

                </div>
        </footer> 

    </div>
  )
}
