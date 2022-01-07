import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Documents
import page from './page/page';
import pageHome from './page/page-home';

// Types
import blockContent from './types/blockContent';

export default createSchema({
  // We name our schema
  name: 'default',

  types: schemaTypes.concat([
    // Documents
    page,
    pageHome,

    // Types
    blockContent,
  ]),
});
