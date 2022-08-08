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
				I am recent graduate of Holy Cross of Davao <span className="l">College</span> in
				the field of Bachelor of Science in Information Technology<small>,</small>
				Currently looking for a job.
			</FadeInScroll>
			<FadeInScroll className="info">
				I am currently learning fresh and <span className="l">sass</span> and hoping to <span className="l">continue</span> learning other technologies...
			</FadeInScroll>
		</div>
	)
}