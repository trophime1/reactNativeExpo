import React from "react";
import { View,Text,StyleSheet,TextInput, TouchableOpacity } from "react-native";
 

function Task(props){
    return(
        <View style={styles.items}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>

        </View>
    )
}
const styles=StyleSheet.create({
items:  {
backgroundColor:"#fff",
padding:15,
borderRadius:10,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginBottom:20,
},
itemsLeft:{
    flexDirection:'row',
    flexWrap: "wrap",
    alignItems:"center",
    

},
square:{
    width:24,
    height:24,
    backgroundColor:'#2bd9d9',
    borderRadius: 5,
    marginRight:15,

    

},
itemText:{
maxWidth:"80%"
},
circular:{
width:12,
height:12,
borderColor:'#2bd9d9',
borderWidth:2,
borderRadius:5,
},

})
export default Task