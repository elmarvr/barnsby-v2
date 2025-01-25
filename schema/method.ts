import { defineField, defineType } from "sanity";

export const method = defineType({
  name: "method",
  type: "object",
  title: "Process",
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
      name: "steps",
      type: "item-list",
    }),
  ],
});
