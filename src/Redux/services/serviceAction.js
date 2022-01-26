import axios from "axios";

export const ADD_SERVICE = "ADD_SERVICE";
export const ADD_ORDER = "ADD_ORDER";
export const LOAD_SERVICE = "LOAD_SERVICE";
export const ADD_REVIEW = "ADD_REVIEW";
export const LOAD_SINGLE_SERVICE = "LOAD_SINGLE_SERVICE";

export const addService = (payload) => {
  return {
    type: ADD_SERVICE,
    payload,
  };
};
export const addOrder = (payload) => {
  return {
    type: ADD_ORDER,
    payload,
  };
};
export const loadService = (payload) => {
  return {
    type: LOAD_SERVICE,
    payload,
  };
};
export const loadSingleService = (payload) => {
  return {
    type: LOAD_SINGLE_SERVICE,
    payload,
  };
};
export const addReview = (payload) => {
  return {
    type: ADD_REVIEW,
    payload,
  };
};

export const getAddedService = (service) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/addService", service)
      .then((res) => {
        dispatch(addService(res.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
export const getAddedOrder = (order) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/addOrder", order)
      .then((res) => {
        if (res.data) {
          dispatch(addOrder(res.data));
          alert("Order Purchased Successfully");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
export const getLoadedService = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/service")
      .then((res) => {
        dispatch(loadService(res.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
export const getSingleService = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/services/${id}`)
      .then((res) => {
        dispatch(loadSingleService(res.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const getAddedReview = (review) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/addReview", review)
      .then((res) => {
        dispatch(addReview(res.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
