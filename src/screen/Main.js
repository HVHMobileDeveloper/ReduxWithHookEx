/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { inCrease, deCrease } from '../redux';

const Main = () => {


    const value = useSelector(state => state)
  const dispatch = useDispatch()
  const increase = () => dispatch(inCrease())
  const decrease = () => dispatch(deCrease())


    return (
        <View style={{flex: 1, justifyContent:'center'}}>
            <TouchableOpacity onPress={increase}>
                <Text>InCrease</Text>
            </TouchableOpacity>
            <Text>{value}</Text>
            <TouchableOpacity onPress={decrease}>
                <Text>DeCrease</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Main
