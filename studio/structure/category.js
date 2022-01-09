import S from '@sanity/desk-tool/structure-builder';

import { BiGridAlt } from 'react-icons/bi';

export const CategoryMenuItem = S.listItem()
  .title('Categories')
  .icon(BiGridAlt)
  .child(S.documentTypeList('category'));
