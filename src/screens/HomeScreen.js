import {Button,View} from 'react-native';   



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default HomeScreen;

