import { View, Text, LogBox } from 'react-native'
import ListBelanja from '../components/ListBelanja';
import FormSignIn from '../components/FormSignIn';

LogBox.ignoreAllLogs(['Warning'])

const ScreenAbout = ({ navigation, route }) => {
    return ( 
        <View>
            {/* <ListBelanja />
            <Text>About me</Text>
            <Text>{route.params.nama}</Text> */}
            <FormSignIn />
        </View>
     );
}
 
export default ScreenAbout;