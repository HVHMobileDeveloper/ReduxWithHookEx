
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login/index'
import ApplicationNavigationTab from './ApplicationNavigationTab'

const Stack = createStackNavigator();

export const NAVIGATION_SCREEN = {
    LOGIN: 'Login',
    HOME: 'Home',
}

const Router = () => {
    const {LOGIN, HOME} = NAVIGATION_SCREEN
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={LOGIN}>
                <Stack.Screen name={LOGIN} component={LoginScreen} />
                <Stack.Screen name={HOME} component={ApplicationNavigationTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;