import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home'
import Attendance from './screens/Attendance'
import About from './screens/Price'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Atendimento" component={Attendance} />
        <Tab.Screen name="Valores" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}