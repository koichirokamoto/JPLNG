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
    this.onPressForStart = this.onPressForStart.bind(this);
    this.onPressForEnd = this.onPressForEnd.bind(this);
  }

  onPressForSound() {
    sound(this.props.now)
  }

  onPressForBack() {
    this.props.dispatch({ word: this.props.word, type: 'BACK' });
  }

  onPressForForward() {
    this.props.dispatch({ word: this.props.word, type: 'FORWARD' });
  }

  onPressForStart() {
    this.props.dispatch({ word: this.props.word, type: 'START' });
  }

  onPressForEnd() {
    this.props.dispatch({ word: this.props.word, type: 'END' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hiragana} onPress={this.onPressForSound}>
          {this.props.word.now}
        </Text>
        <View style={styles.beforeAfter}>
          <Text style={styles.beforeAfterHiragana}>
            {this.props.word.previous}
          </Text>
          <Text style={styles.beforeAfterHiragana}>
            {this.props.word.next}
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <Text style={styles.menuLeft} onPress={this.onPressForBack}>
              もどる
            </Text>
            <View style={styles.verticalBorder}></View>
            <Text style={styles.menuRight} onPress={this.onPressForForward}>
              すすむ
            </Text>
          </View>
          <View style={styles.horizonBorder}></View>
          <View style={styles.menu} >
            <Text style={styles.menuLeft} onPress={this.onPressForStart}>
              はじめ
            </Text>
            <View style={styles.verticalBorder}></View>
            <Text style={styles.menuRight} onPress={this.onPressForEnd}>
              さいご
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D543F',
  },
  hiragana: {
    width: 250,
    height: 250,
    fontSize: 250,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 50,
    marginLeft: 50,
    alignSelf: 'center',
    color: '#F7ABAD',
  },
  beforeAfter: {
    width: 250,
    height: 125,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  beforeAfterHiragana: {
    width: 125,
    height: 125,
    fontSize: 125,
    alignSelf: 'center',
    color: '#FAF0E6',
  },
  menuContainer: {
    flex: 1,
    marginBottom: 50,
  },
  menu: {
    width: 250,
    marginTop: 0,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  menuLeft: {
    fontSize: 30,
    width: 90,
    height: 40,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 25,
    marginBottom: 5,
    color: '#FAF0E6',
  },
  menuRight: {
    fontSize: 30,
    width: 90,
    height: 40,
    marginTop: 5,
    marginLeft: 25,
    marginRight: 10,
    marginBottom: 5,
    color: '#FAF0E6',
  },
  verticalBorder: {
    width: 2,
    height: 60,
    borderWidth: 2,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
  },
  horizonBorder: {
    width: 250,
    height: 2,
    borderWidth: 2,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
  },
});

function select(store) {
  return {
    word: store.word,
  };
}

export default connect(select)(Top);