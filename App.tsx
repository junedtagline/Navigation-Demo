/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottumTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
function DrawerUI() {
  const navigation = useNavigation();
  // let temp = navigation.dispatch(DrawerActions.openDrawer());
  // console.log(temp);
  // if (temp) {
  //   navigation.dispatch(DrawerActions.closeDrawer());
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZ2h0JTIwY29sb3VyfGVufDB8fDB8fHww',
          }}
          style={{
            height: '100%',
            width: 'auto',
          }}>
          <TouchableOpacity
            style={{height: 40, width: 80, marginLeft: 40, marginTop: 20}}
            onPress={() => {
              navigation.navigate('Home');
              navigation.dispatch(DrawerActions.closeDrawer);
            }}>
            <Text style={[style.txtStyle, {color: 'black'}]}>Drawer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 40, width: 80, marginLeft: 40}}
            onPress={() => {
              navigation.navigate('Stack');
            }}>
            <Text style={[style.txtStyle, {color: 'white'}]}>Stack</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
function DrawerMenu() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerUI}
      screenOptions={{
        drawerActiveBackgroundColor: 'yellow',
        drawerStyle: {backgroundColor: 'antiquewhite', width: 300},
        headerStyle: {backgroundColor: 'antiquewhite'},
      }}>
      <Drawer.Screen name="Home" component={drawer1} />
      <Drawer.Screen name="stackscreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

function BottumTabScreen1() {
  return (
    <View style={style.viewStyle}>
      <Text style={style.txtStyle}>Bottum 1</Text>
    </View>
  );
}
function TopTab1() {
  return (
    <View style={style.viewStyle}>
      <Text style={style.txtStyle}>Tab1</Text>
    </View>
  );
}
function TopTab2() {
  return (
    <View style={style.viewStyle}>
      <Text style={style.txtStyle}>Tab2</Text>
    </View>
  );
}
function BottumTabScreen2() {
  return (
    <NavigationContainer independent={true}>
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: {
            fontSize: 12,
            textTransform: 'uppercase',
            fontFamily: 'Gill Sans',
          },
          tabBarStyle: {backgroundColor: 'cornsilk', height: 40},
        }}>
        <TopTab.Screen name="T1" component={TopTab1} />
        <TopTab.Screen name="T2" component={TopTab2} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}
function BottumTabScreen3() {
  return (
    <View style={style.viewStyle}>
      <Text style={style.txtStyle}>Bottum 3</Text>
    </View>
  );
}

function drawer1() {
  return (
    <NavigationContainer independent={true}>
      <BottumTab.Navigator screenOptions={{headerShown: false}}>
        <BottumTab.Screen
          name="BottumTab1"
          component={BottumTabScreen1}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'Gill Sans',
              fontWeight: 'bold',
              fontSize: 13,
              color: 'black',
            },
          }}></BottumTab.Screen>
        <BottumTab.Screen
          name="BottumTab2"
          component={BottumTabScreen2}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'Times new Roman',
              fontWeight: 'bold',
              fontSize: 13,
              color: 'black',
            },
          }}></BottumTab.Screen>
        <BottumTab.Screen
          name="BottumTab3"
          component={BottumTabScreen3}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'Times new Roman',
              fontWeight: 'bold',
              fontSize: 13,
              color: 'black',
            },
          }}></BottumTab.Screen>
      </BottumTab.Navigator>
    </NavigationContainer>
  );
}
function StackScreen() {
  return (
    <View style={style.viewStyle}>
      <Text style={style.txtStyle}>Test</Text>
    </View>
  );
}
function HomeScreen() {
  // const navigation = useNavigation();
  // navigation.navigate('stacknextScreen');
  return (
    <View style={style.viewStyle}>
      <Text
        style={[
          style.txtStyle,
          {color: 'red', textDecorationLine: 'underline'},
        ]}>
        Next Screen
      </Text>
    </View>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={DrawerMenu}></Stack.Screen>
        <Stack.Screen name="Stack" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="stacknextScreen"
          component={StackScreen}
          options={{
            title: 'Next Screen',
            headerStyle: {backgroundColor: 'burlywood'},
            headerRight: () => (
              <Text
                style={{
                  fontFamily: 'times new roman',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}></Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const style = StyleSheet.create({
  viewStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  txtStyle: {fontFamily: 'Gill Sans', fontSize: 18, fontWeight: 'bold'},
});
