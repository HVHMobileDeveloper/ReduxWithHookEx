
import React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, DefaultRootState } from 'react-redux';
import { NavigationProp } from '@react-navigation/native';

export interface Props {
  navigation: NavigationProp<any, any>;
}

const Profile : React.FC<Props> = ({navigation}) => {

    const [getEmail, setEmail] = useState<string>('')
    const [getPassword, setPass] = useState<string>('')

    const value = useSelector((state: any) => state.ReducerProfile);

    useEffect(()=>{
        const { email, password} = value
        setEmail(email)
        setPass(password)
    })

    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, flexDirection: 'row'}}>
            <Text>{`Email: ${getEmail}`}</Text>
            <Text>{`Password: ${getPassword}`}</Text>
        </View>
    )
}

export default Profile