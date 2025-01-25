import { defineQuery } from "groq";

const localeString = <TKey extends string>(
  key: TKey
): `${TKey}[_key == $lang][0].value` => `${key}[_key == $lang][0].value`;

const defineSection = <TSection extends string, TQuery extends string>(
  section: TSection,
  query: TQuery
): `*[_type == "page"] {
      "section": sections[] {
        _type,
        "section": section[_key == $lang][0].value,
        "title": title[_key == $lang][0].value,
        ${TQuery}
      }[_type == "${TSection}"][0]
    }[0].section` =>
  `*[_type == "page"] {
      "section": sections[] {
        _type,
        "section": section[_key == $lang][0].value,
        "title": title[_key == $lang][0].value,
        ${query}
      }[_type == "${section}"][0]
    }[0].section`;

export const methodQuery = defineQuery(
  defineSection(
    "method",
    ` "description": ${localeString("description")},
      "steps": coalesce(steps[] {
        "title": ${localeString("title")},
        "description": ${localeString("description")},
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
    ` "description": ${localeString("description")},
      buyers {
        "title": ${localeString("title")},
        items[] {
         "title": ${localeString("title")},
          "description": ${localeString("description")},
        }
      },
      sellers {
        "title": ${localeString("title")},
        items[] {
          "title": ${localeString("title")},
          "description": ${localeString("description")},
        }
      }
    `
  )
);

export const serviceQuery = defineQuery(
  defineSection(
    "service",
    ` features[] {
        icon,
        "title": ${localeString("title")},
        "description": ${localeString("description")},
      }
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
