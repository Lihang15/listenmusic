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

let IconShiting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 511.5C64 263.8 264.8 63 512.5 63S961 263.8 961 511.5V752c0 61.856-50.144 112-112 112h-56c-61.856 0-112-50.144-112-112V584c0-61.856 50.144-112 112-112h85.908C859.199 287.057 702.673 143 512.5 143S165.8 287.057 146.092 472H232c61.856 0 112 50.144 112 112v168c0 61.856-50.144 112-112 112h-56c-61.856 0-112-50.144-112-112V512v-0.25-0.25zM881 552h-88c-17.673 0-32 14.327-32 32v168c0 17.673 14.327 32 32 32h56c17.673 0 32-14.327 32-32V552z m-737 0v200c0 17.673 14.327 32 32 32h56c17.673 0 32-14.327 32-32V584c0-17.673-14.327-32-32-32h-88z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShiting.defaultProps = {
  size: 18,
};

IconShiting = React.memo ? React.memo(IconShiting) : IconShiting;

export default IconShiting;
