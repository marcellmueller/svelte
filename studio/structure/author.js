import S from '@sanity/desk-tool/structure-builder';

import { BiUser } from 'react-icons/bi';

export const AuthorMenuItem = S.listItem()
  .title('Authors')
  .icon(BiUser)
  .child(S.documentTypeList('author'));
