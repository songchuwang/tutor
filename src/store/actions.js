import axios from 'axios'
export default {
  getParamSync(context, Object) {
    context.commit('getParam',Object);
  },
  getData(context, data) {
    axios.get('../../static/mock/static.json')
    .then((res)=>{
      context.commit(SET_STUDENTDINFO,res.data);
    })

  }
}
