import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Fonts from '@theme/Fonts';
import LottieView from 'lottie-react-native'

export default function BellyClosedScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <Image source={require('../../assets/images/Logo.png')} style={{ height: 100, width: 100 }} />
            <View style={{ position: 'absolute', }}>
                <LottieView
                    style={{ height: 100, width: 100 }}
                    source={require('../../assets/animation/closed.json')}
                    autoPlay
                    loop
                />
            </View>
            <Text style={{ fontFamily: Fonts.medium, fontSize: 25, marginTop: 20, marginBottom: -5 }}>Sorry!</Text>
            <Text style={{ fontFamily: Fonts.medium, fontSize: 25, }}>We're Closed</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
