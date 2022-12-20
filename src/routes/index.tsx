import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Authentication } from '../screens/Authentication'
import { Introduction } from '../screens/Introduction'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Introduction' component={Introduction} />
        <Stack.Screen name='Authentication' component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
