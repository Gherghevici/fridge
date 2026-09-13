import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const DashboardLayout = ()=>{
    return(
        <Tabs screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="(profile)"
                options={{
                title: "Profile",
                tabBarIcon: ({focused}) =>(
                    <Ionicons size={26} name={focused? "person":"person-outline"} color={focused? "#d31d1d":"#000"} />
                )
                }}
            />

            <Tabs.Screen
                name="(recipes)"
                options={{
                title: "Recipes",
                tabBarIcon: ({focused}) =>(
                    <Ionicons size={26} name={focused? "book":"book-outline"} color={focused? "#d31d1d":"#000"} />
                )
                }}
            />

            <Tabs.Screen
                name="(calendar)"
                options={{
                title: "Calendar",
                tabBarIcon: ({focused}) =>(
                    <Ionicons size={26} name={focused? "calendar":"calendar-outline"} color={focused? "#d31d1d":"#000"} />
                )
                }}
            />
        </Tabs>
    )
}

export default DashboardLayout