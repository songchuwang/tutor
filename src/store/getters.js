export default {
  beforeFiveTip(state) {
    return state.requires.filter(item => {
      if(item.requirePrice < 600){
        return true;
      }
    })
  }
}
