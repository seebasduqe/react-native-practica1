import { View, Button, StyleSheet, Text } from "react-native";

function ThemeSwitcher ({onThemeChange}) {

    const handleThemeChange = (theme) => {
        onThemeChange(theme);
    };

    return (
        <View style={styles.container}>
          <Button
            title="Tema dia"
            onPress={() => handleThemeChange('light')}
          />
          <Button
            title="Tema Oscuro"
            onPress={() => handleThemeChange('dark')}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginVertical: 20,
    },
  });

export default ThemeSwitcher;