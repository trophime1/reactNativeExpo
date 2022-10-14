import React from "react";
import { Text,View,StyleSheet,TextIntput } from "react-native";

 const Login=()=>{


    return(
        <View style={style.input}>
            <TextIntput style={styles.enter} placeholder='enter username'/>
            <TextIntput secureTextEntry={true} style={styles.enter} placeholder='enter password'/>

        </View>
    )
}
const styles=StyleSheet.create({

})
export default Login;