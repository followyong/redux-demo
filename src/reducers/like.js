export default function likeReducer(state = 0 ,action){
  console.log(action)
  switch(action.type){
    case 'ADD_LIKE':
      return state+1
    default:
      return state
  }
}
