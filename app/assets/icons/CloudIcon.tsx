import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export default function CloudIconSvg(props: any) {
  return (
    <Svg width="48px" height="48px" viewBox="0 0 24 24" {...props}>
      <G>
        <Path
          d="m 12,4 c -3.3077796,0 -6,2.6922204 -6,6 -5.944e-4,0.05072 0.00835,0.110987 0.011719,0.175781 C 3.7217531,10.649795 2.0050499,12.614728 2,14.998047 c -1.3e-6,6.51e-4 -1.3e-6,0.0013 0,0.002 0,2.755496 2.2445041,5 5,5 h 9.5 C 19.531638,20 22,17.531638 22,14.5 22.000101,11.997406 20.28428,9.8647593 17.892578,9.2285156 17.500213,6.2706943 15.019337,4.000488 12,4 Z"
          fill="#f7f7f7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
