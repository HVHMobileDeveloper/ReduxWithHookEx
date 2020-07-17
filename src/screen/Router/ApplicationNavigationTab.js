import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from '../Home/Dashboard';
import Profile from '../Home/Profile';

const Tab = createBottomTabNavigator();


export const NAVIGATION_TAB_SCREEN = {
    DASH_BOARD: 'Dashboard',
    PROFILE: 'Profile',
}

const ApplicationNavigationTab = () => {
    const {DASH_BOARD, PROFILE} = NAVIGATION_TAB_SCREEN
    return (
        <Tab.Navigator backBehavior={'initialRoute'} initialRouteName={DASH_BOARD}>
            <Tab.Screen name={DASH_BOARD} component={DashBoard} />
            <Tab.Screen name={PROFILE} component={Profile} />
        </Tab.Navigator>
    );
}

export default ApplicationNavigationTab