import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import Icon from '@react-native-vector-icons/fontawesome'

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, any> = {
            Dashboard: 'home',
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
    </Tab.Navigator>
  );
};

export default MyTabs;