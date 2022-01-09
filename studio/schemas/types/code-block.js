import { BiCodeAlt } from 'react-icons/bi';

export default {
  title: 'Code Block',
  name: 'codeBlock',
  type: 'object',
  icon: BiCodeAlt,
  fields: [
    {
      name: 'code',
      title: 'Code Block',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Javascript', value: 'javascript' },
          { title: 'CSS', value: 'css' },
          { title: 'JSON', value: 'json' },
          { title: 'Svelte', value: 'svelte' },
          { title: 'Typescript', value: 'typescript' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
        validation: (Rule) => Rule.required(),
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Code Block',
      };
    },
  },
};
