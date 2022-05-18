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

let IconDiyiyeshouyeshangyishou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M357.3 324v376c0 17.6-14.4 32-32 32s-32-14.4-32-32V324c0-17.6 14.4-32 32-32s32 14.4 32 32zM400.5 512c0 9 4.4 17.4 11.7 22.6l275.2 192.6c8.4 5.9 19.4 6.5 28.5 1.9 9.1-4.7 14.8-14.1 14.8-24.4V319.4c0-10.3-5.7-19.6-14.8-24.4-9.1-4.7-20.1-4-28.5 1.9L412.3 489.5a27.29 27.29 0 0 0-11.8 22.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDiyiyeshouyeshangyishou.defaultProps = {
  size: 18,
};

IconDiyiyeshouyeshangyishou = React.memo ? React.memo(IconDiyiyeshouyeshangyishou) : IconDiyiyeshouyeshangyishou;

export default IconDiyiyeshouyeshangyishou;
