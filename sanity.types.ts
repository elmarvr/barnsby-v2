/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type LocaleStringField = {
  _type: "locale-string-field";
  value?: string;
};

export type LocaleStringArray = Array<{
  _key: string;
} & LocaleStringField>;

export type Info = {
  _type: "info";
  section?: LocaleStringArray;
  title?: LocaleStringArray;
  description?: string;
  email?: {
    icon?: string;
    title?: string;
    description?: string;
  };
  phone?: {
    icon?: string;
    title?: string;
    description?: string;
  };
  address?: {
    icon?: string;
    title?: string;
    description?: string;
  };
};

export type Contact = {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export type Icon = string;

export type Service = {
  _type: "service";
  section?: LocaleStringArray;
  title?: LocaleStringArray;
  features?: Array<{
    icon?: Icon;
    title?: string;
    description?: string;
    _key: string;
  }>;
};

export type BuyersSellers = {
  _type: "buyers-sellers";
  section?: LocaleStringArray;
  title?: LocaleStringArray;
  description?: string;
  buyers?: {
    title?: string;
    items?: Array<{
      title?: string;
      description?: string;
      _key: string;
    }>;
  };
  sellers?: {
    title?: string;
    items?: Array<{
      title?: string;
      description?: string;
      _key: string;
    }>;
  };
};

export type Method = {
  _type: "method";
  section?: LocaleStringArray;
  title?: LocaleStringArray;
  steps?: Array<{
    title?: string;
    description?: string;
    _key: string;
  }>;
};

export type Coaching = {
  _type: "coaching";
  section?: LocaleStringArray;
  title?: LocaleStringArray;
  description?: LocaleStringArray;
  items?: Array<{
    title?: LocaleStringArray;
    _key: string;
  }>;
};

export type ItemList = Array<{
  title?: string;
  description?: string;
  _key: string;
}>;

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  sections?: Array<{
    _key: string;
  } & Service | {
    _key: string;
  } & Coaching | {
    _key: string;
  } & Method | {
    _key: string;
  } & BuyersSellers | {
    _key: string;
  } & Info>;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | Slug | SanityAssetSourceData | LocaleStringField | LocaleStringArray | Info | Contact | Icon | Service | BuyersSellers | Method | Coaching | ItemList | Page;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity.queries.ts
// Variable: methodQuery
// Query: *[_type == "page"] {      "sections": sections[] {        _type,        "section": section[_key == $lang][0].value,        "title": title[_key == $lang][0].value,         "steps": coalesce(steps[] {        title,        description      }, []),          }[_type == "method"][0]    }[0].sections
export type MethodQueryResult = {
  _type: "method";
  section: string | null;
  title: string | null;
  steps: Array<{
    title: string | null;
    description: string | null;
  }> | Array<never>;
} | null;
// Variable: coachingQuery
// Query: *[_type == "page"] {      "sections": sections[] {        _type,        "section": section[_key == $lang][0].value,        "title": title[_key == $lang][0].value,         "description": description[_key == $lang][0].value,      "items": coalesce(items[].title[_key == $lang][0].value, []),          }[_type == "coaching"][0]    }[0].sections
export type CoachingQueryResult = {
  _type: "coaching";
  section: string | null;
  title: string | null;
  description: string | null;
  items: Array<never> | Array<string | null>;
} | null;
// Variable: buyersSellersQuery
// Query: *[_type == "page"] {      "sections": sections[] {        _type,        "section": section[_key == $lang][0].value,        "title": title[_key == $lang][0].value,         description,      buyers {        title,        items,      },      sellers {        title,        items,      }          }[_type == "buyers-sellers"][0]    }[0].sections
export type BuyersSellersQueryResult = {
  _type: "buyers-sellers";
  section: string | null;
  title: string | null;
  description: string | null;
  buyers: {
    title: string | null;
    items: Array<{
      title?: string;
      description?: string;
      _key: string;
    }> | null;
  } | null;
  sellers: {
    title: string | null;
    items: Array<{
      title?: string;
      description?: string;
      _key: string;
    }> | null;
  } | null;
} | null;
// Variable: serviceQuery
// Query: *[_type == "page"] {      "sections": sections[] {        _type,        "section": section[_key == $lang][0].value,        "title": title[_key == $lang][0].value,         features          }[_type == "service"][0]    }[0].sections
export type ServiceQueryResult = {
  _type: "service";
  section: string | null;
  title: string | null;
  features: Array<{
    icon?: Icon;
    title?: string;
    description?: string;
    _key: string;
  }> | null;
} | null;
// Variable: infoQuery
// Query: *[_type == "page"] {      "sections": sections[] {        _type,        "section": section[_key == $lang][0].value,        "title": title[_key == $lang][0].value,         description,      email,      phone,      address          }[_type == "info"][0]    }[0].sections
export type InfoQueryResult = {
  _type: "info";
  section: string | null;
  title: string | null;
  description: string | null;
  email: {
    icon?: string;
    title?: string;
    description?: string;
  } | null;
  phone: {
    icon?: string;
    title?: string;
    description?: string;
  } | null;
  address: {
    icon?: string;
    title?: string;
    description?: string;
  } | null;
} | null;
// Variable: contactQuery
// Query: *[_type == "contact"] {    name,    email,    phone,    address,  }
export type ContactQueryResult = Array<{
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
}>;
// Variable: sectionsQuery
// Query: *[_type == "page"] {    "sections": sections[] {      _type,      "title": title[_key == $lang][0].value,    }  }[0].sections
export type SectionsQueryResult = Array<{
  _type: "buyers-sellers";
  title: string | null;
} | {
  _type: "coaching";
  title: string | null;
} | {
  _type: "info";
  title: string | null;
} | {
  _type: "method";
  title: string | null;
} | {
  _type: "service";
  title: string | null;
}> | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"page\"] {\n      \"sections\": sections[] {\n        _type,\n        \"section\": section[_key == $lang][0].value,\n        \"title\": title[_key == $lang][0].value,\n         \"steps\": coalesce(steps[] {\n        title,\n        description\n      }, []),\n    \n      }[_type == \"method\"][0]\n    }[0].sections": MethodQueryResult;
    "*[_type == \"page\"] {\n      \"sections\": sections[] {\n        _type,\n        \"section\": section[_key == $lang][0].value,\n        \"title\": title[_key == $lang][0].value,\n         \"description\": description[_key == $lang][0].value,\n      \"items\": coalesce(items[].title[_key == $lang][0].value, []),\n    \n      }[_type == \"coaching\"][0]\n    }[0].sections": CoachingQueryResult;
    "*[_type == \"page\"] {\n      \"sections\": sections[] {\n        _type,\n        \"section\": section[_key == $lang][0].value,\n        \"title\": title[_key == $lang][0].value,\n         description,\n      buyers {\n        title,\n        items,\n      },\n      sellers {\n        title,\n        items,\n      }\n    \n      }[_type == \"buyers-sellers\"][0]\n    }[0].sections": BuyersSellersQueryResult;
    "*[_type == \"page\"] {\n      \"sections\": sections[] {\n        _type,\n        \"section\": section[_key == $lang][0].value,\n        \"title\": title[_key == $lang][0].value,\n         features\n    \n      }[_type == \"service\"][0]\n    }[0].sections": ServiceQueryResult;
    "*[_type == \"page\"] {\n      \"sections\": sections[] {\n        _type,\n        \"section\": section[_key == $lang][0].value,\n        \"title\": title[_key == $lang][0].value,\n         description,\n      email,\n      phone,\n      address\n    \n      }[_type == \"info\"][0]\n    }[0].sections": InfoQueryResult;
    "\n  *[_type == \"contact\"] {\n    name,\n    email,\n    phone,\n    address,\n  }\n": ContactQueryResult;
    "\n  *[_type == \"page\"] {\n    \"sections\": sections[] {\n      _type,\n      \"title\": title[_key == $lang][0].value,\n    }\n  }[0].sections\n": SectionsQueryResult;
  }
}
