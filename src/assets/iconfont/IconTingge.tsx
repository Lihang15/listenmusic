/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconTingge: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M783.4 594.6c-5.4 0-9.7-4.3-9.7-9.7V473.1c0-144.3-117.4-261.7-261.7-261.7S250.3 328.8 250.3 473.1v111.8c0 5.4-4.3 9.7-9.7 9.7-5.4 0-9.7-4.3-9.7-9.7V473.1C230.9 318.1 357 192 512 192s281.1 126.1 281.1 281.1v111.8c0 5.4-4.4 9.7-9.7 9.7z"
        fill={getIconColor(color, 0, '#603813')}
      />
      <Path
        d="M328.4 822.3c-34.9 0-63.4-28.5-63.4-63.4V583c0-34.9 28.5-63.4 63.4-63.4s63.4 28.5 63.4 63.4v175.9c0 34.9-28.5 63.4-63.4 63.4z"
        fill={getIconColor(color, 1, '#F9C933')}
      />
      <Path
        d="M328.4 832c-40.3 0-73.1-32.8-73.1-73.1V583c0-40.3 32.8-73.1 73.1-73.1s73.1 32.8 73.1 73.1v175.9c0 40.3-32.8 73.1-73.1 73.1z m0-302.7c-29.6 0-53.7 24.1-53.7 53.7v175.9c0 29.6 24.1 53.7 53.7 53.7s53.7-24.1 53.7-53.7V583c0-29.7-24.1-53.7-53.7-53.7z"
        fill={getIconColor(color, 2, '#603813')}
      />
      <Path
        d="M265 758.5h-38.2c-26 0-47.3-21.3-47.3-47.3v-80.7c0-26 21.3-47.3 47.3-47.3H265v175.3z"
        fill={getIconColor(color, 3, '#F9C933')}
      />
      <Path
        d="M265 768.2h-37c-32 0-58.1-26.1-58.1-58.1v-78.4c0-32 26.1-58.1 58.1-58.1h37c5.4 0 9.7 4.3 9.7 9.7v175.2c0 5.4-4.3 9.7-9.7 9.7zM228 593c-21.4 0-38.7 17.4-38.7 38.7v78.4c0 21.4 17.4 38.7 38.7 38.7h27.4V593H228z"
        fill={getIconColor(color, 4, '#603813')}
      />
      <Path
        d="M695.6 822.3c34.9 0 63.4-28.5 63.4-63.4V583c0-34.9-28.5-63.4-63.4-63.4s-63.4 28.5-63.4 63.4v175.9c0 34.9 28.5 63.4 63.4 63.4z"
        fill={getIconColor(color, 5, '#F9C933')}
      />
      <Path
        d="M695.6 832c-40.3 0-73.1-32.8-73.1-73.1V583c0-40.3 32.8-73.1 73.1-73.1s73.1 32.8 73.1 73.1v175.9c0 40.3-32.8 73.1-73.1 73.1z m0-302.7c-29.6 0-53.7 24.1-53.7 53.7v175.9c0 29.6 24.1 53.7 53.7 53.7s53.7-24.1 53.7-53.7V583c0-29.7-24.1-53.7-53.7-53.7z"
        fill={getIconColor(color, 6, '#603813')}
      />
      <Path
        d="M759 758.5h38c26.1 0 47.5-21.4 47.5-47.5v-80.2c0-26.1-21.4-47.5-47.5-47.5h-38v175.2z"
        fill={getIconColor(color, 7, '#F9C933')}
      />
      <Path
        d="M796 768.2h-37c-5.4 0-9.7-4.3-9.7-9.7V583.3c0-5.4 4.3-9.7 9.7-9.7h37c32 0 58.1 26.1 58.1 58.1v78.4c0 32.1-26 58.1-58.1 58.1z m-27.3-19.3H796c21.4 0 38.7-17.4 38.7-38.7v-78.4c0-21.4-17.4-38.7-38.7-38.7h-27.4v155.8z"
        fill={getIconColor(color, 8, '#603813')}
      />
      <Path
        d="M569.147502 402.970885a20.5 14.7 29.046 1 0 14.274042-25.702368 20.5 14.7 29.046 1 0-14.274042 25.702368Z"
        fill={getIconColor(color, 9, '#54BCE8')}
      />
      <Path
        d="M581.6 416.1c-5.7 0-11.7-1.6-17.2-4.6-14.8-8.2-21.2-24-14.5-36 3.4-6.1 9.8-10.2 17.7-11.1 6.7-0.8 14.1 0.8 20.6 4.4 6.6 3.6 11.8 9 14.6 15.1 3.4 7.1 3.3 14.7-0.1 20.9-3.4 6.2-9.9 10.2-17.7 11.1-1.1 0.1-2.3 0.2-3.4 0.2zM571 383.5c-0.4 0-0.8 0-1.2 0.1-1.5 0.2-2.6 0.7-3 1.3-0.7 1.3 0.9 6.3 7 9.7 3 1.7 6.3 2.4 9 2.1 1.5-0.2 2.6-0.7 3-1.3 0.3-0.6 0.1-1.8-0.5-3.2-1.2-2.5-3.5-4.8-6.5-6.5-2.6-1.4-5.4-2.2-7.8-2.2z"
        fill={getIconColor(color, 10, '#603813')}
      />
      <Path
        d="M599.5 400.2c-2.2 0-4.5-0.8-6.3-2.3-4.1-3.5-4.5-9.6-1-13.7l33.3-38.8c2.6-3.1 6.9-4.2 10.6-2.8 3.8 1.4 6.3 4.9 6.4 9 0.1 6.6 2.7 16.9 6.8 18.1 5.1 1.5 8.1 6.8 6.6 12-1.5 5.1-6.8 8.1-12 6.6-8.4-2.4-13.4-8.8-16.4-15.6l-20.7 24.1c-1.9 2.3-4.6 3.4-7.3 3.4z"
        fill={getIconColor(color, 11, '#603813')}
      />
      <Path
        d="M452 668.4a28.1 20.2 0 1 0 56.2 0 28.1 20.2 0 1 0-56.2 0Z"
        fill={getIconColor(color, 12, '#ED693C')}
      />
      <Path
        d="M480 698.3c-21.2 0-37.8-13.1-37.8-29.9 0-16.7 16.6-29.9 37.8-29.9 21.2 0 37.8 13.1 37.8 29.9 0 16.8-16.6 29.9-37.8 29.9z m0-40.4c-10.5 0-18.4 5.5-18.4 10.5s7.9 10.5 18.4 10.5c10.5 0 18.4-5.5 18.4-10.5 0.1-4.9-7.8-10.5-18.4-10.5z"
        fill={getIconColor(color, 13, '#603813')}
      />
      <Path
        d="M508.2 663.2c-0.6 0-1.3-0.1-2-0.2-5.2-1.1-8.6-6.2-7.5-11.4l14.1-68.6c0.8-3.9 4-7 7.9-7.6 4-0.6 7.9 1.2 9.9 4.7 4.1 7 15.3 20.8 24.1 18.8 5.2-1.2 10.4 2.1 11.6 7.3 1.2 5.2-2.1 10.4-7.3 11.6-12.6 2.9-23.6-3.4-31.5-10.8l-9.9 48.5c-0.9 4.5-4.9 7.7-9.4 7.7z"
        fill={getIconColor(color, 14, '#603813')}
      />
    </Svg>
  );
};

IconTingge.defaultProps = {
  size: 18,
};

IconTingge = React.memo ? React.memo(IconTingge) : IconTingge;

export default IconTingge;
