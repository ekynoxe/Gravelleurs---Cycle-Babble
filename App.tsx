import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import AppLoading from 'expo-app-loading';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    List: ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'Cycle Babble',
    },
  }
);

export default createAppContainer(navigator);