import S from '@sanity/desk-tool/structure-builder';

import { BiBookContent } from 'react-icons/bi';

export const PostMenuItem = S.listItem()
  .title('Post Template')
  .icon(BiBookContent)
  .child(S.documentTypeList('post'));
