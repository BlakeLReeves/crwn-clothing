import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenutItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenutItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      imageUrl={imageUrl}
      className='background-image'
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenutItemContainer>
);

export default withRouter(MenuItem);
