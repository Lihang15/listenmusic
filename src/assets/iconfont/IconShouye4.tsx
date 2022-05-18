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

let IconShouye4: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M950.896028 907.262252 799.11209 753.232157c-12.108782-12.302187-31.893384-12.434194-44.163849-0.325411-12.286838 12.103666-12.434194 31.878035-0.325411 44.163849l151.783938 154.030096c6.110161 6.206352 14.177907 9.31311 22.24463 9.31311 7.919367 0 15.839757-2.989077 21.919219-8.987698C962.857455 939.323459 963.004811 919.54909 950.896028 907.262252z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M884.039341 602.546226c30.65723-17.944697 39.848567-39.624463 42.156122-54.645574 2.26253-14.700817 0.147356-37.530778-22.773679-62.84021-44.830021-49.441039-119.794363-128.689964-142.222165-152.352897-5.586229-32.177863-24.425296-139.980101-37.535895-206.1655-4.869914-24.50716-19.174712-44.387953-39.248909-54.53915-19.896142-10.060123-43.38102-9.739828-66.149583 0.919952-61.168128 28.716019-160.318312 77.455069-189.568497 91.861174-32.803103-3.975545-145.002488-17.466814-211.030297-24.145933-21.283746-2.170432-42.202171 5.363148-57.380872 20.608364-15.971763 16.038278-24.099884 38.928614-21.751397 61.238736 7.060813 67.115584 20.99415 179.407066 25.055652 211.919551-14.049994 29.635971-62.535265 132.146693-90.514503 194.163141-13.837146 30.555923-8.352225 53.30402-1.311879 67.004043 9.378601 18.249643 27.083845 31.165814 48.677653 35.461653 64.594157 12.617365 177.831174 32.345686 211.060997 38.104853 23.967878 22.915919 104.747669 99.984179 153.59826 144.738475 19.759019 18.116613 38.028105 22.941502 51.890834 22.941502 3.360538 0 6.461155-0.284479 9.261944-0.726547 14.365172-2.292206 34.922371-11.127432 51.245128-40.153512 33.336246-59.07342 87.722924-160.679539 103.425557-190.086289 28.390607-15.70775 124.57218-69.067029 183.102225-103.293551C884.029108 602.551342 884.034225 602.551342 884.039341 602.546226zM852.482625 548.642548c-68.234057 39.898709-188.638311 106.333794-189.842743 106.998943-5.301749 2.922563-9.642614 7.324826-12.484336 12.672624-0.681522 1.276063-68.345598 128.328737-107.075691 196.964954-2.948145 5.236258-5.428639 7.848759-6.699586 8.860808-1.514493-0.568958-4.666276-2.272763-9.06854-6.308683-57.065693-52.281737-158.473291-149.420101-159.490457-150.396335-4.493338-4.306072-10.17678-7.172353-16.312524-8.230452-1.428535-0.243547-143.858432-24.786523-218.98548-39.45664-2.917446-0.579191-4.793166-1.942235-5.195326-2.725064-0.457418-0.889253-0.873903-4.900613 2.673899-12.728906 32.568766-72.198346 93.310176-200.045105 93.920066-201.331401 2.562359-5.383614 3.523243-11.391445 2.780323-17.309224-0.178055-1.408069-17.827017-141.622508-26.047236-219.706911-0.381693-3.634784 1.183965-7.90504 3.89368-10.623965 2.115174-2.124384 4.122901-2.592035 5.779633-2.592035 0.37146 0 0.721431 0.020466 1.057075 0.056282 76.915787 7.777127 217.582527 24.954345 218.995713 25.127284 6.019087 0.726547 12.164041-0.310062 17.619286-2.99931 1.245364-0.615007 125.360126-61.899792 196.786898-95.439676 4.895497-2.297322 9.063423-2.922563 11.437493-1.733481 2.699482 1.367137 5.118578 5.67321 6.17156 10.959609 15.310707 77.302597 38.628786 212.590839 38.862099 213.947743 1.046842 6.089695 3.883447 11.732206 8.138354 16.211217 0.950651 0.9967 95.328136 100.345406 147.737786 158.14788 5.880941 6.491855 7.284917 10.608615 7.345292 11.30037C864.163665 539.349905 861.291245 543.483038 852.482625 548.642548z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M348.905458 492.080322c-12.169157-12.220323-31.948643-12.266371-44.168965-0.085958-12.220323 12.169157-12.261255 31.943526-0.085958 44.168965l22.676465 22.768563c6.099928 6.125511 14.111392 9.190313 22.127973 9.190313 7.970532 0 15.94618-3.035126 22.040992-9.104355 12.220323-12.169157 12.261255-31.948643 0.085958-44.168965L348.905458 492.080322z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M508.766352 376.774179c6.105045 6.125511 14.116509 9.190313 22.127973 9.190313 7.970532 0 15.94618-3.035126 22.040992-9.104355 12.220323-12.174274 12.261255-31.948643 0.085958-44.168965l-22.681582-22.768563c-12.17939-12.220323-31.948643-12.256138-44.168965-0.085958-12.220323 12.174274-12.261255 31.948643-0.085958 44.168965L508.766352 376.774179z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M564.67878 441.515692c-16.851806 3.680832-27.53103 20.322861-23.856337 37.174668 0.056282 0.248663 4.707209 25.564235-11.290137 41.621956-15.524578 15.575744-39.035038 11.153014-40.616046 10.832719-16.673751-3.715625-33.310663 6.668886-37.225833 23.352871-3.934612 16.790408 6.486738 33.596166 23.281239 37.535895 6.003737 1.408069 13.852496 2.409886 22.748097 2.409886 22.895453 0 52.745295-6.634094 76.067466-30.04734 32.16763-32.289404 32.777521-77.43972 28.065196-99.023294C598.167498 448.51613 581.51933 437.856349 564.67878 441.515692z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

IconShouye4.defaultProps = {
  size: 18,
};

IconShouye4 = React.memo ? React.memo(IconShouye4) : IconShouye4;

export default IconShouye4;