// import { ScrollView, RefreshControl } from 'react-native';

// class RefreshableList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       refreshing: false,
//     };
//   }

//   _onRefresh = () => {
//     this.setState({refreshing: true});
//     fetchData().then(() => {
//       this.setState({refreshing: false});
//     });
//   }

//   render() {
//     return (
//       <ScrollView
//         refreshControl={
//           <RefreshControl
//             refreshing={this.state.refreshing}
//             onRefresh={this._onRefresh}
//           />
//         }
//       />
//     );
//   }
// }