import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { TabBar, SearchBar, List } from 'antd-mobile-rn'
import { Provider } from 'mobx-react'
import NavigationBar from 'react-native-navbar'
import ExplorePage from './app/pages/ExplorePage'
import MePage from './app/pages/MePage'
import NodePage from './app/pages/NodePage'
import subjectStore from './app/stores/subjectStore'

const store = {
  subjectStore,
}

interface State {
  selectedTab: string
}

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
}

const titleConfig = {
  title: 'Hello, world',
}
export default class App extends Component<State> {
  
  state = {
    selectedTab: 'redTab',
  }

  constructor(props: any) {
    super(props);

  }

  renderContent(pageText: any) {
    const Item = List.Item
    const Brief = Item.Brief
    return (
      <View style={{ width: '100%', flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <NavigationBar
          style={{ width: '100%'}}
          title={titleConfig}
          leftButton={rightButtonConfig}
        />
        <ScrollView
          style={{ width: '100%', flex: 1, backgroundColor: '#f5f5f9' }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <List renderHeader={() => 'basic'}>
            <Item data-seed="logId">
              标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
            </Item>
            <Item wrap>
              文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
            </Item>
            <Item disabled extra="箭头向右" arrow="horizontal" onPress={() => {}}>
              标题文字
            </Item>
            <Item extra="箭头向下" arrow="down" onPress={() => {}}>
              标题文字
            </Item>
            <Item extra="箭头向上" arrow="up" onPress={() => {}}>
              标题文字
            </Item>
            <Item extra="没有箭头" arrow="empty">
              标题文字
            </Item>
            <Item
              extra={
                <View>
                  内容内容
                  <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
                </View>
              }
              multipleLine
            >
              垂直居中对齐
            </Item>
            <Item extra="内容内容" multipleLine>
              垂直居中对齐<Brief>辅助文字内容</Brief>
            </Item>
            <Item
              wrap
              extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
              multipleLine
              align="top"
              arrow="horizontal"
            >
              顶部对齐
              <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>
              <Brief>辅助文字内容</Brief>
            </Item>
            <Item
              extra={
                <View>
                  内容内容
                  <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
                </View>
              }
              multipleLine
              align="bottom"
            >
              底部对齐
            </Item>
          </List>
          <List renderHeader={() => '带缩略图'}>
            <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
              thumb
            </Item>
            <Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              arrow="horizontal"
            >
              thumb
            </Item>
            <Item
              extra={
                <Image
                  source={{
                    uri:
                      'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                  }}
                  style={{ width: 29, height: 29 }}
                />
              }
              arrow="horizontal"
            >
              extra为Image
            </Item>
          </List>
        </ScrollView>
      </View>
    )
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    })
  }
  renderTabBarItem() {
    const items = [
      { 
        tabName: '探索',
        icon: require('./assets/images/explore.png'),
        selectedIcon: require('./assets/images/explore-selected.png'),
      },
      { 
        tabName: '热门',
        icon: require('./assets/images/hot.png'),
        selectedIcon: require('./assets/images/hot-selected.png'),
      },
      { 
        tabName: '我的',
        icon: require('./assets/images/me.png'),
        selectedIcon: require('./assets/images/me-selected.png'),
      },
    ]
    return items.map(item => (
      <TabBar.Item
        title={item.tabName}
        key={item.tabName}
        icon={item.icon}
        selectedIcon={item.selectedIcon}
        selected={this.state.selectedTab === item.tabName}
        onPress={() => this.onChangeTab(item.tabName)}
      >
        {this.state.selectedTab === item.tabName && this.renderContent(item.tabName)}
      </TabBar.Item>
      )
    )
  }
  render() {
    return (
      <Provider {...store}>
        <TabBar>
          {this.renderTabBarItem()}
        </TabBar>
      </Provider>
      
    )
  }
}