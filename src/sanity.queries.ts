import { defineQuery } from "groq";

const localeString = <TKey extends string>(
  key: TKey
): `${TKey}[_key == $lang][0].value` => `${key}[_key == $lang][0].value`;

const defineSection = <TSection extends string, TQuery extends string>(
  section: TSection,
  query: TQuery
): `*[_type == "page"] {
      "sections": sections[] {
        _type,
        "section": section[_key == $lang][0].value,
        "title": title[_key == $lang][0].value,
        ${TQuery}
      }[_type == "${TSection}"][0]
    }[0].sections` =>
  `*[_type == "page"] {
      "sections": sections[] {
        _type,
        "section": section[_key == $lang][0].value,
        "title": title[_key == $lang][0].value,
        ${query}
      }[_type == "${section}"][0]
    }[0].sections`;

export const methodQuery = defineQuery(
  defineSection(
    "method",
    ` "steps": coalesce(steps[] {
        title,
        description
      }, []),
    `
  )
);

export const coachingQuery = defineQuery(
  defineSection(
    "coaching",
    ` "description": ${localeString("description")},
      "items": coalesce(${localeString("items[].title")}, []),
    `
  )
);

export const buyersSellersQuery = defineQuery(
  defineSection(
    "buyers-sellers",
    ` description,
      buyers {
        title,
        items,
      },
      sellers {
        title,
        items,
      }
    `
  )
);

export const serviceQuery = defineQuery(
  defineSection(
    "service",
    ` features
    `
  )
);

export const infoQuery = defineQuery(
  defineSection(
    "info",
    ` description,
      email,
      phone,
      address
    `
  )
);

export const contactQuery = defineQuery(`
  *[_type == "contact"] {
    name,
    email,
    phone,
    address,
  }
`);

export const sectionsQuery = defineQuery(`
  *[_type == "page"] {
    "sections": sections[] {
      _type,
      "title": ${localeString("section")},
    }
  }[0].sections
`);
