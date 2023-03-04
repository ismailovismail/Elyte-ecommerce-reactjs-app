const blogState = []
const blogReducer = (state = blogState, action) => {
     switch (action.type) {
          case "add_blog":
               return [...state, action.payload]
          case "remove_blog":
               return state.filter((fd) => {
                    return fd.id !== action.payload
               })

          case 'edit_blog':
               return state.map((fd) => {
                    if (fd.id === action.payload) {
                         return {
                              ...fd, ...action.payload
                         }
                    } else {
                         return fd
                    }

               })

          case "set_blog":
               return action.payload;


          default:
               return state
     }
}

export default blogReducer