
import Text from "./Text";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-marian-blue py-[100px] px-[50px]">
			<div className="flex items-center justify-between">
				<div className="">
					<Text variant="heading-three" className="text-white">
						OUR COMPANY
					</Text>
					<div className="mt-[14px] space-y-2">
						<Text variant="body-three" className="text-white">
							OUR STORY
						</Text>
						<Text variant="body-three" className="text-white">
							TERMS OF SERVICE
						</Text>
						<Text variant="body-three" className="text-white">
							PRIVACY POLICY
						</Text>
					</div>
				</div>
				<div className="">
					<Text variant="heading-three" className="text-white">
						SUPPORT
					</Text>
					<div className="mt-[14px] space-y-2">
						<Text variant="body-three" className="text-white">
							FAQs
						</Text>
						<Text variant="body-three" className="text-white">
							CONTACT US
						</Text>
						<Text variant="body-three" className="text-white">
							RETURNS
						</Text>
						<Text variant="body-three" className="text-white">
							PROFESSIONALS
						</Text>
					</div>
				</div>
			</div>
			<div className="mt-[180px]">
				<div className="flex items-center justify-between">
					<div className="">
						<Text variant="caption-four" className="text-white">
							Do not sell my personal information <br /> © 2023 KOMOREBI
						</Text>
					</div>
					<div className="flex items-center space-x-[38px]">
						<Link
							to={""}
							className="w-[38px] h-[38px] rounded-[19px] bg-white flex items-center justify-center">
							<svg
								width="38"
								height="38"
								viewBox="0 0 38 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="19" cy="19" r="19" fill="white" />
								<g clipPath="url(#clip0_319_346)">
									<path
										d="M19 9.16094C22.2063 9.16094 22.5859 9.175 23.8469 9.23125C25.0188 9.28281 25.6516 9.47969 26.0734 9.64375C26.6313 9.85938 27.0344 10.1219 27.4516 10.5391C27.8734 10.9609 28.1313 11.3594 28.3469 11.9172C28.5109 12.3391 28.7078 12.9766 28.7594 14.1437C28.8156 15.4094 28.8297 15.7891 28.8297 18.9906C28.8297 22.1969 28.8156 22.5766 28.7594 23.8375C28.7078 25.0094 28.5109 25.6422 28.3469 26.0641C28.1313 26.6219 27.8688 27.025 27.4516 27.4422C27.0297 27.8641 26.6313 28.1219 26.0734 28.3375C25.6516 28.5016 25.0141 28.6984 23.8469 28.75C22.5813 28.8063 22.2016 28.8203 19 28.8203C15.7938 28.8203 15.4141 28.8063 14.1531 28.75C12.9813 28.6984 12.3484 28.5016 11.9266 28.3375C11.3688 28.1219 10.9656 27.8594 10.5484 27.4422C10.1266 27.0203 9.86875 26.6219 9.65313 26.0641C9.48906 25.6422 9.29219 25.0047 9.24063 23.8375C9.18438 22.5719 9.17031 22.1922 9.17031 18.9906C9.17031 15.7844 9.18438 15.4047 9.24063 14.1437C9.29219 12.9719 9.48906 12.3391 9.65313 11.9172C9.86875 11.3594 10.1313 10.9562 10.5484 10.5391C10.9703 10.1172 11.3688 9.85938 11.9266 9.64375C12.3484 9.47969 12.9859 9.28281 14.1531 9.23125C15.4141 9.175 15.7938 9.16094 19 9.16094ZM19 7C15.7422 7 15.3344 7.01406 14.0547 7.07031C12.7797 7.12656 11.9031 7.33281 11.1438 7.62812C10.3516 7.9375 9.68125 8.34531 9.01563 9.01562C8.34531 9.68125 7.9375 10.3516 7.62813 11.1391C7.33281 11.9031 7.12656 12.775 7.07031 14.05C7.01406 15.3344 7 15.7422 7 19C7 22.2578 7.01406 22.6656 7.07031 23.9453C7.12656 25.2203 7.33281 26.0969 7.62813 26.8563C7.9375 27.6484 8.34531 28.3188 9.01563 28.9844C9.68125 29.65 10.3516 30.0625 11.1391 30.3672C11.9031 30.6625 12.775 30.8687 14.05 30.925C15.3297 30.9812 15.7375 30.9953 18.9953 30.9953C22.2531 30.9953 22.6609 30.9812 23.9406 30.925C25.2156 30.8687 26.0922 30.6625 26.8516 30.3672C27.6391 30.0625 28.3094 29.65 28.975 28.9844C29.6406 28.3188 30.0531 27.6484 30.3578 26.8609C30.6531 26.0969 30.8594 25.225 30.9156 23.95C30.9719 22.6703 30.9859 22.2625 30.9859 19.0047C30.9859 15.7469 30.9719 15.3391 30.9156 14.0594C30.8594 12.7844 30.6531 11.9078 30.3578 11.1484C30.0625 10.3516 29.6547 9.68125 28.9844 9.01562C28.3188 8.35 27.6484 7.9375 26.8609 7.63281C26.0969 7.3375 25.225 7.13125 23.95 7.075C22.6656 7.01406 22.2578 7 19 7Z"
										fill="#314899"
									/>
									<path
										d="M19 12.8359C15.5969 12.8359 12.8359 15.5969 12.8359 19C12.8359 22.4031 15.5969 25.1641 19 25.1641C22.4031 25.1641 25.1641 22.4031 25.1641 19C25.1641 15.5969 22.4031 12.8359 19 12.8359ZM19 22.9984C16.7922 22.9984 15.0016 21.2078 15.0016 19C15.0016 16.7922 16.7922 15.0016 19 15.0016C21.2078 15.0016 22.9984 16.7922 22.9984 19C22.9984 21.2078 21.2078 22.9984 19 22.9984Z"
										fill="#314899"
									/>
									<path
										d="M26.8469 12.5921C26.8469 13.389 26.2 14.0312 25.4078 14.0312C24.6109 14.0312 23.9688 13.3843 23.9688 12.5921C23.9688 11.7953 24.6156 11.1531 25.4078 11.1531C26.2 11.1531 26.8469 11.8 26.8469 12.5921Z"
										fill="#314899"
									/>
								</g>
								<defs>
									<clipPath id="clip0_319_346">
										<rect
											width="24"
											height="24"
											fill="white"
											transform="translate(7 7)"
										/>
									</clipPath>
								</defs>
							</svg>
						</Link>
						<Link
							to={""}
							className="w-[38px] h-[38px] rounded-[19px] bg-white flex items-center justify-center">
							<svg
								width="38"
								height="38"
								viewBox="0 0 38 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="19" cy="19" r="19" fill="white" />
								<path
									d="M30.7609 14.2C30.7609 14.2 30.5266 12.5454 29.8047 11.8188C28.8906 10.8625 27.8688 10.8579 27.4 10.8016C24.0438 10.5579 19.0047 10.5579 19.0047 10.5579H18.9953C18.9953 10.5579 13.9562 10.5579 10.6 10.8016C10.1313 10.8579 9.10938 10.8625 8.19531 11.8188C7.47344 12.5454 7.24375 14.2 7.24375 14.2C7.24375 14.2 7 16.1454 7 18.086V19.9047C7 21.8454 7.23906 23.7907 7.23906 23.7907C7.23906 23.7907 7.47344 25.4454 8.19062 26.1719C9.10469 27.1282 10.3047 27.0954 10.8391 27.1985C12.7609 27.3813 19 27.4375 19 27.4375C19 27.4375 24.0438 27.4282 27.4 27.1891C27.8688 27.1329 28.8906 27.1282 29.8047 26.1719C30.5266 25.4454 30.7609 23.7907 30.7609 23.7907C30.7609 23.7907 31 21.85 31 19.9047V18.086C31 16.1454 30.7609 14.2 30.7609 14.2ZM16.5203 22.1125V15.3672L23.0031 18.7516L16.5203 22.1125Z"
									fill="#314899"
								/>
							</svg>
						</Link>
						<Link
							to={""}
							className="w-[38px] h-[38px] rounded-[19px] bg-white flex items-center justify-center">
							<svg
								width="38"
								height="38"
								viewBox="0 0 38 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="19" cy="19" r="19" fill="white" />
								<g clipPath="url(#clip0_319_352)">
									<path
										d="M29.2234 7H8.77187C7.79219 7 7 7.77344 7 8.72969V29.2656C7 30.2219 7.79219 31 8.77187 31H29.2234C30.2031 31 31 30.2219 31 29.2703V8.72969C31 7.77344 30.2031 7 29.2234 7ZM14.1203 27.4516H10.5578V15.9953H14.1203V27.4516ZM12.3391 14.4344C11.1953 14.4344 10.2719 13.5109 10.2719 12.3719C10.2719 11.2328 11.1953 10.3094 12.3391 10.3094C13.4781 10.3094 14.4016 11.2328 14.4016 12.3719C14.4016 13.5062 13.4781 14.4344 12.3391 14.4344ZM27.4516 27.4516H23.8937V21.8828C23.8937 20.5563 23.8703 18.8453 22.0422 18.8453C20.1906 18.8453 19.9094 20.2938 19.9094 21.7891V27.4516H16.3563V15.9953H19.7687V17.5609H19.8156C20.2891 16.6609 21.4516 15.7094 23.1813 15.7094C26.7859 15.7094 27.4516 18.0813 27.4516 21.1656V27.4516V27.4516Z"
										fill="#314899"
									/>
								</g>
								<defs>
									<clipPath id="clip0_319_352">
										<rect
											width="24"
											height="24"
											fill="white"
											transform="translate(7 7)"
										/>
									</clipPath>
								</defs>
							</svg>
						</Link>
						<Link
							to={""}
							className="w-[38px] h-[38px] rounded-[19px] bg-white flex items-center justify-center">
							<svg
								width="38"
								height="38"
								viewBox="0 0 38 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="19" cy="19" r="19" fill="white" />
								<g clipPath="url(#clip0_319_355)">
									<path
										d="M14.5502 29.75C23.6045 29.75 28.5583 22.2467 28.5583 15.7419C28.5583 15.5309 28.5536 15.3153 28.5442 15.1044C29.5079 14.4075 30.3395 13.5443 31 12.5553C30.1025 12.9546 29.1496 13.2154 28.1739 13.3287C29.2013 12.7129 29.9705 11.7455 30.3391 10.6058C29.3726 11.1786 28.3156 11.5826 27.2134 11.8006C26.4708 11.0116 25.489 10.4891 24.4197 10.3141C23.3504 10.139 22.2532 10.3211 21.2977 10.8321C20.3423 11.3431 19.5818 12.1547 19.1338 13.1413C18.6859 14.1279 18.5754 15.2346 18.8195 16.2903C16.8625 16.1921 14.9479 15.6837 13.2 14.7981C11.452 13.9125 9.90969 12.6694 8.67297 11.1495C8.0444 12.2332 7.85206 13.5156 8.13503 14.7361C8.418 15.9565 9.15506 17.0234 10.1964 17.72C9.41463 17.6952 8.64998 17.4847 7.96563 17.1059V17.1669C7.96492 18.3041 8.3581 19.4066 9.07831 20.2868C9.79852 21.167 10.8013 21.7706 11.9162 21.995C11.1921 22.1931 10.432 22.222 9.69484 22.0794C10.0095 23.0574 10.6216 23.9129 11.4458 24.5263C12.27 25.1398 13.2651 25.4806 14.2923 25.5012C12.5484 26.8711 10.3942 27.6141 8.17656 27.6106C7.78329 27.61 7.3904 27.5859 7 27.5384C9.25286 28.9837 11.8735 29.7514 14.5502 29.75Z"
										fill="#314899"
									/>
								</g>
								<defs>
									<clipPath id="clip0_319_355">
										<rect
											width="24"
											height="24"
											fill="white"
											transform="translate(7 8)"
										/>
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;