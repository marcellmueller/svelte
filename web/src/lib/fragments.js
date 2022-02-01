export const site = /* groq */ `
'site': {
  'categories': *[_type == 'category']  {
   slug,
   title
  },
}
`;