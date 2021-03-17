import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from './collection-preview.styles';

const CollectionPreview = ({ title, routeName, items, history, match }) => (
  <CollectionPreviewContainer>
    <Title>
      <span onClick={() => history.push(`${match.url}/${routeName}`)}>
        {title.toUpperCase()}
      </span>
    </Title>
    <Preview>
      {items
        .filter((_item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
