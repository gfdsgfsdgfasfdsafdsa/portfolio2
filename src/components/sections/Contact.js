import FadeInScroll from "../anime/FadeInScroll";


export default function Contact(){
	return (
		<div className="container contact" id="005">
			<FadeInScroll className="accent title">
				<span className="no">005.</span>
				<span className="f-raleway">Contact</span>
			</FadeInScroll>
			<FadeInScroll className="links">
				<a href="mailto:romardesabille@gmail.com?Subject=Hello" target="_blank">
					<button>
						Say Hello
					</button>
				</a>
				<div className="media">
					<a href="">Github</a>
					<div className="extra">
						<div>
							romardesabille@gmail.com
						</div>
						<div style={{ fontSize: "1.8rem"}}>
							&copy; 2022
						</div>
					</div>
				</div>
			</FadeInScroll>
		</div>
	)
}
