
export default function commentReducer(state = [] ,action){
  console.log(action)
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state,action.comment]
    default:
      return state
  }
}
