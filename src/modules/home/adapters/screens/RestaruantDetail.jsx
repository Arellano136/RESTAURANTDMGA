import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Image, AirbnbRating } from "@rneui/base";

export default function RestaruantDetail(props) {
  const { params } = props.route;
  const { navigation } = props;
  console.log("DATOS", params.item.title);

  useEffect(() => {
    navigation.setOptions({ title: params.item.title });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: params.item.image }} style={styles.image} />
        <View style={styles.row}>
          <Text style={styles.title}>{params.item.title}</Text>
          <AirbnbRating
            count={5}
            defaultRating={params.item.rating}
            size={16}
            showRating={false}
            isDisabled={false}
          />
        </View>
        <Text style={styles.row}>{params.item.description}</Text>
        <MapView
          initialRegion={{
            // las longitudes y latitudes estan al reves
            latitude: params.item.latitude,
            longitude: params.item.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: params.item.latitude,
              longitude: params.item.longitude,
            }}
            title={params.item.title}
            description={params.item.description}
          />
        </MapView>
        <View>{}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: 200,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
