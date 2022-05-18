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

let IconShuaxin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1030 1024" width={size} height={size} {...rest}>
      <Path
        d="M1004.8 435.2c-12.8-12.8-19.2-12.8-32-12.8-6.4 0-19.2 6.4-19.2 12.8l-57.6 57.6c-6.4-108.8-57.6-211.2-128-288-172.8-172.8-454.4-179.2-640-12.8-166.4 166.4-166.4 454.4 0 640 89.6 89.6 198.4 140.8 307.2 147.2h25.6c108.8 0 204.8-44.8 281.6-121.6 25.6-19.2 25.6-51.2 12.8-70.4v-6.4c-12.8-12.8-19.2-12.8-32-12.8s-19.2 6.4-25.6 12.8c-134.4 134.4-364.8 134.4-505.6 0-70.4-70.4-108.8-166.4-108.8-262.4 0-96 38.4-185.6 108.8-249.6 134.4-134.4 364.8-134.4 505.6 0 64 64 102.4 140.8 108.8 236.8l-57.6-57.6c-12.8-12.8-25.6-12.8-32-12.8-6.4 0-19.2 6.4-19.2 12.8-12.8 12.8-12.8 19.2-12.8 32 0 6.4 6.4 19.2 12.8 19.2l128 128c12.8 12.8 25.6 12.8 32 12.8 6.4 0 19.2-6.4 19.2-12.8l140.8-140.8c12.8-12.8 12.8-25.6 12.8-32-12.8-6.4-19.2-12.8-25.6-19.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShuaxin.defaultProps = {
  size: 18,
};

IconShuaxin = React.memo ? React.memo(IconShuaxin) : IconShuaxin;

export default IconShuaxin;
