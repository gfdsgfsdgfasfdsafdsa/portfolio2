import {motion} from "framer-motion";

export default function FadeInScroll({children, className}){
	return(
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{duration: .5 }}
		>
			{children}
		</motion.div>
	)
}