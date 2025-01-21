import { defineType } from "sanity";

export const itemList = defineType({
  name: "item-list",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    },
  ],
});
