
function titleMultiplier(title){
	return Array.from({ length: 10 }).map((_, i) => {
		if(i+1 === 10)
			return title;
		else
			return title + ' -';
	}).join(' ')
}

const imgURL = process.env.REACT_APP_URL + 'images/'
const projects = [
	{
		title: 'Courseme',
		marquee: titleMultiplier('Courseme'),
		description: [
			'Capstone Project which student will take an exam and recommends course based on past exam dataset using multiple linear regression.',
		],
		image: {
			main: `${imgURL}/capstone/1.png`,
			hover: `${imgURL}/capstone/2.png`,
		},
		admin: '',
		used: ['Next/React JS', 'Django Rest Api', 'MUI/CSS'],
		link: 'https://courseme.vercel.app/',
		source_code: 'https://github.com/romar0001/capstone',
	},
	{
		title: 'Anime',
		marquee: titleMultiplier('Anime'),
		description: [
			'My 3rd year final project in one of my subject.',
		],
		image: {
			main: `${imgURL}/anime/2.png`,
			hover: `${imgURL}/anime/1.png`,
		},
		admin: {
			site: 'http://anime-anime.42web.io/admin',
			user: 'admin',
			pass: 'admin',
		},
		used: ['HTML', 'CSS', 'PHP', 'MYSQL', 'BOOTSTRAP', 'JAVASCRIPT', 'MVC'],
		link: 'http://anime-anime.42web.io/',
		source_code: 'https://github.com/romar0001/anime',
	},
	{
		title: 'Portfolio',
		marquee: titleMultiplier('Portfolio'),
		description: [
			'My First Portfolio site.',
		],
		image: {
			main: `${imgURL}/portfolio/1.png`,
			hover: `${imgURL}/portfolio/2.png`,
		},
		admin: '',
		used: ['Vue', 'CSS'],
		link: 'https://romardesabille.vercel.app/',
		source_code: 'https://github.com/romar0001/portfolio',
	},
]

export default projects