
import React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, DefaultRootState } from 'react-redux';

export interface Props {
  navigation: any;
}

const Profile : React.FC<Props> = ({navigation}) => {

    const [getEmail, setEmail] = useState("email")
    const [getPassword, setPass] = useState("password")

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