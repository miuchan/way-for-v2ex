import React, { Component, Key } from 'react'
import { View, Text } from 'react-native'
import { observer, inject } from 'mobx-react'
import { Tabs } from 'antd-mobile-rn'
import NavigationBar from 'react-native-navbar'
import SubjectList from '../components/SubjectList'

type Props = {
  subjectStore: any
}

const tabs = [
  { title: '技术', name: 'tech' },
  { title: '创意', name: 'creative' },
  { title: '好玩', name: 'play'},
  { title: 'Apple', name: 'apple' },
  { title: '酷工作', name: 'jobs' },
  { title: '交易', name: 'deals' },
  { title: '城市', name: 'city' },
  { title: '问与答', name: 'qna' },
  { title: '最热', name: 'hot' },
  { title: '全部', name: 'all' },
  { title: 'R2', name: 'r2' },
  { title: '节点', name: 'nodes' },
  { title: '关注', name:'members' },
]

@inject('subjectStore')
@observer
class ExplorePage extends Component<Props> {

  componentDidMount() {
    this.props.subjectStore.getHotSubjectList()
  }

  renderContent() {
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    } as any

    return tabs.map((tab) => <View key={tab.name} style={{ width: '100%', flex: 1, alignItems: 'center', backgroundColor: '#F5F5F5' }}>
    <SubjectList 
      refreshing={this.props.subjectStore.isFetching}
      subjects={this.props.subjectStore.hotSubjectList}
      onRefresh={this.props.subjectStore.getHotSubjectList}/>
  </View>)
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          style={{ width: '100%' }}
          title={{ title: '热门' }}
        />
        <Tabs tabs={tabs} initialPage={0}>
          {this.renderContent()}
        </Tabs>
      </View>
      
    )
  }
}

export default ExplorePage