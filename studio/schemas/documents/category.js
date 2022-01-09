import { BiGridAlt } from 'react-icons/bi';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: BiGridAlt,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
