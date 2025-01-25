import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  type: "object",
  preview: {
    select: {
      title: "section.0.value",
    },
  },
  fields: [
    defineField({
      name: "section",
      type: "locale-string-array",
    }),
    defineField({
      name: "title",
      type: "locale-string-array",
    }),
    defineField({
      name: "features",
      type: "array",
      of: [
        {
          type: "object",
          preview: {
            select: {
              title: "title.0.value",
            },
          },
          fields: [
            {
              name: "icon",
              type: "icon",
            },
            {
              name: "title",
              type: "locale-string-array",
            },
            {
              name: "description",
              type: "locale-string-array",
            },
          ],
        },
      ],
    }),
  ],
});
