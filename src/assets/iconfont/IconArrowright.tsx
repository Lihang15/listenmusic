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

let IconArrowright: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M317.846769 957.296943c6.289728 0 12.576383-2.398963 17.376358-7.19689l392.936471-392.937495c25.550034-25.550034 25.550034-67.121826 0-92.671861-0.12389-0.12389-0.249828-0.246756-0.375766-0.367575l-407.301582-390.221127c-9.799606-9.388005-25.355496-9.056266-34.744525 0.744365s-9.056266 25.355496 0.744365 34.744525l407.071208 389.999968c3.002032 3.076775 4.652535 7.130337 4.652535 11.436799 0 4.375062-1.704769 8.490057-4.798951 11.583215l-392.936471 392.936471c-9.595853 9.596877-9.595853 25.154815 0 34.751692C305.268338 954.896956 311.559089 957.296943 317.846769 957.296943z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconArrowright.defaultProps = {
  size: 18,
};

IconArrowright = React.memo ? React.memo(IconArrowright) : IconArrowright;

export default IconArrowright;
