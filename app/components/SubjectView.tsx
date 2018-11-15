import React, { Component } from 'react'
import { View, Text } from 'react-native'

type SubjectViewProps = {
  subject: any,
}

const SubjectView = (props: SubjectViewProps) => <View>
    <Text>{props.subject.item.title}</Text>   
  </View>

export default SubjectView