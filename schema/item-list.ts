import { defineType } from "sanity";

export const itemList = defineType({
  name: "item-list",
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
        {
          name: "description",
          type: "locale-string-array",
        },
      ],
    },
  ],
});
