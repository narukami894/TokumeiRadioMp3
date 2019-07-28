import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const EpisodeBox = props => {
  return (
    <View>
      <TouchableHighlight
        onPress={props.onPress}
        underlayColor="transparent"
        activeOpacity={0.7}
      >
        <Text>{props.title}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default EpisodeBox
