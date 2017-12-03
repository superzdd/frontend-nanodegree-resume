/*
This is empty on purpose! Your code to build the resume will go here.
 */

var model = {
	bio: {
		name: 'Zhang Chenhai',
		role: 'Web Developer',
		contacts: {
			mobile: '156-0190-7837',
			email: 'superzdd@sina.com',
			github: 'https://github.com/superzdd',
			twitter: '',
			location: 'No.99 danba road, putuo district, Shanghai'
		},
		welcomeMessage: 'Hi! Nice to see you!',
		skills: ['HTML5', 'CSS', 'JavaScript', 'Egret Engine', 'Node.js', 'C#'],
		biopic: 'https://avatars0.githubusercontent.com/u/25759388?s=400&u=7184e85cd997d75695ecb739d18d20cee7e8d9bf&v=4',
		display: function() {},
	},
	education: {
		schools: [{
			name: 'Shanghai Maritime University',
			location: '1550 harbour road, pudong new area, Shanghai',
			degree: 'bachelor',
			majors: ['Information and Computing Science'],
			dates: '2006-09-01~2010-08-31',
			url: 'http://www.shmtu.edu.cn/'
		}],

		onlineCourses: [{
			title: 'web degree',
			school: 'udacity',
			dates: '2017-08-01~2017-12-30',
			url: 'www.udacity.com'
		}],

		display: function() {}
	},
	work: {
		jobs: [{
				employer: 'Shanghai HERDSRIC information technology co. LTD',
				title: 'Web Developer',
				location: 'No.99 danba road, putuo district, Shanghai',
				dates: 'in progress',
				description: 'Major in making HTML5 projects at wechat platform.Be familiar with HTML5,CSS,JavaScript,Egret Engine and Wechat'
			},
			{
				employer: 'Neusoft Shanghai',
				title: '.Net Senior Developer',
				location: '555 dongchuan road, minhang district, Shanghai',
				dates: '2013-10-08~2015-03-31',
				description: 'Major in Developing Pudong Tower Information System.Be familiar with C#,WPF,DDS,MySQL'
			},
			{
				employer: 'WONDERS INFORMATION SYSTEM CO.,LTD.',
				title: '.Net Developer',
				location: 'No.1518, lianhang road, minhang district, Shanghai',
				dates: '2010-9-30~2013-09-30',
				description: 'Major in Developing Pudong/Hongqiao Tower Information System.Be familiar with C#,MQ,MySQL'
			}
		],

		display: function() {}
	},
	projects: {
		projects: [{
			title: 'FOSUN Thanks Giving 2015',
			dates: '2015-11-26',
			description: 'First Wechat HTML5 project in Herdsric',
			images: ['']
		},
		{
			title: 'CHIVAS Home Party 2016',
			dates: '2016-10-20',
			description: 'First HTML5 project using Egret Engine',
			images: ['']
		},
		{
			title: 'Miku Chu chu 2017',
			dates: '2017-12-1',
			description: 'First HTML5 project for Tencent',
			images: ['']
		}],

		display: function (){}
	}
};