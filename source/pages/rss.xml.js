import rss from '@astrojs/rss';
import {SITE} from '~/config.mjs';
import {fetchPosts} from '~/utils/posts.js';

export const GET = async context => {
	let items = await fetchPosts();

	items = items
		.flat()
		.map(item => ({
			link: item.url,
			title: item.title,
			pubDate: item.pubDate,
			description: item.description,
		}))
		.sort((a, b) => b.pubDate - a.pubDate);

	return rss({
		title: 'Santiago Hervella — Blog',
		description: SITE.description,
		site: context.site,
		items,
		trailingSlash: false,
	});
};
