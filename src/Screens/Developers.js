import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native"
import { CustomHeader } from "../components/CustomHeader"
import { useNavigation } from "@react-navigation/native"
import { AppImages } from "../constant/appImages"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Developers = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader
                title="Developer"
                leftIcon="arrow-back"
                // rightIcon="search"
                onLeftPress={() => navigation.goBack()}

            />
            <View style={styles.container}>
                <View style={styles.main}>

                    <View style={styles.logoView}>

                        <Image source={AppImages.logo} style={styles.companyLogo} />
                    </View>

                    <Text style={styles.companyName}>COGENT DEVS (SMC Private) Limited</Text>
                    <Text style={styles.service}>Digital Solutions Provider</Text>
                    <Text style={styles.email}>info@cogentdevs.com</Text>

                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Poori screen cover karne ke liye
        backgroundColor: '#f2f2f2',
        // justifyContent: 'center', // Content ko screen ke center mein lane ke liye
        padding: 20


    },
    main: {
        alignItems: 'center', // Horizontal center
        justifyContent: 'center',
    },
    logoView: {
        backgroundColor: '#fff',
        height: responsiveHeight(25),
        width: responsiveWidth(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 5,
        // marginTop: 5
    },
    companyLogo: {
        resizeMode: 'contain',
        width: responsiveWidth(30)
    },
    companyName: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 10
    },
    service: {
        fontSize: responsiveFontSize(2.5),
        color: '#555',
        marginVertical: 5
    },
    email: {
        fontSize: responsiveFontSize(2),
        color: '#717171',
    },

})