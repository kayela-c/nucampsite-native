import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import DirectoryScreen from './DirectoryScreen';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: '#5637DD',
    },
    headerTintColor: Platform.OS === 'android' ?
        '#fff' :
        '#000',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />

        </Stack.Navigator>
    );
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>

    );
};

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='About'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='About'
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
};


const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Contact'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={{ title: 'Contact Us' }}
            />
        </Stack.Navigator>
    )
};


const Main = () => {

    return (
        <View style={{
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight

        }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#cec8ff' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Directory' }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact Us' }}
                />

            </Drawer.Navigator>
        </View>
    )
};

export default Main;