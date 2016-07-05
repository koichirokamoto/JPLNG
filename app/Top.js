import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import List from './List';

const { height, width } = Dimensions.get('window');
const baseHeight = 568;
const baseWidth = 320;

class Top extends Component {
  constructor() {
    super();
    this.onPressForSound = this.onPressForSound.bind(this);
    this.onPressForBack = this.onPressForBack.bind(this);
    this.onPressForForward = this.onPressForForward.bind(this);
    this.onPressForStart = this.onPressForStart.bind(this);
    this.onPressForEnd = this.onPressForEnd.bind(this);
    this.onPressList = this.onPressList.bind(this);
    this.onPressListItem = this.onPressListItem.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({ word: this.props.word, type: 'INIT' });
  }

  onPressForSound() {
    this.props.dispatch({ sound: this.props.word.sound, type: 'SOUND' });
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

  onPressList() {
    this.props.dispatch({ word: this.props.word, type: 'LIST' });
  }

  onPressListItem(now) {
    this.props.dispatch({ now: now, type: 'MOVE' });
  }

  render() {
    if (this.props.word.isList) {
      return this.renderList();
    }
    return this.renderHiragana();
  }

  renderList() {
    return (
      <List
        listStyle={styles.listContainer}
        now={this.props.word.now}
        onPressListItem={this.onPressListItem}
        />
    );
  }

  renderHiragana() {
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
        <Text style={styles.list} onPress={this.onPressList}>
          いちらん
        </Text>
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
    width: (250 / baseWidth) * width,
    height: (250 / baseWidth) * width,
    fontSize: (250 / baseWidth) * width,
    fontWeight: 'bold',
    marginTop: (20 / baseHeight) * height,
    alignSelf: 'center',
    color: '#F7ABAD',
  },
  beforeAfter: {
    width: (250 / baseWidth) * width,
    height: (125 / baseWidth) * width,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: (30 / baseWidth) * width,
  },
  beforeAfterHiragana: {
    width: (125 / baseWidth) * width,
    height: (125 / baseWidth) * width,
    fontSize: (125 / baseWidth) * width,
    alignSelf: 'center',
    color: '#FAF0E6',
  },
  menuContainer: {
    flex: 1,
    marginBottom: (15 / baseHeight) * height,
  },
  menu: {
    width: (250 / baseWidth) * width,
    marginTop: 0,
    marginBottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  menuLeft: {
    fontSize: (30 / baseWidth) * width,
    width: (100 / baseWidth) * width,
    height: (40 / baseWidth) * width,
    marginTop: (5 / baseWidth) * width,
    marginLeft: (15 / baseWidth) * width,
    marginRight: (10 / baseWidth) * width,
    marginBottom: (5 / baseWidth) * width,
    color: '#FFFF92',
  },
  menuRight: {
    fontSize: (30 / baseWidth) * width,
    width: (100 / baseWidth) * width,
    height: (40 / baseWidth) * width,
    marginTop: (5 / baseWidth) * width,
    marginLeft: (15 / baseWidth) * width,
    marginRight: (10 / baseWidth) * width,
    marginBottom: (5 / baseWidth) * width,
    color: '#FFFF92',
  },
  verticalBorder: {
    width: 2,
    height: (60 / baseWidth) * width,
    borderWidth: 2,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
  },
  horizonBorder: {
    width: (250 / baseWidth) * width,
    height: 2,
    borderWidth: 2,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
  },
  list: {
    fontSize: (30 / baseWidth) * width,
    width: (130 / baseWidth) * width,
    height: (40 / baseWidth) * width,
    marginTop: (10 / baseHeight) * height,
    color: '#7ECBDC',
    alignSelf: 'center',
  },
  listContainer: {
    width: (250 / baseWidth) * width,
    height: (500 / baseWidth) * width,
    marginTop: (50 / baseHeight) * height,
    marginBottom: (50 / baseHeight) * height,
    alignSelf: 'center',
  },
});

function select(store) {
  return {
    word: store.word,
  };
}

export default connect(select)(Top);
