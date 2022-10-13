import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,KeyboardAvoidingView,TextInput, TouchableOpacity } from 'react-native';
import React,{useState} from 'react'
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrap}> 
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.item}>
      <Task text={'Task 1'}/>
      <Task text={'Task 2'}/>
      </View>
      </View>
      <KeyboardAvoidingView
behavior={Platform.OS==='ios'?'padding':'height'}
style={styles.writeTaskWrapper}>
    <TextInput style={styles.input} placeholder={"write a task"}/>
    
      <TouchableOpacity>
<View style={styles.addWrapper}>
  <Text style={styles.addText}>+</Text>
</View>
      </TouchableOpacity>
    
</KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e8e1',
    
  },
  taskWrap:{
    paddingTop:80,
    paddingHorizontal:20,
    

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    marginLeft:20,
  },
  item:{
marginTop:30
  },
writeTaskWrapper:{
  position:"absolute",
  bottom:60,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  width:'100%',
  
 
},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:'#fff',
  borderRadius:60,
  borderColor:'#2bd9d9',
  borderWidth:1,
  width:250,

},
addWrapper:{
  width:60,
  height: 60,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#fff',
  borderRadius: 60,borderColor:'#2bd9d9',
  borderWidth:1,
},
addText:{

},
  
});
