import logo from "../assets/1683537852141 1 (1).png";
export default function Nav() {
  return (
    <div>
    <div className="w-full relative max-sm:w-fit max-sm:ml-[0.8rem]">
        <div className=" h-32 mx-auto px-5 max-w-9xl  flex items-center max-sm:ml-12 justify-end text-black uppercase ">
            <ul className="flex items-center gap-10 max-sm:gap-[0.55rem] text-xl">
                <li><a className="hover:text-white transition-colors max-sm:text-[0.50rem]" href="/">Home</a></li>
                <li ><a className="hover:text-white transition-colors max-sm:text-[0.50rem]" href="/Educations">Education</a></li>
                <li><a className="hover:text-white transition-colors max-sm:text-[0.45rem]" href="/Work-Exper">Work Experience </a></li>
                <li><a className="hover:text-white transition-colors max-sm:text-[0.50rem]" href="/Projects">Projects</a></li>
            </ul>

            <a className="hover:text-white transition-colors max-sm:ml-1 ml-[20rem]"><img src={logo} className="w-[8rem] max-sm:w-[4rem]" alt='logo' /></a>

        </div>
    </div>

    </div>
  )
}
