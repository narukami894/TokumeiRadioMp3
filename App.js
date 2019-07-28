
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList
} from "react-native";

import { Player } from "@react-native-community/audio-toolkit";
import EpisodeBox from "./components/EpisodeBox";
const LATEST_EPISODE = 160;

createEpisodeList = () => {
  let episodeList = [];
  for (let i = LATEST_EPISODE; i > 0; i--) {
    let episode = {
      title: `第${i}話`,
      url: `https://omocoro.heteml.net/radio/tokumei/${i}.mp3`
    };
    episodeList.push(episode);
  }
  return episodeList;
};

playEpisode = url => {
  console.log(url)
  new Player(url).play();
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={require("./assets/images/title.png")}
          style={styles.welcomeImage}
        />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{}}
      >
        <FlatList
          data={this.createEpisodeList()}
          renderItem={({ item }) => (
            <EpisodeBox
              title={item.title}
              onPress={() => this.playEpisode(item.url)}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: width,
    resizeMode: "contain",
  },
});
