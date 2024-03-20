import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

export default function RestaruantDetail(props) {
  const { params: { item } } = props.route;
  return (
    <View style={styles.container}>
      <Text>RestaruantDetail</Text>
      <View style={styles.mapContainer}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 18.850964308742263,
            longitude: -99.20099234999999,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:"center",
      padding:16
  },map:{
    width:"100%",
    height:"30%"
  }
})