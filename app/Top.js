import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'

class Top extends Component {
  constructor() {
    super();
    this.onPressForSound = this.onPressForSound.bind(this);
    this.onPressForBack = this.onPressForBack.bind(this);
    this.onPressForForward = this.onPressForForward.bind(this);
  }

  onPressForSound() {
    sound(this.props.now)
  }

  onPressForBack() {
    this.setState(this.props.store.dispatch(this.state, 'BACK').word)
  }

  onPressForForward() {
    this.setState(this.props.store.dispatch(this.state, 'FORWARD').word)
  }

  onPressForStart() {
    this.setState(this.props.store.dispatch(this.state, 'START').word)
  }

  onPressForEnd() {
    this.setState(this.props.store.dispatch(this.state, 'END').word)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hiragana} onPress={this.onPressForSound}>
          {this.props.now}
        </Text>
        <Text style={styles.menu} onPress={this.onPressForBack}>
          もどる
        </Text>
        <Text style={styles.menu} onPress={this.onPressForForward}>
          すすむ
        </Text>
        <Text style={styles.menu} onPress={this.onPressForStart}>
          はじめ
        </Text>
        <Text style={styles.menu} onPress={this.onPressForEnd}>
          さいご
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'ヒラギノ角ゴ Pro',
  },
  hiragana: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  menu: {
    fontSize: 15,
  }
});


function select(store) {
  return {
    word: store.word,
  };
}

export default connect(select)(Top);