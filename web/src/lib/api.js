import { sanity } from './sanity.js';
import { site } from './fragments';

export async function getStaticPage(payload) {
	const query = /* groq */ `
    {
      'page': ${payload},
      ${site}
    }
  `;

	return await sanity.fetch(query);
}

export async function getPage(slug) {
	const query = /* groq */ `
    {
      'page': *[_type == 'post' && slug.current == $slug][0] {
        ...,
        slug,
      },
      ${site}
    }
  `;

	return await sanity.fetch(query, { slug });
}

export async function getCategoryPages(slug, count, offset) {
  const query = /* groq */ `
    {
      'page': *[_type == 'post' && category->slug.current == $slug][$from...$to] {
        author-> {
          name
        },
        category-> {
          'image': image.asset->,
          slug,
          title
        },
        date,
        slug,
        title
      },
      'count': count(*[_type == 'post' && category->slug.current == $slug && !(_id in path('drafts.**'))]),
      ${site}
    }
  `;

  return await sanity.fetch(query, { slug, from: count, to: offset });
}
