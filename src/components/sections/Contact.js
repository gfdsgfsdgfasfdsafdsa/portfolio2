import FadeInScroll from "../anime/FadeInScroll";


export default function Contact(){
	return (
		<div className="container contact" id="004">
			<FadeInScroll className="accent title">
				<span className="no">004.</span>
				<span className="f-raleway">Contact</span>
			</FadeInScroll>
			<FadeInScroll className="links">
				<a href="mailto:romardesabille@gmail.com?Subject=Hello" target="_blank">
					<button>
						Say Hello
					</button>
				</a>
				<div className="media">
					<a href="https://github.com/romar0001" target="_blank">Github</a>
					<div className="extra">
						<div>
							romardesabille@gmail.com
						</div>
						<div style={{ fontSize: "1.8rem"}}>
							&copy; 2022
						</div>
					</div>
					<a style={{fontSize:'1.5rem', textDecoration: 'line-through'}} href="https://github.com/romar0001/portfolio2" target="_blank">Source Code</a>
				</div>
			</FadeInScroll>
		</div>
	)
}
