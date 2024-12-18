import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import Icon from '@react-native-vector-icons/fontawesome'
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CustomerDueListScreen from '../screens/CustomerDueListScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ShopAISuggestionScreen from '../screens/ShopAISuggestionScreen';
import ProductStackNavigator from './ProductStackNavigator';

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, any> = {
            Dashboard: 'home',
            Product: 'cart-plus',
            ShopSuggestion: 'camera',
            Due:'clock-o',
            Notification:'bell'
          };
          return (
            <Icon
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
        tabBarShowLabel: false,
        headerShown:false,
        tabBarActiveTintColor:'#192841'
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Product" component={ProductStackNavigator} />
        <Tab.Screen name='ShopSuggestion' component={ShopAISuggestionScreen} options={{tabBarIconStyle:{height:50, width:50, borderWidth:2, borderRadius:25, backgroundColor:'#fff', position:'absolute', top:-8, borderColor:'#fff'}}}/>
         <Tab.Screen name="Due" component={CustomerDueListScreen} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;