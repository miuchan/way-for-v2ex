import React from 'react'
import { View, Text, FlatList, Image, RefreshControl } from 'react-native'

const SubjectList = ({ subjects, onRefresh, refreshing }) => 
  <FlatList
    keyExtractor={(item, index) => index.toString()}
    data={subjects}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
    renderItem={({ item }) => 
    <View 
      style={{ width: '100%', minHeight: 80, flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 15, padding: 15, backgroundColor: '#FFF' }}>
      <Image 
        source={{ uri: `https:${item.member.avatar_large}` }} 
        style={{ width: 40, height: 40, marginRight: 15, borderRadius: 20 }} 
      />
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
    </View>}
  />

export default SubjectList