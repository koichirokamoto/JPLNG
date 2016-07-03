import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const AlertBox = (props) => {
  return (
    <View>
      <TouchableHighlight style={styles.wrapper}
        onPress={() => Alert.alert(
          this.props.title,
          this.props.message,
          [
            { text: 'OK', onPress: this.props.onAlertPress },
          ]
        ) }>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default AlertBox;
