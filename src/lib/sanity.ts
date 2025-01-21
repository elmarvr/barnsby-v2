import { sanityClient } from "sanity:client";
import { createClient } from "@sanity/client";

export const sanity = createClient(sanityClient.config());
