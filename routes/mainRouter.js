import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';


// este es el navegador de la izquierda, el de los 3 puntitos
const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack,
    },
    About:{
        screen: AboutStack
    }
})

export default createAppContainer(RootDrawerNavigator);