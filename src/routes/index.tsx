import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Authentication, Market, Introduction, Basket, Congratulations } from '../screens'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Introduction' component={Introduction} />
        <Stack.Screen name='Authentication' component={Authentication} />
        <Stack.Screen name='Market' component={Market} />
        <Stack.Screen name='Basket' component={Basket} />
        <Stack.Screen name='Congratulations' component={Congratulations} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
