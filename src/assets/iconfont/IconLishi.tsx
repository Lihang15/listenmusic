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

let IconLishi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M252.8 220.8h22.4c19.2 0 33.6-14.4 33.6-32V56c0-19.2-14.4-33.6-33.6-33.6h-22.4c-19.2 0-33.6 14.4-33.6 33.6v132.8c0 17.6 14.4 32 33.6 32z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
      <Path
        d="M913.6 132.8h-67.2v56c0 41.6-33.6 78.4-78.4 78.4h-22.4c-41.6 0-78.4-33.6-78.4-78.4V132.8H355.2v56c0 41.6-33.6 78.4-78.4 78.4h-22.4c-41.6 0-78.4-33.6-78.4-78.4V132.8H110.4c-38.4 0-67.2 28.8-67.2 67.2v734.4c0 38.4 28.8 67.2 67.2 67.2H912c38.4 0 67.2-28.8 68.8-67.2V200c0-36.8-28.8-67.2-67.2-67.2zM110.4 934.4V355.2H912s0 579.2 1.6 579.2H110.4z"
        fill={getIconColor(color, 1, '#2C2C2C')}
      />
      <Path
        d="M744 220.8h22.4c19.2 0 33.6-14.4 33.6-32V56c0-19.2-14.4-33.6-33.6-33.6h-22.4c-19.2 0-33.6 14.4-33.6 33.6v132.8c0 17.6 14.4 32 33.6 32zM486.4 494.4v164.8l81.6 89.6 36.8-33.6-68.8-73.6v-147.2z"
        fill={getIconColor(color, 2, '#2C2C2C')}
      />
      <Path
        d="M756.8 590.4c-14.4-62.4-54.4-116.8-110.4-153.6-59.2-35.2-126.4-46.4-188.8-32-38.4 8-75.2 27.2-105.6 52.8-14.4 12.8-27.2 25.6-38.4 40v-25.6h-49.6v128h129.6v-48h-56c27.2-49.6 73.6-86.4 129.6-99.2 52.8-12.8 105.6-1.6 150.4 25.6 46.4 27.2 78.4 72 88 121.6 11.2 49.6 4.8 102.4-25.6 148.8-27.2 44.8-72 75.2-123.2 88-52.8 12.8-105.6 1.6-150.4-25.6-46.4-27.2-78.4-72-88-121.6l-48 8c14.4 62.4 54.4 116.8 110.4 153.6 40 25.6 86.4 38.4 132.8 38.4 19.2 0 38.4-1.6 56-6.4 65.6-14.4 120-54.4 155.2-108.8 35.2-54.4 46.4-120 32-184z"
        fill={getIconColor(color, 3, '#2C2C2C')}
      />
    </Svg>
  );
};

IconLishi.defaultProps = {
  size: 18,
};

IconLishi = React.memo ? React.memo(IconLishi) : IconLishi;

export default IconLishi;
