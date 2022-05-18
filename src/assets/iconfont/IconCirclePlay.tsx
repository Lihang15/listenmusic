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

let IconCirclePlay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M703.25 492.627l0.203-0.247-3.555-2.025c-0.54-0.248-0.968-0.653-1.53-0.878l-278.865-159.367-0.202 0.225c-3.465-2.767-7.695-4.68-12.465-4.68-11.182 0-20.272 9.067-20.272 20.272v324.518c0 11.205 9.090 20.295 20.272 20.295 4.77 0 9-1.912 12.465-4.68l0.202 0.248 278.865-159.368c0.563-0.225 0.968-0.54 1.507-0.855l3.578-2.070-0.203-0.157c4.635-3.758 7.83-9.225 7.83-15.637s-3.195-11.858-7.83-15.593M427.107 635.84v-255.218l223.29 127.598-223.29 127.62zM508.243 62c-246.465 0-446.243 199.778-446.243 446.243 0 246.443 199.778 446.243 446.243 446.243 246.443 0 446.243-199.8 446.243-446.243-0.022-246.465-199.822-446.243-446.243-446.243M508.243 913.895c-224.032 0-405.675-181.62-405.675-405.675s181.643-405.675 405.675-405.675c224.055 0 405.675 181.62 405.675 405.675s-181.62 405.675-405.675 405.675z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCirclePlay.defaultProps = {
  size: 18,
};

IconCirclePlay = React.memo ? React.memo(IconCirclePlay) : IconCirclePlay;

export default IconCirclePlay;
