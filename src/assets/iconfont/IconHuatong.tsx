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

let IconHuatong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.5 630.64c87.75 0 159.14-71.39 159.14-159.14V258.54c0-87.75-71.39-159.14-159.14-159.14s-159.14 71.39-159.14 159.14V471.5c0 87.76 71.39 159.14 159.14 159.14z m-99.14-372.1c0-26.34 10.35-51.19 29.15-69.99s43.65-29.15 69.99-29.15 51.19 10.35 69.99 29.15 29.15 43.65 29.15 69.99V471.5c0 26.34-10.35 51.19-29.15 69.99s-43.65 29.15-69.99 29.15-51.19-10.35-69.99-29.15-29.15-43.65-29.15-69.99V258.54z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M696.65 660.31c49.37-49.37 76.55-114.76 76.55-184.15 0-16.57-13.43-30-30-30s-30 13.43-30 30c0 53.35-20.95 103.68-58.98 141.72-38.04 38.04-88.37 58.98-141.72 58.98-53.35 0-103.68-20.95-141.72-58.98-38.03-38.03-58.98-88.36-58.98-141.72 0-16.57-13.43-30-30-30s-30 13.43-30 30c0 69.38 27.19 134.78 76.56 184.15 42.18 42.18 96.07 68.15 154.15 74.82v127.68h-99.14c-16.57 0-30 13.43-30 30s13.43 30 30 30h258.28c16.57 0 30-13.43 30-30s-13.43-30-30-30H542.5V735.14c58.07-6.68 111.96-32.65 154.15-74.83z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconHuatong.defaultProps = {
  size: 18,
};

IconHuatong = React.memo ? React.memo(IconHuatong) : IconHuatong;

export default IconHuatong;
