import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      title: "Sections",
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "service",
          type: "service",
        }),
        defineArrayMember({
          name: "coaching",
          type: "coaching",
        }),
        defineArrayMember({
          name: "method",
          type: "method",
        }),
        defineArrayMember({
          name: "buyers-sellers",
          type: "buyers-sellers",
        }),
        defineArrayMember({
          name: "info",
          type: "info",
        }),
      ],
    }),
  ],
});
