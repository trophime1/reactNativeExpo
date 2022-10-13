import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
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
  }
  
});
