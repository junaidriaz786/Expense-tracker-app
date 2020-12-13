const AppReducer =  ((state, action)=>{
    switch(action.type){
        case "Add": {
            return [action.payload , ...state]
        }
        case "Delete": {
            state = state.filter((object, index) => index !== action.payload)
            return [...state]
            
        }

        default:
            return state;
    }
})

export default AppReducer;