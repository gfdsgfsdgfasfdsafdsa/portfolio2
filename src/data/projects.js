
function titleMultiplier(title){
	return Array.from({ length: 10 }).map((_, i) => {
		if(i+1 === 10)
			return title;
		else
			return title + ' -';
	}).join(' ')
}

const projects = [
	{
		title: 'Courseme',
		marquee: titleMultiplier('Courseme'),
		description: [
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
		],
		image: {
			main: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
			hover: "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
		},
		used: ['Django', 'HTML', 'CSS', 'TEST'],
		link: 'a',
		source_code: 'a',
	},
	{
		title: 'Anime',
		marquee: titleMultiplier('Anime'),
		description: [
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
		],
		image: {
			main: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
			hover: "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
		},
		used: ['Django', 'HTML', 'CSS', 'TEST'],
		link: '',
		source_code: '',
	},
]

export default projects