import React, { Component } from 'react';
import {
  Dimensions,
  ListView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import createFragment from 'react-addons-create-fragment';

const data = [
  ['あ', 'い', 'う', 'え', 'お'],
  ['か', 'き', 'く', 'け', 'こ'],
  ['さ', 'し', 'す', 'せ', 'そ'],
  ['た', 'ち', 'つ', 'て', 'と'],
  ['な', 'に', 'ぬ', 'ね', 'の'],
  ['は', 'ひ', 'ふ', 'へ', 'ほ'],
  ['ま', 'み', 'む', 'め', 'も'],
  ['や', ' ', 'ゆ', ' ', 'よ'],
  ['わ', ' ', 'を', ' ', 'ん'],
];

const { height, width } = Dimensions.get('window');
const baseHeight = 568;
const baseWidth = 320;

class List extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => false });
    this.state = { ds: ds };
    this.renderData = this.renderData.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }

  onPressItem(item) {
    if (item !== null && item !== ' ' && item !== '') {
      this.props.onPressListItem(item);
    }
  }

  renderData(row) {
    let items = createFragment({
      items: row.map((item) => {
        let itemStyle = styles.listItem;
        if (item === this.props.now) {
          itemStyle = styles.now;
        }
        return (
          <Text
            ref={item}
            style={itemStyle}
            onPress={() => this.onPressItem(item) }>
            {item}
          </Text>
        );
      }),
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
    width: (49 / baseWidth) * width,
    height: (49 / baseWidth) * width,
    fontSize: (49 / baseWidth) * width,
    borderWidth: (1 / baseWidth) * width,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
    color: '#FAF0E6',
  },
  now: {
    width: (49 / baseWidth) * width,
    height: (49 / baseWidth) * width,
    fontSize: (49 / baseWidth) * width,
    borderWidth: (1 / baseWidth) * width,
    borderColor: '#FAF0E6',
    alignSelf: 'center',
    color: '#F7ABAD',
  },
  itemContainer: {
    width: (250 / baseWidth) * width,
    height: (49 / baseWidth) * width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
});

export default List;
