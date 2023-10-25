import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function DropIconSvg(props: any) {
  return (
    <Svg width="48px" height="48px" viewBox="0 0 24 24" {...props}>
      <G data-name="Layer 2" id="Layer_2">
        <Path
          fill="#f7f7f7"
          d="M12.65,2.24,12,1.68l-.65.56C11,2.5,4,8.6,4,14a8,8,0,0,0,16,0C20,8.6,13,2.5,12.65,2.24Zm1.58,16.23-.89-1.79A3,3,0,0,0,15,14h2A5,5,0,0,1,14.23,18.47Z"
        />
      </G>
    </Svg>
  );
}
