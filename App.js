import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import ListaContador from './components/ListaContador';
import Greeting from './components/Greeting';
import UserDetails from './components/UserDetails';
import Task from './components/Task';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';
import ParentCounter from './components/ParentCounter';
import ImageGallery from './components/ImageGallery';
import Game from './components/Game';

export default function App() {

  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleRegister = (data) => {
    setUserData(data);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;

  const showAlert = () => {
    Alert.alert(
      "Alerta",
      "Esto es una alerta",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={containerStyle}>
    <SafeAreaView style={styles.safeArea}>
      <Game />
      <ImageGallery />
      <ParentCounter/>
      <AlertButton onPress={showAlert} />
      <ThemeSwitcher onThemeChange={handleThemeChange}/>
      <RegistrationForm  onRegister={handleRegister}/>
      <Text style={textStyle}> HELLO </Text>

      {userData && (
        <View style={styles.result}>
          <Text style={textStyle}>Name: {userData.name}</Text>
          <Text style={textStyle}>Email: {userData.email}</Text>
          <Text style={textStyle}>Password: {userData.password}</Text>
        </View>
      )}

      <ClickCounter/>
      <Greeting name={"Sebastian"}/>
      <UserDetails name={"sebastian"} age={"28"} occupation={"desarrollador"}/>
      <Task title="tarea1" completed={false}/>
      <Task title="tarea2" completed={true}/>
      <ToggleText/>
      <ListaContador />
      <DynamicForm/>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  lightText: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 10,
  },
  darkText: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 10,
  }
});
