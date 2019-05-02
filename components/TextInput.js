// import React, { Component } from 'react';
// import { AppRegistry, TextInput } from 'react-native';

// export default class UselessTextInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: 'Useless Placeholder' };
//   }

//   render() {
//     return (
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//       />
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);

// import React, { Component } from 'react';
// import { AppRegistry, View, TextInput } from 'react-native';

// class UselessTextInput extends Component {
//   render() {
//     return (
//       <TextInput
//         {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//         editable = {true}
//         maxLength = {40}
//       />
//     );
//   }
// }

// export default class UselessTextInputMultiline extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: 'Useless Multiline Placeholder',
//     };
//   }

//   // If you type something in the text box that is a color, the background will change to that
//   // color.
//   render() {
//     return (
//      <View style={{
//        backgroundColor: this.state.text,
//        borderBottomColor: '#000000',
//        borderBottomWidth: 1 }}
//      >
//        <UselessTextInput
//          multiline = {true}
//          numberOfLines = {4}
//          onChangeText={(text) => this.setState({text})}
//          value={this.state.text}
//        />
//      </View>
//     );
//   }
// }

// // skip these lines if using Create React Native App
// AppRegistry.registerComponent(
//  'AwesomeProject',
//  () => UselessTextInputMultiline
// );