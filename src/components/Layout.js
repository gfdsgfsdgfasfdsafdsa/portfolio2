import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const Loading = () => {
	return (
		<div className="loading">
			<motion.div
				initial={{ scaleX:0 }}
				animate={{ scaleX:1 }}
				transition={{ duration: 1 }}
				className="line" style={{height:'1px'}}/>
			<motion.div
				initial={{ backgroundColor: '#FFC0CB', opacity: 0 }}
				animate={{ scaleY: 5, opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				className="line" style={{height:'2px'}}/>
			<motion.div
				initial={{ scaleY: 0, backgroundColor: '#FFC0CB' }}
				animate={{ scaleY: 1 }}
				transition={{ duration: .5, delay: 2 }}
				className="line"/>
			<motion.div
				initial={{ x: '-1000rem', backgroundColor: '#000' }}
				animate={{ x: 0 }}
				transition={{ duration: 1.5, delay: 1.5 }}
				className="line" />
		</div>
	)
}

export default function Layout({ children }){
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3500)

	}, [])

	return(
		<>
			{loading ?
				<Loading/> : children}
		</>
	)
}