import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Eat } from "@screens/Eat";
import { EditEat } from "@screens/EditEat";
import { FeedBack } from "@screens/FeedBack";
import { FeedBackBad } from "@screens/FeedBackBad";
import { Home } from "@screens/Home";
import { NewEat } from "@screens/NewEat";
import { Statistics } from "@screens/Statistics";


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Eat"
                component={Eat}
            />
            <Screen
                name="EditEat"
                component={EditEat}
            />
            <Screen
                name="FeedBack"
                component={FeedBack}
            />
            <Screen
                name="FeedBackBad"
                component={FeedBackBad}
            />
            <Screen
                name="NewEat"
                component={NewEat}
            />
            <Screen
                name="Statistics"
                component={Statistics}
            />
        </Navigator>
    )
}