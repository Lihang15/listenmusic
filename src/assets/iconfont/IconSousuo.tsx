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

let IconSousuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M712.5 645.3l161.2 161.2c26.3 26.3 32.7 63.1 14.2 81.6-18.5 18.5-55.3 12.2-81.6-14.2L645.1 712.7"
        fill={getIconColor(color, 0, '#FFEABB')}
      />
      <Path
        d="M859.7 928.6c-4.9 0-9.8-0.4-14.9-1.3-21.5-3.7-42.7-15.2-59.8-32.3L623.9 733.9l42.4-42.4 161.2 161.2c16.3 16.3 34.9 18.5 39.2 14.2 4.3-4.3 2.1-22.9-14.2-39.2L691.3 666.5l42.4-42.4 161.2 161.2c17.1 17.1 28.5 38.3 32.3 59.8 4.3 25-2.2 48.4-18.1 64.2-12.7 12.6-30.1 19.3-49.4 19.3z"
        fill={getIconColor(color, 1, '#F9C73D')}
      />
      <Path
        d="M443.3 806.5c-49 0-96.6-9.6-141.4-28.6-43.3-18.3-82.1-44.5-115.4-77.8-33.3-33.3-59.5-72.2-77.8-115.4C89.6 539.8 80 492.3 80 443.3s9.6-96.6 28.6-141.4c18.3-43.3 44.5-82.1 77.8-115.4s72.2-59.5 115.4-77.8C346.7 89.6 394.2 80 443.3 80s96.6 9.6 141.4 28.6c43.3 18.3 82.1 44.5 115.4 77.8 33.3 33.3 59.5 72.2 77.8 115.4 18.9 44.8 28.6 92.4 28.6 141.4s-9.6 96.6-28.6 141.4c-18.3 43.3-44.5 82.1-77.8 115.4-33.3 33.3-72.2 59.5-115.4 77.8-44.9 19.1-92.4 28.7-141.4 28.7z m0-666.5C276 140 140 276 140 443.3c0 167.2 136 303.2 303.2 303.2s303.2-136 303.2-303.2C746.5 276 610.5 140 443.3 140z"
        fill={getIconColor(color, 2, '#F9C73D')}
      />
    </Svg>
  );
};

IconSousuo.defaultProps = {
  size: 18,
};

IconSousuo = React.memo ? React.memo(IconSousuo) : IconSousuo;

export default IconSousuo;
