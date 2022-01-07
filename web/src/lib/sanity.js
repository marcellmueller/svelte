import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';

// const sanity = sanityClient({
// 	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
// 	dataset: import.meta.env.VITE_SANITY_DATASET,
// 	apiVersion: '2021-03-25',
// 	useCdn: true
// });

const sanity = sanityClient({
	projectId: '6m7gmup3',
	dataset: 'production',
	apiVersion: '2021-03-25',
	useCdn: true
});
const sanityImageBuilder = sanityImage(sanity);
const imgUrl = (source) => sanityImageBuilder.image(source);

export { sanity, imgUrl, sanityImageBuilder };
