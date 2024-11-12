import rss from '@astrojs/rss';

export const GET = async context => {
	let items = [];

	items = items.map(item => ({
		link: item.url,
		title: item.title,
		pubDate: item.pubDate,
		description: item.subtitle,
	}));

	return rss({
		title: 'Santiago Hervella — Vision Pro',
		description: 'Posts tagged with Vision Pro by Santiago Hervella',
		site: context.site,
		items,
		trailingSlash: false,
	});
};
