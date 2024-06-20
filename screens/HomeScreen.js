import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites'
import { PROMOTIONS } from '../shared/promotions'
import { PARTNERS } from '../shared/partners'

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
                                // fontWeight: 'bold',
                                textAlign: 'center',
                                // padding: 10,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
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

const HomeScreen = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners] = useState(PARTNERS);

    const featCampsite = campsites.find((item) => item.featured);
    const featPromotion = promotions.find((item) => item.featured);
    const featPartner = partners.find((item) => item.featured);

    return (
        <ScrollView>
            <FeaturedItem item={featCampsite} />
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPartner} />
        </ScrollView>
    );
};

export default HomeScreen;  