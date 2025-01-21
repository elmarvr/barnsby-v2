import { defineField, defineType } from "sanity";

export const info = defineType({
  name: "info",
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
      type: "string",
    }),
    defineField({
      name: "email",
      type: "object",
      fields: [
        {
          name: "icon",
          type: "icon",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "phone",
      type: "object",
      fields: [
        {
          name: "icon",
          type: "icon",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "address",
      type: "object",
      fields: [
        {
          name: "icon",
          type: "icon",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    }),
  ],
});
