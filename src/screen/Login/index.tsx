
import React, { useState, useEffect, useMemo, useCallback, useReducer } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NAVIGATION_SCREEN } from '../Router/ApplicationNavigation';
import { useDispatch } from 'react-redux';
import ReducerProfile, { saveProfileToRedux } from '../../redux/Profile';
import { NavigationProp } from '@react-navigation/native';

export interface Props {
    navigation : NavigationProp<any, any>
}

const LoginScreen : React.FC<Props> = ({navigation}) => {

    const user = {
        email: 'hiephuynh200499@gmail.com',
        password: '123456',
    }

    const dispatch = useDispatch()
    const saveProfile = () => dispatch(saveProfileToRedux(user));
    const navigateToHome = () => navigation.navigate(NAVIGATION_SCREEN.HOME);

    const onSubmit = async () =>{
        await saveProfile();
        navigateToHome();   
    }

    return (
        <View style={{backgroundColor: 'red', flex: 1,}}>
            <TouchableOpacity onPress={onSubmit}>
                <Text>Navigate To HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen