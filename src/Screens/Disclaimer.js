import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Disclaimer = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <CustomHeader
                title="Disclaimer"
                leftIcon="arrow-back"
                onLeftPress={() => navigation.goBack()}
            />

            {/* ScrollView taake content scrollable ho */}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.headingView}>
                        <MaterialIcons name='warning-amber' size={24} color="#000" />
                        <Text style={styles.heading}>
                            Financial Information Disclaimer</Text>
                    </View>

                    <Text style={styles.text}>The information provided in this application, including but not limited to prices, market rates, charts, and related data for gold, silver, crude oil, currencies, and other financial instruments, is intended for informational and educational purposes only.</Text>

                    <Text style={styles.text}>While we strive to keep the data accurate and up to date, the information displayed may be delayed, incomplete, or inaccurate. We do not guarantee the accuracy, reliability, or completeness of any information.</Text>

                    <Text style={styles.text}>Nothing contained in this application should be considered financial, investment, trading, or legal advice. Users should not rely solely on the information provided in this app for making financial decisions.</Text>

                    <Text style={styles.text}>The developers, owners, and affiliates shall not be held liable for any losses or damages made based on the use of information obtained through this application.</Text>

                    <Text style={[styles.text, { fontWeight: 'bold' }]}>By using this application, you agree that you assume full responsibility and risk for any actions taken based on the information provided.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scrollContainer: {
        padding: responsiveWidth(4),
        paddingBottom: 80,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    heading: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#b8860b',
        marginBottom: 15,
        textAlign: 'center',

    },
    headingView: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        fontSize: responsiveFontSize(1.8),
        color: '#333',
        lineHeight: 24,
        marginBottom: 15,
        textAlign: 'justify',
    },
});