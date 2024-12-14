import {createDrawerNavigator} from '@react-navigation/drawer';
import MyTabs from './BottomNavigator';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator 
        screenOptions={{headerShown:false}}
        drawerContent={(props)=><CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen name="mainTab" component={MyTabs}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator