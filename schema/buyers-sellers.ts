import { defineField, defineType } from "sanity";

export const buyersSellers = defineType({
  name: "buyers-sellers",
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
      name: "buyers",
      type: "object",
      fields: [
        {
          name: "title",
          type: "locale-string-array",
        },
        {
          name: "items",
          type: "item-list",
        },
      ],
    }),
    defineField({
      name: "sellers",
      type: "object",
      fields: [
        {
          name: "title",
          type: "locale-string-array",
        },
        {
          name: "items",
          type: "item-list",
        },
      ],
    }),
  ],
});
