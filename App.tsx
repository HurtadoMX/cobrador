import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splsh from './screens/Splsh';
import LOGIN from './screens/LOGIN';
import HomeVendedor from './components/HomeVendedor';
import Jornada from './screens/Jornada';
import NavbarBottom from './components/Individuals/Navbar/NavbarBottom';
import NavbarTop from './components/Individuals/Navbar/NavbarTop';
import Incidencias from './screens/Incidencias';
import SiTrabaja from './screens/SiTrabaja';
import ComunicacionIncidencia from './screens/ComunicacionIncidencia';

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Nuevo estado para manejar la autenticación

  
  React.useEffect(() => {
    // Suponiendo que aquí se maneje la lógica de autenticación...
    // Por ahora, solo cambia a la pantalla de login después de 2 segundos
    const timer = setTimeout(() => {
      setHideSplashScreen(true);
      setIsAuthenticated(false); // Suponemos que el usuario se autentica después del Splash
    }, 2000);

    // Limpiar el timer al desmontar
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated && <NavbarTop setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} 
      {/* // Muestra NavbarTop si el usuario está autenticado */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!hideSplashScreen ? (
          // Muestra el Splash Screen
          <Stack.Screen name="Splsh" component={Splsh} />
        ) : (
          // Muestra el Login después de que el Splash Screen se haya ocultado
          <>

          <Stack.Screen name="Login" initialParams={{ setIsAuthenticated, isAuthenticated }} component={LOGIN} />
          <Stack.Screen name="Home" initialParams={{ setIsAuthenticated, isAuthenticated }} component={HomeVendedor} />
          <Stack.Screen name="Jornada" component={Jornada} />
          <Stack.Screen name="Incidencias" component={Incidencias} />
          <Stack.Screen name="SiTrabaja" component={SiTrabaja} />
          <Stack.Screen name="ComunicacionIncidencia" component={ComunicacionIncidencia} />

          </>
        )}
      </Stack.Navigator>
      {isAuthenticated && <NavbarBottom />}
    </NavigationContainer>
  );
};

export default App;
