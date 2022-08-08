import {motion} from "framer-motion";

const letters = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.05,
		}
	}
}

const letter = {
	hidden: {opacity: 0, y: 50},
	visible: {
		opacity: 1,
		y: 0,
	}
}

export default function Hero(){

	const letterAnime = (text) => {
		return text.split("").map((char, index) => (
			<motion.span key={`${char}${index}`} variants={letter}>
				{char}
			</motion.span>
		))
	}

	return (
		<main className="container">
			<motion.div
				variants={letters}
				initial="hidden"
				animate="visible"
				className="me"
			>
				<div className="hello f-raleway">{letterAnime("HELLO I AM,")}</div>
				<div className="name f-raleway">
					<span className="f-major">
						{letterAnime("R")}
					</span>
						{letterAnime("OM")}
					<span className="f-major">
						{letterAnime("A")}
					</span>
						{letterAnime("R")}
					<div className="f-raleway last-n">
						{letterAnime("DES")}
						<span className="f-major">
							 {letterAnime("A")}
						</span>
						{letterAnime("BILLE")}
						<span className="f-major">
							{letterAnime(".")}
						</span>
					</div>
				</div>
				<div className="job f-raleway">
					{letterAnime("FRONTEND ENTHUSIAST")}
				</div>
			</motion.div>
		</main>
	)
}