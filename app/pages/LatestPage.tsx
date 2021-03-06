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
export default class LatestPage extends Component<Props> {
  
  componentDidMount() {
    this.props.subjectStore.getLatestSubjectList()
  }

  render() {
    return (    
      <View style={{ width: '100%', flex: 1, alignItems: 'center', backgroundColor: '#F5F5F5' }}>
        <NavigationBar
          style={{ width: '100%' }}
          title={{ title: '最新' }}
        />
        <SubjectList 
        refreshing={this.props.subjectStore.isFetching}
        subjects={this.props.subjectStore.latestSubjectList}
        onRefresh={this.props.subjectStore.getLatestSubjectList}/>
      </View>
    )
  }
}