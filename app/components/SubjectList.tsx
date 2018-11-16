import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { RefresherListView, LoadingBarIndicator } from 'react-native-refresher'

const SubjectList = ({ subjects, onRefresh }) => <RefresherListView
  keyExtractor={(item, index) => index.toString()}
  dataSource={subjects}
  onRefresh={onRefresh}
  indicator={<LoadingBarIndicator />}
  renderRow={({item}) => <View 
  style={{ minHeight: 80, flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 15, padding: 15, backgroundColor: '#FFF' }}>
    <Image 
      source={{uri: `https:${item.member.avatar_large}`}} 
      style={{ width: 40, height: 40, marginRight: 15, borderRadius: 20 }}/>
    <Text style={{ fontSize: 18 }}>{item.title}</Text>
  </RefresherListView>}
/>

export default SubjectList