
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
			main: `${imgURL}capstone/1.png`,
			hover: `${imgURL}capstone/2.png`,
		},
		admin: '',
		used: ['Next JS', 'Django Rest Api', 'MUI/CSS'],
		link: 'https://courseme.vercel.app/',
		source_code: 'https://github.com/romar0001/capstone',
	},
	{
		title: 'Tictactoe',
		marquee: titleMultiplier('Tictactoe'),
		description: [
			'Simple tictactoe game using api which recommends moves and im using it for computer move.',
		],
		image: {
			main: `${imgURL}tictactoe/1.png`,
			hover: `${imgURL}tictactoe/2.png`,
		},
		admin: {
			site: 'https://rapidapi.com/stujo/api/tic-tac-toe',
			user: 'Api used.',
			pass: '',
		},
		used: ['Fresh', 'Tailwind'],
		link: 'https://tictactoe1.deno.dev/',
		source_code: 'https://github.com/romar0001/tictactoe',
	},
	{
		title: 'Anime',
		marquee: titleMultiplier('Anime'),
		description: [
			'My 3rd year final project in one of my subject.',
		],
		image: {
			main: `${imgURL}anime/2.png`,
			hover: `${imgURL}anime/1.png`,
		},
		admin: {
			site: 'http://anime-anime.42web.io/admin',
			user: 'username : admin',
			pass: 'password : admin',
		},
		used: ['HTML', 'CSS', 'PHP', 'MySQL', 'Bootstrap', 'Javascript', 'MVC'],
		link: 'http://anime-anime.42web.io/',
		source_code: 'https://github.com/romar0001/anime',
	},
	{
		title: 'Snip',
		marquee: titleMultiplier('Snip'),
		description: [
			'Simple Code saving app.',
		],
		image: {
			main: `${imgURL}adv/1.png`,
			hover: `${imgURL}adv/2.png`,
		},
		admin: '',
		used: ['HTML', 'Django', 'Tailwind', 'Javascript'],
		link: 'https://adv104.herokuapp.com/',
		source_code: 'https://github.com/romar0001/adv104',
	},
	{
		title: 'Portfolio',
		marquee: titleMultiplier('Portfolio'),
		description: [
			'My First Portfolio site.',
		],
		image: {
			main: `${imgURL}portfolio/1.png`,
			hover: `${imgURL}portfolio/2.png`,
		},
		admin: '',
		used: ['Vue', 'CSS'],
		link: 'https://romardesabille.vercel.app/',
		source_code: 'https://github.com/romar0001/portfolio',
	},
]

export default projects