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

let IconXiangxia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M947.7 286.1c-15.6-15.6-40.9-15.6-56.6 0L512 665.2 132.9 286.1c-15.6-15.6-40.9-15.6-56.6 0s-15.6 40.9 0 56.6l386.6 386.6c13.5 13.5 31.3 20.3 49.1 20.3s35.6-6.8 49.1-20.3l386.6-386.6c15.6-15.6 15.6-41 0-56.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXiangxia.defaultProps = {
  size: 18,
};

IconXiangxia = React.memo ? React.memo(IconXiangxia) : IconXiangxia;

export default IconXiangxia;
