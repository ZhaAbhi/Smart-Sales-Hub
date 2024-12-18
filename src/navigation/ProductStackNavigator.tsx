import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import IndividualProductDetailScreen from '../screens/IndividualProductDetailScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const MyStack = createStackNavigator();

const ProductStackNavigator  = ()=>{
    return(
        <MyStack.Navigator screenOptions={{headerShown:false, ...TransitionPresets.SlideFromRightIOS}}>
            <MyStack.Screen name="singleProduct"  component={ProductDetailScreen}/>
            <MyStack.Screen name="productDetail" component={IndividualProductDetailScreen}  options={{headerShown:true}}/>
        </MyStack.Navigator>
    )
}

export default ProductStackNavigator