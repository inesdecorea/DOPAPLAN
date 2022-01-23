import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Counter from '../component/Counter';

const CounterFunc = () => {

    const[count,setCount] = useState(0);

    const onIncrease = () => setCount(count +1);
    
    return (
        <View style={styles.complete}>

        <Counter count={count} onIncrease={onIncrease}/>
        </View>
    );
};

const styles=StyleSheet.create({
complete:{
    backgroundColor:"white"
}

});

export default CounterFunc;