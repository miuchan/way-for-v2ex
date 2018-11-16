import React, { Component } from 'react'
import { View } from 'react-native'
import { observer, inject } from 'mobx-react'
import NavigationBar from 'react-native-navbar'
import SubjectList from '../components/SubjectList'

type Props = {
  subjectStore: any
}

@inject('subjectStore')
@observer
export default class HotPage extends Component<Props> {
  
  componentDidMount() {
    this.props.subjectStore.getHotSubjectList()
  }

  render() {
    return (    
      <View style={{ width: '100%', flex: 1, alignItems: 'center', backgroundColor: '#F5F5F5' }}>
        <NavigationBar
          style={{ width: '100%' }}
          title={{ title: '热门' }}
        />
        <SubjectList 
          subjects={this.props.subjectStore.hotSubjectList}
          onRefresh={this.props.subjectStore.getHotSubjectList}/>
      </View>
    )
  }
}