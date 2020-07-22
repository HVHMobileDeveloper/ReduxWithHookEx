
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NAVIGATION_SCREEN } from '../Router/ApplicationNavigation';
import { useDispatch } from 'react-redux';
import { saveProfileToRedux } from '../../redux/Profile';

export interface Props {
    navigation : any
}

const LoginScreen : React.FC<Props> = (props) => {

    const user = {
        email: 'hiephuynh200499@gmail.com',
        password: '123456',
    }

    const dispatch = useDispatch()
    const saveProfile = () => dispatch(saveProfileToRedux(user))

    const onSubmit = () =>{
        saveProfile();
        props.navigation.navigate(NAVIGATION_SCREEN.HOME);
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