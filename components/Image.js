// import React, { Component } from 'react';
// import { AppRegistry, View, Image } from 'react-native';

// export default class DisplayAnImage extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           source={require('/react-native/img/favicon.png')}
//         />
//         <Image
//           style={{width: 50, height: 50}}
//           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
//         />
//         <Image
//           style={{width: 66, height: 58}}
//           source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
//         />
//       </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);


// import React, { Component } from 'react';
// import { AppRegistry, View, Image, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   stretch: {
//     width: 50,
//     height: 200
//   }
// });

// export default class DisplayAnImageWithStyle extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           style={styles.stretch}
//           source={require('/react-native/img/favicon.png')}
//         />
//       </View>
//     );
//   }
// }

// // skip these lines if using Create React Native App
// AppRegistry.registerComponent(
//   'DisplayAnImageWithStyle',
//   () => DisplayAnImageWithStyle
// );