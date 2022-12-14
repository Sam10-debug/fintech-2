import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MobileNav = ({HideMobileNav}) => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<div className=" flex  flex-col justify-center bg-black md:hidden items-center w-screen absolute  z-50 left-0 top-0 h-screen" data-aos="fade-left">
			<svg onClick={HideMobileNav} style={{
				fill:"#fff"
			}} className="absolute top-[5%] right-[2%]" width="40px" height="40px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
				<ul className="text-4xl leading-[200%] justify-center items-center text-white">
					<li className='mx-auto'><a href="#">Pricing</a></li>
					<li className='mx-auto'><a href="#">Resources</a></li>
					<li className='mx-auto'><a href="#">Payments</a></li>
					<li className='mx-auto'><a href="#">Integrations</a></li>
				</ul>
				<div className="flex my-2">
					<button className="btn px-2 h-[50px] mx-4 font-semibold text-white bg-yellow-400">Sign in</button>
					<button className="btn px-2 h-[50px] mx-4 font-semibold text-white bg-yellow-400">Sign up</button>
				
				</div>
				</div>
	 );
}
 
export default MobileNav;