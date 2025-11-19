import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { handleLogout } from "../firbase/Auth/logOut";


export const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>ProfileScreen</Text>
                <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: 'blue', padding: 20, width: 100,borderRadius:10,elevation:5 }}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>
                        Log out
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}