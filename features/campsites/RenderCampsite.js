import React from 'react'
import { Text, View } from 'react-native'
import {
    Card
} from 'react-native-elements'

const RenderCampsite = ({ campsite }) => {
    if (campsite) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={campsite.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            padding: 10,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}>{campsite.name}</Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
            </Card>
        )
    }
    return <View />;
};


export default RenderCampsite