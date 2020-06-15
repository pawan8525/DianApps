import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import GalleryScreen from '../components/gallery/GalleryScreen';
import PhotoScreen from '../components/photo/PhotoScreen';
const Tab = createBottomTabNavigator();

const myTab=()=>{
    return (
        <NavigationContainer >
          <Tab.Navigator initialRouteName="Gallery" >
            <Tab.Screen 
            name="Gallery" 
            component={GalleryScreen} 
            options={{
                tabBarLabel: 'Gallery',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}/>
            <Tab.Screen
             name="Photo" 
             component={PhotoScreen} 
             options={{
                tabBarLabel: 'Photo',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
}
const Routes = myTab;
export default Routes;