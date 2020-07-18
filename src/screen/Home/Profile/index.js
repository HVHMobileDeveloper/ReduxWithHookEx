
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Profile = ({ navigation }) => {

    const value = useSelector(state => state.ReducerProfile)

    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, }}>
            <Text>{`${JSON.stringify(value)}`}</Text>
        </View>
    )
}

export default Profile