import {motion} from "framer-motion";
import FadeInScroll from "../anime/FadeInScroll";


export default function About(){
	return(
		<div className="container about" id="002">
			<FadeInScroll className="accent">
				<span className="no">002.</span>
				<span className="f-raleway title">Who am I?</span>
			</FadeInScroll>
			<FadeInScroll className="info">
				<div className="me">
					<span className="l">Hello</span><small>,</small>  I am Romar Desabille<small>.</small>
				</div>
				I am a recent graduate of Holy Cross of Davao <span className="l">College</span> in
				the field of Bachelor of Science in Information Technology<small>.</small>
			</FadeInScroll>
			<FadeInScroll className="info">
				I am currently learning <span className="l">Sass</span> and interested learning frontend libraries/frameworks. My aim is to <span className="l">learn </span>
				with experts and to help achieve the <span className="l">goals</span> of the company im in.
			</FadeInScroll>
		</div>
	)
}