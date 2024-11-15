import rss from '@astrojs/rss';
import {fetchPosts} from '~/utils/posts.js';

export const GET = async context => {
	let items = await fetchPosts();

	items = items
		.flat()
		.filter(item => item.tags.includes('visionOS'))
		.map(item => ({
			link: item.url,
			title: item.title,
			pubDate: item.pubDate,
			description: item.subtitle,
		}))
		.sort((a, b) => b.pubDate - a.pubDate);

	return rss({
		title: 'Santiago Hervella — Vision Pro',
		description: 'Posts tagged with Vision Pro by Santiago Hervella',
		site: context.site,
		items,
		trailingSlash: false,
	});
};
