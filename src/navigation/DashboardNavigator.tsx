import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import Icon from '@react-native-vector-icons/fontawesome'
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CustomerDueListScreen from '../screens/CustomerDueListScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, any> = {
            Dashboard: 'home',
            Product: 'cart-plus',
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
        headerShown:false
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Product" component={ProductDetailScreen} />
         <Tab.Screen name="Due" component={CustomerDueListScreen} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;