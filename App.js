import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Form from './components/FormDesign'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form />
    </View>
  );
}

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
