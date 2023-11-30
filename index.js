/**
 * @format
 */

 import { AppRegistry, LogBox } from 'react-native';
 import App from './App';
 import { name as appName } from './app.json';
 
 LogBox.ignoreLogs([
   'ViewPropTypes', // Ignora cualquier mensaje de log que incluya 'ViewPropTypes'
 ]);
 
 AppRegistry.registerComponent(appName, () => App);
 