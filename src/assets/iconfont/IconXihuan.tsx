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

let IconXihuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M895.5 332.7c-4.4-74.5-39-131.2-97.4-159.7-78.1-38.1-184.6-17.4-292.3 56.7-74.3-49.3-146.6-75.3-209.2-75.3-59.6 0-107 23.4-137 67.8-44 65-41.9 167.7 5.5 274.7 39 87.8 127.2 222 326.5 362.7l14.1 10 14.4-9.5C649.3 774.8 748 681.9 813.4 583.8c73.7-110.3 85.3-197.4 82.1-251.1z m-124.1 223c-59.2 88.8-148.2 173.7-264.7 252.5-179.9-130.3-259.8-251.9-295.3-331.8-40.3-90.9-44-175.3-9.9-225.8 20.5-30.2 52.4-45.5 95.1-45.5 51.9 0 116.4 23.8 181.6 67.1l28.1 18.7 27.8-19.2c92.4-63.7 180.5-83.1 241.8-53.2 41.2 20.1 65.8 61.7 69.1 117.2 2.7 46-7.8 121.4-73.6 220z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXihuan.defaultProps = {
  size: 18,
};

IconXihuan = React.memo ? React.memo(IconXihuan) : IconXihuan;

export default IconXihuan;
