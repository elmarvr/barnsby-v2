import { defineField, defineType } from "sanity";

export const coaching = defineType({
  name: "coaching",
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
      name: "description",
      type: "locale-string-array",
    }),
    defineField({
      name: "items",
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
              name: "title",
              type: "locale-string-array",
            },
          ],
        },
      ],
    }),
  ],
});
