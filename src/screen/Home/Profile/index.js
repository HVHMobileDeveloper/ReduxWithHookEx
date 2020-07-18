
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Profile = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const value = useSelector(state => state.ReducerProfile)
    useEffect(()=>{
        const { email, password} = value
        setEmail(email)
        setPass(password)
    })

    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, flexDirection: 'row'}}>
            <Text>{`Email: ${email}`}</Text>
            <Text>{`Password: ${pass}`}</Text>
        </View>
    )
}

export default Profile