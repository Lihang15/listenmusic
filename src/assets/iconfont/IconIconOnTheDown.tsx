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

let IconIconOnTheDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M84.48 375.104C71.456 362.528 64.096 345.248 64 327.168 65.696 286.368 100 254.592 140.8 256.032 161.92 255.936 182.176 264.288 197.12 279.2L512 591.904 826.88 279.2C841.824 264.288 862.08 255.936 883.2 256.032 924 254.592 958.304 286.368 960 327.168 959.904 345.248 952.544 362.528 939.52 375.104L568.32 744.96C537.056 775.68 486.944 775.68 455.68 744.96L84.48 375.104Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconOnTheDown.defaultProps = {
  size: 18,
};

IconIconOnTheDown = React.memo ? React.memo(IconIconOnTheDown) : IconIconOnTheDown;

export default IconIconOnTheDown;
