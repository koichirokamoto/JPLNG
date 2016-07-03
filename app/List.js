import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const data = [
  ['あ', 'い', 'う', 'え', 'お'],
  ['か', 'き', 'く', 'け', 'こ'],
  ['さ', 'し', 'す', 'せ', 'そ'],
  ['た', 'ち', 'つ', 'て', 'と'],
  ['な', 'に', 'ぬ', 'ね', 'の'],
  ['は', 'ひ', 'ふ', 'へ', 'ほ'],
  ['ま', 'み', 'む', 'め', 'も'],
  ['や', ' ', 'ゆ', ' ', 'よ'],
  ['わ', ' ', ' ', ' ', 'を'],
  ['ん', ' ', ' ', ' ', ' '],
];

class List extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => false });
    this.state = { ds: ds };
    this.renderData = this.renderData.bind(this);
  }

  renderData(row) {
    let items = row.map((item) => {
      let itemStyle = styles.listItem;
      if (item === this.props.now) {
        itemStyle = styles.now;
      }
      return (
        <Text style={itemStyle}>
          {item}
        </Text>
      );
    });
    return (
      <View style={styles.itemContainer}>
        {items}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={this.props.listStyle}
          renderRow={this.renderData}
          dataSource={this.state.ds.cloneWithRows(data) }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D543F',
  },
  listItem: {
    width: 50,
    height: 50,
    fontSize: 50,
    borderWidth: 1,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
    color: '#FAF0E6',
  },
  now: {
    width: 50,
    height: 50,
    fontSize: 50,
    borderWidth: 1,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
    color: '#F7ABAD',
  },
  itemContainer: {
    width: 250,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
});

export default List;
