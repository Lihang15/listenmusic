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

let IconMeirituijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M337.92 184.32c9.9328 0 18.78016 4.72064 24.39168 12.04224 79.40096 26.12224 132.64896 92.4672 159.744 199.05536 5.46816 12.60544-106.26048-110.20288-153.41568-104.64256v448.19456c1.61792 47.90272-47.49312 95.20128-115.48672 108.72832-72.86784 14.47936-139.8272-15.3088-149.56544-66.56-9.728-51.24096 41.44128-104.51968 114.29888-119.00928 32.4608-6.4512 63.744-4.11648 89.32352 4.98688L307.2 215.04a30.72 30.72 0 0 1 30.72-30.72z m552.96 563.2a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z m0-102.4a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84zM675.84 296.96c11.23328 0 21.06368 6.03136 26.4192 15.03232 2.1504 1.28 4.1984 2.85696 6.06208 4.7104l101.376 101.376a30.72 30.72 0 1 1-43.45856 43.44832L706.56 401.84832V542.72h184.32a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h174.08V401.83808l-59.67872 59.6992a30.72 30.72 0 0 1-41.984 1.37216l-1.46432-1.3824a30.72 30.72 0 0 1-1.3824-41.97376l1.3824-1.47456 101.376-101.376c1.85344-1.85344 3.8912-3.4304 6.06208-4.7104A30.6688 30.6688 0 0 1 675.84 296.96z"
        fill={getIconColor(color, 0, '#FAB005')}
      />
    </Svg>
  );
};

IconMeirituijian.defaultProps = {
  size: 18,
};

IconMeirituijian = React.memo ? React.memo(IconMeirituijian) : IconMeirituijian;

export default IconMeirituijian;
