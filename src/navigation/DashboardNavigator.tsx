import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import Icon from '@react-native-vector-icons/fontawesome'

const Tab = createBottomTabNavigator()

const MyTabs=()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='Dashboard' component={DashboardScreen} options={{tabBarIcon:()=><Icon name='home' size={30}/>, tabBarShowLabel:false}}/>
        </Tab.Navigator>
    )
}
export default MyTabs