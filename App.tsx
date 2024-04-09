import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import COLORS from './styles/theme';
import Login from './src/screens/Login/Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  })

  if(!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={COLORS}>
      <GestureHandlerRootView>
        <View style={styles.container}>
          <Login />
          <StatusBar style="auto" />
        </View>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
