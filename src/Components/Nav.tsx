import logo from "../assets/1683537852141 1 (1).png";
export default function Nav() {
  return (
    <div>
    <div className="w-full relative">
        <div className=" h-32 mx-auto px-5 max-w-9xl flex items-center justify-end text-black uppercase ">
            <ul className="flex items-center gap-10 max-sm:gap-2 text-xl">
                <li><a className="hover:text-white transition-colors max-sm:text-xs" href="/">Home</a></li>
                <li><a className="hover:text-white transition-colors max-sm:text-xs" href="/Educations">Education</a></li>
                <li><a className="hover:text-white transition-colors max-sm:text-xs" href="/Work-Exper">Work Experience </a></li>
                <li><a className="hover:text-white transition-colors max-sm:text-xs" href="/Projects">Projects</a></li>
            </ul>

            <a className="hover:text-white transition-colors max-sm:text-xs ml-[20rem]"><img src={logo} className="w-[8rem]" alt='logo' /></a>

        </div>
    </div>

    </div>
  )
}
