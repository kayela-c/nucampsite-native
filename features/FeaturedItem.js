import { Card } from 'react-native-elements';
import { Text, View } from 'react-native-gesture-handler';

const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
                    <View
                        style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20,
                                textAlign: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                // fontWeight: 'bold',
                                // padding: 10,
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Card.Divider />
                <Text style={{ marginBottom: 20 }}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />
};

export default FeaturedItem;