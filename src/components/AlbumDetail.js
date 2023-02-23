import React from 'react';
import { View , Text , Image , Linking  } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ records }) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnail_image}>
                      <Image
                        style={
                            styles.imageStyle
                        } 
                        source = {
                        { 
                           uri: records.thumbnail_image
                        }
                        } 
                      />
                </View>
                <View style={{ justifyContent: 'space-around'}}>
                    <Text style={{ fontSize: 18 }}>
                       {  records.title }
                     </Text>
                     <Text>
                       {  records.artist }
                     </Text>
                </View>
            </CardSection>

            <CardSection>
            <View>
            <Image
             style={
                    styles.artStyle
                   } 
             source = {
                        { 
                          uri: records.image
                        }
                    } 
            />
            </View>
            </CardSection>
            
            <CardSection>
                    <Button 
                    whenPressed = { () => Linking.openURL(records.url) } 
                    text="Buy Now"/>
            </CardSection>

        </Card>
    );
    
};

const styles = {
    thumbnail_image : {
        justifyContent : 'center',
        alignItems : 'center' ,
        marginLeft : 5,
        marginRight : 10
    },
    imageStyle :{
        height : 50 ,
        width : 50 ,
        
    },
    artStyle :{
        height :300,
        width : 355, 
        justifyContent : 'center',
        alignItems : 'center' ,
    }
}
export default AlbumDetail;