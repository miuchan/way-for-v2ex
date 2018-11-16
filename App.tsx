import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { TabBar, SearchBar, List, Tabs } from 'antd-mobile-rn'
import { Provider } from 'mobx-react'
import ExplorePage from './app/pages/ExplorePage'
import MePage from './app/pages/MePage'
import NodePage from './app/pages/NodePage'
import LatestPage from './app/pages/LatestPage'
import HotPage from './app/pages/HotPage'
import subjectStore from './app/stores/subjectStore'

const store = {
  subjectStore,
}

interface State {
  selectedTab: string
}

export default class App extends Component<State> {
  
  state = {
    selectedTab: '探索',
  }

  constructor(props: any) {
    super(props);

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
        tabName: '最新',
        icon: require('./assets/images/latest.png'),
        selectedIcon: require('./assets/images/latest-selected.png'),
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
        {this.state.selectedTab === '最新' && <LatestPage />}
        {this.state.selectedTab === '热门' && <HotPage />}
        {this.state.selectedTab === '我的' && <MePage />}
      </TabBar.Item>
      )
    )
  }

  render() {

    return (
      <Provider {...store}>
        <View style={{ flex: 1 }}>
          {this.state.selectedTab === '探索' && <ExplorePage />}          
          <TabBar>
            {this.renderTabBarItem()}
          </TabBar>
        </View>
        
      </Provider>
      
    )
  }
}