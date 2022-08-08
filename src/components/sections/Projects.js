import FadeInScroll from "../anime/FadeInScroll";
import {GithubIcon, LinkIcon} from "../icons/Index";
import {motion} from "framer-motion";
import projects from "../../data/projects";
import {Fragment} from "react";

export default function Projects(){

	return (
		<div>
			<div className="container projects" id="003">
				<FadeInScroll className="accent title">
					<span className="no">003.</span>
					<span className="f-raleway">Projects</span>
				</FadeInScroll>
			</div>
			{projects.map((d) => {
				return (
					<div key={d.title}>
						<div className="marquee">
							<marquee>{d.marquee}</marquee>
						</div>
						<div className="container projects">
							<div className="project">
								<FadeInScroll className="info">
									<h1>{d.title}</h1>
									<div className="summary">Description</div>
									{d.description.map((p, i) => {
										if(i === 0)
											return(
												<Fragment key={i}>
													<br/>
													<p>{p}</p>
												</Fragment>
											)
										else
											return(
												<Fragment key={i}>
													<br/>
													<br/>
													<p>{p}</p>
												</Fragment>
											)
									})}
									<div className="used">Tech Stack / Implemented.</div>
									<ul className="used-list">
										{d.used.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
									<div className="links">
										{d.source_code ? (
											<a href={d.source_code} target="_blank" className="link">
												<GithubIcon />
												<span>Source Code</span>
											</a>
										): ''}
										{d.link ? (
											<a href={d.link} target="_blank" className="link">
												<LinkIcon/>
												<span>Visit Link</span>
											</a>
										): ''}
									</div>
								</FadeInScroll>
								<FadeInScroll className="img-container">
									<div className="images">
										<img className="main" src={d.image.main} alt=""/>
										<img className="hover" src={d.image.hover} alt=""/>
									</div>
								</FadeInScroll>
							</div>
						</div>
					</div>
				)
			})}

			<motion.div
				initial={{ x: -10 }}
				transition={{ type: "spring", duration: 2 }}
				whileInView={{ x: 0 }}
				className="coming-soon"
			>
				More Projects Coming Soon...
			</motion.div>
		</div>
	)
}