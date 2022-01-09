import React from 'react';
import { BiUser } from 'react-icons/bi';

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: BiUser,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        },
      ],
    },
  ],
};
