import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

export default function useStackNavigator() {
  const Stack = createStackNavigator()
  return [NavigationContainer, Stack.Navigator, Stack.Screen]
}
