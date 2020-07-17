/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { inCrease, deCrease } from '../redux/counter';

const Main = () => {


    //TODO:REDUX: USE SELECTOR, USE DISPACH
    const value = useSelector(state => state)
    const dispatch = useDispatch()
    const increase = () =>{ dispatch(inCrease()), setLoading(!isLoading)}
    const decrease = () => { dispatch(deCrease()), setLoading(!isLoading)}

    //USE STATE
    const [isLoading, setLoading] = useState(false);

    //USE EFFECT
    useEffect(()=>{
        setLoading(true)
    })

    //USE_MEMO
    const checkLoading = useMemo(() => <Text>{`${isLoading} ${value}`}</Text>, [isLoading]);


    //User Callback
    const handleIncrement = useCallback( increase, [value]);
    const handleDeCrement = useCallback( decrease, [value])


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button title="increment" onPress={handleIncrement} />
            {checkLoading}
            <Button title="decrement" onPress={handleDeCrement} />
        </View>
    )
}

export const Button = ({title, onPress}) => {
    useEffect(() =>{
        console.log("btn click")
    })
    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Main
