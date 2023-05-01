import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { ComponentsScreen } from "./src/screens/ComponentScreen";
import { ListScreen } from "./src/screens/listScreen";
import { ImageScreen } from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Sean Test App",
    },
  }
);

export default createAppContainer(navigator);
