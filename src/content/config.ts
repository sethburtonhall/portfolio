import { defineCollection, z } from "astro:content";

export const webCollections = {
  web: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        category: z.string(),
        subCategory: z.string(),
        title: z.string(),
        publishDate: z.coerce.date(),
        img: image(),
        img_alt: z.string().optional(),
      }),
  }),
};

export const creativeCollections = {
  creative: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        category: z.string(),
        subCategory: z.string(),
        title: z.string(),
        description: z.string(),
        url: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        img: image(),
        img_alt: z.string().optional(),
      }),
  }),
};
