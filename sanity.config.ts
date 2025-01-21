// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { buyersSellers } from "./schema/buyers-sellers";
import { coaching } from "./schema/coaching";
import { itemList } from "./schema/item-list";
import { method } from "./schema/method";
import { page } from "./schema/page";
import { service } from "./schema/service";
import { icon } from "./schema/icon";
import { contact } from "./schema/contact";
import { info } from "./schema/info";
import { localeStringArray, localeStringField } from "./schema/locale-string";

export default defineConfig({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: {
    types: [
      page,
      itemList,
      coaching,
      method,
      buyersSellers,
      service,
      icon,
      contact,
      info,
      localeStringArray,
      localeStringField,
    ],
  },
});
