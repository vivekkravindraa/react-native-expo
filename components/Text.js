// import React, { Component } from 'react';
// import { AppRegistry, Text, StyleSheet } from 'react-native';

// export default class TextInANest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titleText: "Bird's Nest",
//       bodyText: 'This is not really a bird nest.'
//     };
//   }

//   render() {
//     return (
//       <Text style={styles.baseText}>
//         <Text style={styles.titleText} onPress={this.onPressTitle}>
//           {this.state.titleText}{'\n'}{'\n'}
//         </Text>
//         <Text numberOfLines={5}>
//           {this.state.bodyText}
//         </Text>
//       </Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: 'Cochin',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('TextInANest', () => TextInANest);

// Nested text

// import React, { Component } from 'react';
// import { AppRegistry, Text } from 'react-native';

// export default class BoldAndBeautiful extends Component {
//   render() {
//     return (
//       <Text style={{fontWeight: 'bold'}}>
//         I am bold
//         <Text style={{color: 'red'}}>
//           and red
//         </Text>
//       </Text>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => BoldAndBeautiful);

// Containers

{/* <Text>
  <Text>First part and </Text>
  <Text>second part</Text>
</Text> */}
// Text container: the text will be inline if the space allowed it
// |First part and second part|

// otherwise, the text will flow as if it was one
// |First part |
// |and second |
// |part       |

{/* <View>
  <Text>First part and </Text>
  <Text>second part</Text>
</View> */}
// View container: each text is its own block
// |First part and|
// |second part   |

// otherwise, the text will flow in its own block
// |First part |
// |and        |
// |second part|

// Limited Style Inheritance

// html {
//     font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
//     font-size: 11px;
//     color: #141823;
//   }

// BAD: will raise exception, can't have a text node as child of a <View>
{/* <View>
  Some text
</View>

// GOOD
<View>
  <Text>
    Some text
  </Text>
</View> */}

{/* <View>
  <MyAppText>
    Text styled with the default font for the entire application
  </MyAppText>
  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
</View> */}
  
// class MyAppHeaderText extends Component {
//     render() {
//       return (
//         <MyAppText>
//           <Text style={{fontSize: 20}}>{this.props.children}</Text>
//         </MyAppText>
//       );
//     }
//   }

{/* <Text style={{fontWeight: 'bold'}}>
  I am bold
  <Text style={{color: 'red'}}>and red</Text>
</Text> */}
