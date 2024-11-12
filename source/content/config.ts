import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: z
		.object({
			draft: z.boolean().default(false),
			isUnlisted: z.boolean().default(false),
			title: z.string().nonempty(),
			description: z.string().nonempty().optional(),
			pubDate: z.date(),
			tags: z
				.array(
					z.enum([
						"programming",
						"open-source",
						"swift",
						"javascript",
						"nodejs",
					]),
				)
				.optional(),
			redirectUrl: z.string().url().optional(),
		})
		.strict(),
});

export const collections = {
	blog: blogCollection,
};
