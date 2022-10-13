import React from "react";
import { View,StyleSheet,TextInput,Text, TouchableOpacity } from "react-native";
const Login =()=> {
    return(
    <View style={styles.btn}>
        <Text >username or email</Text>
        <TextInput placeholder='enter usename or password'/>
        
        <Text>Password</Text>
        <TextInput secureTextEntry={true} placeholder='enter password'/>

    </View>
    )
    
}
const styles=StyleSheet.create({
    btn:{
       padding:20,
       margin:10
    }
})
export default Login