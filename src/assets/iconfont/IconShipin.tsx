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

let IconShipin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M891.2 760H132.8c-38.4 0-68.8-30.4-68.8-68.8V220.8c0-38.4 30.4-68.8 68.8-68.8h758.4c38.4 0 68.8 30.4 68.8 68.8v470.4c0 38.4-30.4 68.8-68.8 68.8z m-758.4-576c-20.8 0-36.8 16-36.8 36.8v470.4c0 20.8 16 36.8 36.8 36.8h758.4c20.8 0 36.8-16 36.8-36.8V220.8c0-20.8-16-36.8-36.8-36.8H132.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M448 636.8s-1.6 0 0 0c-19.2 0-35.2-8-46.4-19.2-11.2-12.8-17.6-28.8-17.6-46.4V342.4c0-12.8 3.2-27.2 12.8-38.4 9.6-14.4 24-22.4 41.6-25.6 17.6-3.2 33.6 1.6 48 11.2l161.6 113.6c6.4 4.8 12.8 9.6 16 16 20.8 30.4 14.4 72-16 92.8l-161.6 113.6c-12.8 8-25.6 11.2-38.4 11.2z m0-328h-4.8c-8 1.6-16 6.4-20.8 12.8-4.8 6.4-6.4 12.8-6.4 19.2v230.4c0 9.6 3.2 17.6 9.6 22.4 6.4 6.4 14.4 9.6 22.4 9.6 6.4 0 14.4-1.6 19.2-6.4l161.6-113.6c8-4.8 12.8-12.8 14.4-22.4s0-19.2-6.4-25.6c-1.6-3.2-4.8-6.4-8-8l-161.6-113.6c-6.4-3.2-12.8-4.8-19.2-4.8zM302.4 857.6c-8 0-14.4-6.4-16-14.4-1.6-8 4.8-17.6 12.8-17.6l219.2-32h4.8l227.2 32c8 1.6 14.4 9.6 14.4 17.6s-9.6 14.4-17.6 14.4l-224-32-216 32h-4.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M528 824c-9.6 0-16-6.4-16-16v-32c0-9.6 6.4-16 16-16s16 6.4 16 16v32c0 9.6-6.4 16-16 16z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconShipin.defaultProps = {
  size: 18,
};

IconShipin = React.memo ? React.memo(IconShipin) : IconShipin;

export default IconShipin;
