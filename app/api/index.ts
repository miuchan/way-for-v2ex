import axios from 'axios'

export function getHotSubjectList() {
  return axios.get('https://www.v2ex.com/api/topics/hot.json')
}