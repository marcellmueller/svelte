import { sanity } from './sanity.js';

export async function getStaticPage(payload) {
	const query = /* groq */ `
    {
      'page': ${payload},
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
    }
  `;

	return await sanity.fetch(query, { slug });
}
