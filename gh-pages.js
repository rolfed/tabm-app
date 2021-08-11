import * as ghPages from 'gh-pages';

ghPages.publish(
	'public',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/rolfed/tabm-app.git',
		user: {
			name: 'rolfed',
			email: 'talkto@dannielrolfe.com'
		}
	},
	() => console.log('Deploy complete')
)