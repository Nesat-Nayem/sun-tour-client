import { ADD_ORDER, ADD_REVIEW,LOAD_PAGE, ADD_SERVICE, LOAD_SERVICE, LOAD_SINGLE_SERVICE } from "./serviceAction"

const initialState = {
  loading: false,
  services: [],
  // pageNumber:Number,
  service: {},
  orders: []
}

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
    case ADD_REVIEW:
   
    case ADD_ORDER: return {
      ...state,
      loading: false
    }
    case LOAD_SERVICE: return {
      ...state,
      services: action.payload,
      loading: false
    }
// costom
    // case LOAD_PAGE: return {
    //   ...state,
    //   pageNumber: action.payload
      
    // }
    // constom
    case LOAD_SINGLE_SERVICE: return {
      ...state,
      service: action.payload,
      loading: false
    }
    default: return {
      ...state
    }
  }
}

export default serviceReducer;