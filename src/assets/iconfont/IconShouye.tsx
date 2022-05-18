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

let IconShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1199 1024" width={size} height={size} {...rest}>
      <Path
        d="M599.883366 36.485018 14.397338 622.032998l237.705 0 0 383.981 222.536 0c38.057984-82.68503 101.058048-151.528038 179.386982-196.925952-0.27095-17.363968-0.420966-36.896051-0.134963-62.398976-90.196992 44.91305-164.726989 116.515021-213.204992 204.47703L306.957344 951.166101 306.957344 567.178 143.639344 567.178l455.873024-455.873024L1055.391334 567.178035 892.074344 567.178035l0 383.989L745.790344 951.167035l0 54.848 201.139 0L946.929344 622.033l237.705 0L599.883366 36.485018z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
