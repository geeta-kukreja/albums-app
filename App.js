import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Rendering Information
const App = () => {
    return (
      <View style={{ flex:1 }}>
      <Header headerName = { "ALBUM" }/>
      <AlbumList />
     </View>
    );
}

//Exporting app
export default App;