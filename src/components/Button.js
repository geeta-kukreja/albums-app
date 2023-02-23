import React from 'react';
import {  Text , TouchableOpacity } from 'react-native';

const Button = ({ whenPressed , text }) => {
    return (
        <TouchableOpacity  
         onPress={ whenPressed }
         style = { styles.buttonStyle } >
           <Text style={ styles.textStyle }>
            { text }
           </Text>
        </TouchableOpacity>
    );
};


const styles={
    buttonStyle:{
        flex : 1,
        alignSelf : 'stretch',
        borderWidth : 1,
        borderColor : 'transparent',
        marginLeft : 5,
        marginRight : 5
    },
    textStyle:{
        textAlign : 'center',
        color : '#007aff',
        fontSize : 15,
        fontWeight : '600' ,
        paddingTop : 10,
        paddingBottom : 10 
    }
}
export default Button;