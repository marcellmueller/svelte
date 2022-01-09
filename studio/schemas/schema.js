import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Documents
import author from './documents/author';
import category from './documents/category';
import page from './page/page';
import pageHome from './page/page-home';
import post from './documents/post';

// Types
import blockContent from './types/block-content';
import codeBlock from './types/code-block';

export default createSchema({
  // We name our schema
  name: 'default',

  types: schemaTypes.concat([
    // Documents
    author,
    category,
    page,
    pageHome,
    post,

    // Types
    blockContent,
    codeBlock,
  ]),
});
