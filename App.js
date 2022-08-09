import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Form from './components/FormDesign'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form />
      {/* <BackgroundDesign /> */}
    </View>
  );
}

// const BackgroundDesign = () => {

//   return (

//     <View style={{
//       flex: 1,
//       flexDirection: 'column',
//       padding: 20,
//       width: '100%',
//     }}>

//       <View style={[styles.content,{ flex: .10, backgroundColor: '#7fffd4'}]}>
//         <Text style={[styles.textContainer]}>
//           View 1
//         </Text>
//       </View>
//       <View style={[styles.content,{ flex: .30, backgroundColor: '#faebd7'}]}>
//         <Text style={[styles.textContainer]}>
//           View 2
//         </Text>
//       </View>
//       <View style={[styles.content,{ flex: .60, backgroundColor: '#f0ffff' }]}>
//         <Text style={[styles.textContainer]}>
//           View 3
//         </Text>
//       </View>



//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 48
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
