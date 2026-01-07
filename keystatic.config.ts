import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		updates: collection({
			label: 'Updates',
			slugField: 'title',
			path: 'src/content/updates/*',
			columns: ['title', 'publishedDate'],
			fields: {
				title: fields.text({
					label: 'The Headline',
					validation: { isRequired: true },
				}),
				publishedDate: fields.date({
					label: 'Published Date',
					validation: { isRequired: true },
				}),
				coverImage: fields.image({
					label: 'Cover Image',
					directory: 'public/images/updates/',
					publicPath: '/images/updates/',
				}),
				summary: fields.text({
					label: 'Summary',
					description: 'Short summary for the card view',
					validation: { isRequired: true },
				}),
				content: fields.document({
					label: 'Content',
					description: 'Rich text for the full article',
					formatting: true,
					dividers: true,
					links: true,
					tables: true,
				}),
			},
		}),
	},
});

