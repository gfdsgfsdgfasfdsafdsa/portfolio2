import FadeInScroll from "../anime/FadeInScroll";
import { useState } from "react";
import { certificateData } from "../../data/certificates-data";

function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
	    <span>
			{direction === "next" ? '▶' : '◀'}
	    </span>
    </button>
  );
}

export default function Certificates(){
	const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== certificateData.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === certificateData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(certificateData.length)
        }
    }
	/*
    const moveDot = index => {
        setSlideIndex(index)
    }
	*/


	return (
		<div className="certificates container" id="004">
			<div>
				<FadeInScroll className="accent title">
					<span className="no">004.</span>
					<span className="f-raleway">Certificates</span>
				</FadeInScroll>
			</div>
			<FadeInScroll className="container-slider">
				{certificateData.map((d, index) => {
					return (
						<div
							key={index}
							className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
						>
							<div className="detail">
								<span className="description">{certificateData[slideIndex-1].description}</span>
								<a href={certificateData[slideIndex-1].img} target="_blank">View Full image</a>
							</div>
							<div className="img">
								<div className="index">{slideIndex}/3</div>
								<img
									src={d.img}
									style={{ maxWidth: d.maxWidth}}
									alt={d.description}
								/>
							</div>
						</div>
					)
				})}
				<BtnSlider moveSlide={nextSlide} direction={"next"} />
				<BtnSlider moveSlide={prevSlide} direction={"prev"}/>

				{/*
				<div className="container-dots">
					{Array.from({length: certificateData?.length}).map((item, index) => (
						<div
							key={index}
							onClick={() => moveDot(index + 1)}
							className={slideIndex === index + 1 ? "dot active" : "dot"}
						/>
					))}
				</div>
				*/}
			</FadeInScroll>
		</div>
	)
}
