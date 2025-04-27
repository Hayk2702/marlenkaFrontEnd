'use client'

import { useEffect, useRef, useState } from "react";
import videoSection from "@/public/images/videoSection.png"
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import Image from "next/image";
// import localVideo from "@/public/videos/homeVideo.mp4";


function ModalVideoWrap({ videoData }) {
	const videoRef = useRef(null);
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [videoError, setVideoError] = useState(false);

	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (video && videoLoaded) {
			video.play().catch(() => {
				// Handle autoplay blocked by browser
			});
		}
	}, [videoLoaded]);


	return (
		<div className="video_wrapper">
			{/* <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 1 }}
				autoplay={1}
				isOpen={isOpen}
				videoId={videoData? videoData :  'QiwtxINIVn8'}
				onClose={() => setOpen(false)}
			/> */}

			<div className="relative mobile:min- overflow-hidden duration-300 hover:opacity-90">
					<video
						src="/videos/homeVideo.mp4" 
						autoPlay
						muted
						playsInline
						loop
						controls={false}
						className="w-full h-[590px] object-cover mobile:object-contain mobile:h-full"
					/>
						<Image
						src={videoSection}
						alt="Fallback image"
						priority={true}
						unoptimized={true}
						sizes="80vw"
						style={{
							objectFit: "cover",
						}}
						className="mobile:object-contain h-[590px]  absolute top-0  mobile:h-full"
					/>

			</div>
		</div>
	)
}

export default ModalVideoWrap