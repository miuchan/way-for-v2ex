import { observable, action } from 'mobx'
import * as api from '../api'

export interface HotSubjectList {
  [key: string]: object
}

class SubjectStore {
  @observable isFetching = false
  @observable hotSubjectList: [object?] = []

  @action
  async getHotSubjectList() {
    if(this.isFetching) return
    const { data } = await api.getHotSubjectList()
    this.hotSubjectList = data
    console.log(data)
  }

}

export default new SubjectStore()