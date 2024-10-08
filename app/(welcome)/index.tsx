import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "@/components/Button";
import {router} from "expo-router";
import {getLibraryPermission} from "@/constants/permission";

const Index = () => {
    const onClick = () => {
        router.replace("/(auth)/signIn");
    }

    useEffect(() => {
        getLibraryPermission();
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="flex justify-evenly items-center w-full h-screen">
                    <View className="flex items-center gap-3">
                        <Text className="font-bold text-7xl">
                            Bloggie
                        </Text>
                        <Text className="text-slate-500 text-xl font-medium">
                            It's Your Partner.
                        </Text>
                        <Text className="text-lg font-medium text-purple-500">
                            Explore | Enjoy | Inspire
                        </Text>
                    </View>
                    <View className="mt-10">
                        <Button onPress={onClick} title="Let's Start" containerStyles="w-[90vw] bg-blue-500"/>
                    </View>
                </View>
            </ScrollView>
            <StatusBar animated={true} style={"dark"}/>
        </SafeAreaView>
    );
};

export default Index;