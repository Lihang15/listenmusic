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

let IconZanting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.5 888c208 0 376.7-168.5 376.7-376.3S719.6 135.4 511.5 135.4c-208 0-376.7 168.5-376.7 376.3 0.1 207.8 168.7 376.3 376.7 376.3z m0 70.9c-247.2 0-447.7-200.2-447.7-447.2S264.2 64.5 511.5 64.5c247.2 0 447.6 200.2 447.6 447.2 0.1 247-200.4 447.2-447.6 447.2z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M420 652c-19.8 0-36-16.2-36-36V408c0-19.8 16.2-36 36-36s36 16.2 36 36v208c0 19.8-16.2 36-36 36zM612 652c-19.8 0-36-16.2-36-36V408c0-19.8 16.2-36 36-36s36 16.2 36 36v208c0 19.8-16.2 36-36 36z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZanting.defaultProps = {
  size: 18,
};

IconZanting = React.memo ? React.memo(IconZanting) : IconZanting;

export default IconZanting;
