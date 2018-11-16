import { observable, action } from 'mobx'
import * as api from '../api'

export interface subjectList {
  [key: string]: any
}

class SubjectStore {
  @observable isFetching = false
  @observable hotSubjectList: subjectList = []
  @observable latestSubjectList: subjectList = []

  @action
  async getHotSubjectList() {
    if(this.isFetching) return
    const { data } = await api.getHotSubjectList()
    this.hotSubjectList = data
    console.log(data)
  }

  @action
  async getLatestSubjectList() {
    if(this.isFetching) return
    const { data } = await api.getLatestSubjectList()
    this.latestSubjectList = data
    console.log(data)
  }

}

export default new SubjectStore()