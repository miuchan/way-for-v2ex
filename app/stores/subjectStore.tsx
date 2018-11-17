import { observable, action } from 'mobx'
import * as api from '../api'

export interface subjectList {
  [key: string]: any
}

class SubjectStore {
  @observable isFetching: boolean = false
  @observable hotSubjectList: subjectList = []
  @observable latestSubjectList: subjectList = []

  @action
  async getHotSubjectList() {
    if(this.isFetching) return
    this.isFetching = true
    const { data } = await api.getHotSubjectList()
    this.hotSubjectList = data
    this.isFetching = false
  }

  @action
  async getLatestSubjectList() {
    if(this.isFetching) return
    const { data } = await api.getLatestSubjectList()
    this.latestSubjectList = data
    this.isFetching = false
  }

}

export default new SubjectStore()