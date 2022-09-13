import img from '../images/image 2.png'
import next from '../images/akar-icons_arrow-right.png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="flex flex-col-reverse md:flex-row px-2 md:px-8" data-aos="zoom-in">
			<div className="flex-1  h-screen">
				<h1 className="text-center md:text-left text-4xl md:text-6xl leading-[120%] text-white font-bold md:w-4/5">Trade stocks,earn bonus shares.Enjoy.</h1>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<p className="text-2xl leading-[150%] text-center md:text-left my-4">Being in control of your funds is the same as owning life.We help you efficiently manage yor portfolio.</p>
					<img src={next} alt="" className="w-6 h-6" />
				</div>
					<div className="flex  w-full justify-center md:justify-start absolute bottom-[0%] md:bottom-[20%]">
					<svg className="mx-2" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_2_684)">
					<path d="M30.3733 27.5369L19.9 52.5236H13.0667L7.91333 32.5802C7.6 31.3536 7.33 30.9036 6.37667 30.3869C4.82333 29.5436 2.25667 28.7536 0 28.2602L0.153333 27.5369H11.1533C11.8722 27.5362 12.5676 27.7925 13.114 28.2595C13.6605 28.7265 14.022 29.3734 14.1333 30.0836L16.8567 44.5436L23.5833 27.5369H30.3733ZM57.15 44.3669C57.1767 37.7702 48.03 37.4069 48.0933 34.4602C48.1133 33.5636 48.9667 32.6102 50.8333 32.3669C53.021 32.1591 55.2241 32.5461 57.21 33.4869L58.3433 28.1869C56.4099 27.4601 54.3622 27.0842 52.2967 27.0769C45.9067 27.0769 41.41 30.4769 41.37 35.3402C41.33 38.9369 44.58 40.9402 47.03 42.1402C49.55 43.3636 50.3967 44.1502 50.3833 45.2436C50.3667 46.9236 48.3767 47.6602 46.5167 47.6902C43.2667 47.7402 41.3833 46.8136 39.8767 46.1136L38.7067 51.5869C40.2167 52.2802 43.0033 52.8869 45.8933 52.9136C52.6833 52.9136 57.1267 49.5602 57.15 44.3669ZM74.02 52.5236H80L74.7833 27.5369H69.2633C68.6735 27.5314 68.0957 27.7033 67.6048 28.0302C67.1138 28.3571 66.7324 28.824 66.51 29.3702L56.8133 52.5236H63.6L64.95 48.7902H73.2433L74.02 52.5236ZM66.81 43.6702L70.21 34.2869L72.17 43.6702H66.81ZM39.61 27.5369L34.2667 52.5236H27.8L33.15 27.5369H39.61Z" fill="#F5F5F5"/>
					</g>
					<defs>
					<clipPath id="clip0_2_684">
					<rect width="80" height="80" fill="white"/>
					</clipPath>
					</defs>
					</svg>

					<svg className="mx-2" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_2_684)">
					<path d="M30.3733 27.5369L19.9 52.5236H13.0667L7.91333 32.5802C7.6 31.3536 7.33 30.9036 6.37667 30.3869C4.82333 29.5436 2.25667 28.7536 0 28.2602L0.153333 27.5369H11.1533C11.8722 27.5362 12.5676 27.7925 13.114 28.2595C13.6605 28.7265 14.022 29.3734 14.1333 30.0836L16.8567 44.5436L23.5833 27.5369H30.3733ZM57.15 44.3669C57.1767 37.7702 48.03 37.4069 48.0933 34.4602C48.1133 33.5636 48.9667 32.6102 50.8333 32.3669C53.021 32.1591 55.2241 32.5461 57.21 33.4869L58.3433 28.1869C56.4099 27.4601 54.3622 27.0842 52.2967 27.0769C45.9067 27.0769 41.41 30.4769 41.37 35.3402C41.33 38.9369 44.58 40.9402 47.03 42.1402C49.55 43.3636 50.3967 44.1502 50.3833 45.2436C50.3667 46.9236 48.3767 47.6602 46.5167 47.6902C43.2667 47.7402 41.3833 46.8136 39.8767 46.1136L38.7067 51.5869C40.2167 52.2802 43.0033 52.8869 45.8933 52.9136C52.6833 52.9136 57.1267 49.5602 57.15 44.3669ZM74.02 52.5236H80L74.7833 27.5369H69.2633C68.6735 27.5314 68.0957 27.7033 67.6048 28.0302C67.1138 28.3571 66.7324 28.824 66.51 29.3702L56.8133 52.5236H63.6L64.95 48.7902H73.2433L74.02 52.5236ZM66.81 43.6702L70.21 34.2869L72.17 43.6702H66.81ZM39.61 27.5369L34.2667 52.5236H27.8L33.15 27.5369H39.61Z" fill="#F5F5F5"/>
					</g>
					<svg className="mx-2" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_2_682)">
						<path d="M38.7578 61.6035L39.3703 62.098C35.2184 64.8679 30.3367 66.3405 25.3457 66.3287C11.3442 66.3287 0 54.9999 0 40.9984C0 27.0097 11.3442 15.6681 25.3303 15.6681C30.5245 15.6681 35.3548 17.2158 39.36 19.8834C39.1627 20.0473 38.9745 20.2218 38.7962 20.4062C32.8077 25.5824 29.3637 33.0982 29.3637 40.9984C29.3637 48.8986 32.7949 56.4144 38.7604 61.6035H38.7578ZM56.6697 15.6681C51.6789 15.6527 46.7959 17.1199 42.64 19.8834C42.8424 20.0577 43.0423 20.2319 43.2038 20.4062C46.1619 22.9604 48.5354 26.1216 50.163 29.6749C51.7906 33.2281 52.6342 37.0901 52.6363 40.9984C52.6363 48.8883 49.2051 56.4016 43.2396 61.6035C43.0366 61.7697 42.8325 61.9346 42.6272 62.098C46.7782 64.8696 51.6605 66.3424 56.6517 66.3287C70.6533 66.3287 81.9974 54.9999 81.9974 40.9984C81.9974 27.0097 70.6533 15.6681 56.6671 15.6681H56.6697ZM41 21.1006C37.9825 23.4657 35.543 26.4867 33.8665 29.9347C32.1901 33.3826 31.3206 37.167 31.324 41.001C31.319 44.837 32.1877 48.6238 33.8643 52.0741C35.5408 55.5243 37.9811 58.5475 41 60.9141C41.3357 60.6605 41.6432 60.394 41.9609 60.1146C44.7001 57.7407 46.8962 54.805 48.4 51.5069C49.9038 48.2088 50.68 44.6257 50.676 41.001C50.679 37.1671 49.8094 33.3828 48.1329 29.9349C46.4565 26.487 44.0172 23.4659 41 21.1006Z" fill="#F5F5F5"/>
						</g>
						<defs>
						<clipPath id="clip0_2_682">
						<rect width="82" height="82" fill="white"/>
						</clipPath>
						</defs>
						</svg>

					<defs>
					<clipPath id="clip0_2_684">
					<rect width="80" height="80" fill="white"/>
					</clipPath>
					</defs>
					</svg>
					<svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M59.3652 25.0808C60.8207 27.6842 61.01 31.0389 60.2527 34.9232C58.0635 46.1826 50.5612 50.0699 40.9821 50.0699H39.503C38.9361 50.0707 38.3881 50.2738 37.9575 50.6425C37.527 51.0113 37.2421 51.5215 37.154 52.0815L37.0357 52.7324L35.172 64.545L35.0773 65.0479C34.9892 65.6076 34.7042 66.1175 34.2736 66.4858C33.8429 66.854 33.295 67.0565 32.7284 67.0566H22.8387C22.6323 67.0566 22.4284 67.0118 22.241 66.9254C22.0535 66.839 21.8871 66.7131 21.753 66.5562C21.6189 66.3993 21.5203 66.2153 21.4642 66.0167C21.408 65.8181 21.3955 65.6097 21.4275 65.4059L21.9453 62.1251H26.436L29.2464 44.3159H33.3437C47.1828 44.3159 56.2708 37.7987 59.3652 25.0808ZM50.6085 10.0229C52.8628 12.5907 53.5166 15.3775 52.8332 19.741C52.777 20.1049 52.7149 20.451 52.6498 20.806C50.4754 31.9678 43.5115 36.9171 32.0716 36.9171H26.4981C24.6344 36.9171 23.025 38.1419 22.4925 39.8814L22.4511 39.8755L19.6999 57.3119H9.23329C9.21127 57.3118 9.18954 57.3069 9.16962 57.2975C9.1497 57.2881 9.13207 57.2745 9.11798 57.2576C9.10388 57.2407 9.09366 57.2209 9.08803 57.1996C9.08239 57.1783 9.08149 57.156 9.08538 57.1344L16.7711 8.29229C16.8748 7.63064 17.2113 7.02775 17.72 6.59221C18.2288 6.15668 18.8763 5.91714 19.546 5.91675H37.225C43.6831 5.91675 48.2182 7.30421 50.6056 10.0229H50.6085Z" fill="#F5F5F5"/>
					</svg>


					</div>
			</div>
			<div className="flex-1 flex justify-center items-start mb-4 md:mb-0">
				<img src={img} alt="" className="w-4/5" />
			</div>
		</section>
	 );
}
 
export default Hero;