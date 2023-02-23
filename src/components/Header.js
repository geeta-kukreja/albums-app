import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style = { styles.containerStyle }>
            <Text style= { styles.textStyle }> { props.headerName } </Text>
        </View>
    );
};


const styles = {
 containerStyle : {
    alignItems : 'center',
    justifyContent : 'center' ,
    backgroundColor : '#68f2d8',
    height: 60 ,
    marginTop : 10 ,
    elevation : 1,
    shadowColor : '#000',
    shadowOffset : { width : 0 , height : 1},
    shadowOpacity: 0.5,
} ,
textStyle : {
    fontSize : 15 ,
},
};
export default Header;


