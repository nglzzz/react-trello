import React from 'react';
import * as PropTypes from 'prop-types';
import {
  CardIcon,
  HeaderInline,
  HeaderInlineText,
  SubscriptionIcon,
  WindowHeader,
  WindowTitle
} from './styled.js';

export const Header = ({title, isSubscribed}) => {
  return (
    <WindowHeader>
      <CardIcon />
      <WindowTitle defaultValue={title} />

      <HeaderInline>
        <HeaderInlineText>in list <a href="/#">INFO</a></HeaderInlineText>
        {isSubscribed && <SubscriptionIcon />}
      </HeaderInline>
    </WindowHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool
};

Header.defaultProps = {
  title: '',
  isSubscribed: false
};
