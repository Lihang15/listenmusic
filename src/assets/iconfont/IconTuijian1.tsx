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

let IconTuijian1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M655.35510254 389.71392823c57.43103028 0 113.4942627-0.3213501 169.53277588 0.25543212 12.43377685-0.0164795 24.79339599 1.96929932 36.60095215 5.87493897 41.42944336 18.11920166 64.73144531 62.57263184 56.06323242 106.96014404-20.65704346 105.8972168-42.76428223 211.49780273-63.36364746 317.43621826-2.46368408 28.83911133-15.62255859 55.69244385-36.88110352 75.31951904a69.69177247 69.69177247 0 0 1-43.39050293 18.30871582c-148.99932862-0.13183594-297.99865723-0.13183594-447.01446533 0-2.10113526 0-4.21051026-0.29663086-7.86071778-0.60974121-0.28015137-5.06744385-0.78277588-9.83825684-0.78277587-14.72442626 0.14831543-155.50048828 0.28015137-310.95153809 0.37902832-466.36138917 0-10.14312744 2.33184815-13.97460938 12.31842041-15.74615478 82.83416748-14.56787109 151.72668458-97.16308594 158.13720703-188.17932129a230.60577393 230.60577393 0 0 1 11.7086792-73.69628906c14.8727417-40.98449708 60.15014648-62.14416504 101.11816406-47.25494385a78.87579346 78.87579346 0 0 1 30.21514893 19.75067138 114.61157227 114.61157227 0 0 1 30.84136963 64.29473878 461.37634278 461.37634278 0 0 1-6.99554444 190.65124511c-0.41198731 2.57080078-0.67565918 5.17456055-0.78277587 7.77832031l0.15655516-0.05767821z m-380.84106446 73.16894531c0-26.39190674-13.03527833-41.67663575-36.66687011-42.17926026-31.2286377-0.68389893-62.49847412-0.75805664-93.77655029 0-19.58587646-0.3213501-35.74401856 15.30944825-36.06536866 34.90356445-0.03295898 1.74682617 0.07415771 3.49365234 0.29663086 5.23223878-0.2142334 137.69439697-0.2142334 275.40527344 0 413.1161499-2.40600586 19.45404052 11.40380859 37.17773438 30.85784913 39.59197997 2.06817627 0.25543213 4.16107177 0.32958984 6.25396727 0.22247315 29.09454346 0.23071289 58.29620362 0 87.30834962 0s41.76727295-13.76861573 41.79199219-46.21673584V666.57763672c0.04943848-67.82958984 0.25543213-135.77453614 0-203.69476318z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTuijian1.defaultProps = {
  size: 18,
};

IconTuijian1 = React.memo ? React.memo(IconTuijian1) : IconTuijian1;

export default IconTuijian1;