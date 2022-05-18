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

let IconSousuo1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M964.266667 942.933333l-221.866667-238.933333c64-72.533333 106.666667-166.4 106.666667-273.066667 0-226.133333-183.466667-409.6-409.6-409.6S29.866667 204.8 29.866667 430.933333s183.466667 409.6 409.6 409.6c89.6 0 170.666667-29.866667 238.933333-76.8l221.866667 238.933334c8.533333 8.533333 21.333333 12.8 29.866666 12.8 8.533333 0 21.333333-4.266667 29.866667-12.8 21.333333-17.066667 21.333333-42.666667 4.266667-59.733334z m-844.8-512c0-179.2 145.066667-324.266667 324.266666-324.266666S768 251.733333 768 430.933333s-145.066667 324.266667-324.266667 324.266667-324.266667-149.333333-324.266666-324.266667z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </Svg>
  );
};

IconSousuo1.defaultProps = {
  size: 18,
};

IconSousuo1 = React.memo ? React.memo(IconSousuo1) : IconSousuo1;

export default IconSousuo1;
