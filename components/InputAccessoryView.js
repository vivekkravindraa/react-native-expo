// import React, { Component } from 'react';
// import { View, ScrollView, AppRegistry, TextInput, InputAccessoryView, Button } from 'react-native';

// export default class UselessTextInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: 'Placeholder Text'};
//   }

//   render() {
//     const inputAccessoryViewID = "uniqueID";
//     return (
//       <View>
//         <ScrollView keyboardDismissMode="interactive">
//           <TextInput
//             style={{
//               padding: 10,
//               paddingTop: 50,
//             }}
//             inputAccessoryViewID={inputAccessoryViewID}
//             onChangeText={text => this.setState({text})}
//             value={this.state.text}
//           />
//         </ScrollView>
//         <InputAccessoryView nativeID={inputAccessoryViewID}>
//           <Button
//             onPress={() => this.setState({text: 'Placeholder Text'})}
//             title="Reset Text"
//           />
//         </InputAccessoryView>
//       </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);