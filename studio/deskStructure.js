import S from '@sanity/desk-tool/structure-builder';

import {
  AuthorMenuItem,
  CategoryMenuItem,
  HomeMenuItem,
  PageMenuItem,
  PostMenuItem,
} from './structure/index';

export default () =>
  S.list()
    .title('Content')
    .items([
      AuthorMenuItem,
      CategoryMenuItem,
      HomeMenuItem,
      PageMenuItem,
      PostMenuItem,
    ]);
