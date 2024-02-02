import {StatusBar} from 'expo-status-bar';
import {Button, Platform, StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';
import { useAuth } from '../AuthProvider';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen() {
  const auth = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = async () => {
    await auth.signIn(email, password);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>
        Login
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Email</Text>
        <TextInput value={email} onChangeText={(data) => setEmail(data)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Password</Text>
        <TextInput value={password} onChangeText={(data) => setPassword(data)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} secureTextEntry={true} />
      </View>
      <Button title="Login" onPress={signIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "Roboto",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "Roboto",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
