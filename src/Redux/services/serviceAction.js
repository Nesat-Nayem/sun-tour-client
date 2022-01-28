import axios from "axios";

export const ADD_SERVICE = "ADD_SERVICE";
export const ADD_ORDER = "ADD_ORDER";
export const LOAD_SERVICE = "LOAD_SERVICE";
export const ADD_REVIEW = "ADD_REVIEW";
export const LOAD_PAGE = "LOAD_PAGE";
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
  console.log(payload);
  return {
    type: LOAD_SERVICE,
    payload,
  };
};

// my costom
// export const pageCount = (payload) => {
//   console.log(payload);
//   return {
//     type: LOAD_PAGE,
//     payload,
//   };
// };
// my costom

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
        // console.log(res?.data?.count);
        dispatch(loadService(res?.data?.post));

        // console.log(res.data.count);
        // const count = res?.data?.count;
        // const pageNumber = Math.ceil(count / 10);
        // console.log(pageNumber);
        // dispatch(pageCount(pageNumber));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

// costom check
// export const getLoadedPage = () => {
//   return (dispatch) => {
//     axios
//       .get("http://localhost:5000/service")
//       .then((res) => {
//         console.log(res?.data?.post);
//         const count = res?.data?.count;
//         const pageNumber = Math.ceil(count / 10);
//         dispatch(pageCount(pageNumber));
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
// };

// costom check

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
