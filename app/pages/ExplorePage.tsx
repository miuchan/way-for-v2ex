import React, { Component, Key } from 'react'
import { FlatList, Text } from 'react-native'
import { observer, inject } from 'mobx-react'
import SubjectView from '../components/SubjectView'

export interface SubjectListProps {
  subjectStore: any
}

@inject('subjectStore')
@observer
class ExplorePage extends Component<SubjectListProps> {

  componentDidMount() {
    this.props.subjectStore.getHotSubjectList()
    console.log(this.props.subjectStore.hotSubjectList)
  }
  
  render() {

    return (
      <FlatList
        data={this.props.subjectStore.hotSubjectList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <SubjectView subject={item}/>}
      />
    )
  }
}

export default ExplorePage