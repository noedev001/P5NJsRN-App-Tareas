/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import { Text, TouchableOpacity } from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen" component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Tasks App',
            headerStyle: {
              backgroundColor: '#222f3e',
            },
            headerTitleStyle: { color: '#fff' },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => { navigation.navigate('TaskFormScreen'); }}
              >
                <Text style={{ color: '#fff', marginRight: 20, fontSize: 20 }}>New</Text>
              </TouchableOpacity>
            ),
            headerleft: null,
          })}
        />
        <Stack.Screen
          name="TaskFormScreen" component={TaskFormScreen}
          options={{
            title: 'Create a Task',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#fff' },
            headerTintColor: '#ffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
