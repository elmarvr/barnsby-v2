import { defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "phone",
      type: "string",
    },
    {
      name: "address",
      type: "string",
    },
  ],
});
