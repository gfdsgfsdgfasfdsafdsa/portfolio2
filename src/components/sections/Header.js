import {motion} from "framer-motion";

export default function Header (){

	return (
		<div id="001">
			<motion.nav
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, delay: 2 }}
				className="f-raleway">
				<div>MENU</div>
				<ul>
					<li><a href="#001">001.</a></li>
					<li><a href="#002">002.</a></li>
					<li><a href="#003">003.</a></li>
					<li><a href="#004">004.</a></li>
					<li><a href="#005">005.</a></li>
				</ul>
			</motion.nav>
			<motion.header
				className="container"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 2 }}
			>
				<div className="head">
					<div className="no accent">
						001.
					</div>
					<a href="">View CV</a>
				</div>
			</motion.header>
		</div>
	)
}
