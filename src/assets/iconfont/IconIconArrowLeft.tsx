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

let IconIconArrowLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M669.472 162.88l49.504 49.696-294.56 300.48 297.024 297.952-49.088 50.08-346.56-347.616z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconArrowLeft.defaultProps = {
  size: 18,
};

IconIconArrowLeft = React.memo ? React.memo(IconIconArrowLeft) : IconIconArrowLeft;

export default IconIconArrowLeft;
