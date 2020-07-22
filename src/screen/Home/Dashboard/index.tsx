
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DashBoard : React.FC<{navigation: any}> = ({ navigation}) => {


    return (
        <View style={{backgroundColor: 'yellow', flex: 1,}}>
            <Text>{`DashBoard`}</Text>
        </View>
    )
}

export default DashBoard