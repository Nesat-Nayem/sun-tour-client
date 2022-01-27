// import {
//   Button,
//   Container,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const MyOrder = () => {
//   const [myOrders, setMyOrders] = useState([]);
//   const [isDeleted, setIsDeleted] = useState(null);

//   const { user } = useAuth();
//   // const currentEmail = user?.email;
//   // console.log(currentEmail)

//   // get data from database
//   useEffect(() => {
//     fetch(`http://localhost:5000/MyOrders/${user.email}`)
//       .then((res) => res.json())
//       .then((data) => setMyOrders(data));
//   }, [isDeleted, user]);

//   // console.log(myOrders)

//   // delete
//   const handleDelete = (id) => {
//     const proceed = window.confirm("Are you sure to Delete");
//     if (proceed) {
//       fetch(`http://localhost:5000/myOrders/order/delete/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((result) => {
//           if (result.deletedCount) {
//             alert("delete success");
//             // const remaining = products.filter(product => product._id !== id);
//             // setProducts(remaining)
//             setIsDeleted(true);
//           } else {
//             setIsDeleted(false);
//           }
//         });
//     }
//   };
//   return (
//     <Container>
//       <h3>My Order {myOrders.length}</h3>

//       <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>#</TableCell>
//               <TableCell>Customer Name</TableCell>
//               <TableCell>Phone Number</TableCell>
//               <TableCell>Product</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//               <TableCell>Payment</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {myOrders.map((order, index) => (
//               <TableRow
//                 key={order._id}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell> {index} </TableCell>
//                 <TableCell> {order.name} </TableCell>
//                 <TableCell> {order.phone} </TableCell>
//                 <TableCell> {order.serviceName} </TableCell>
//                 <TableCell> {order.price} </TableCell>
//                 <TableCell> {order.status} </TableCell>
//                 <TableCell>
//                   {" "}
//                   {order.payment ? (
//                     "Paid"
//                   ) : (
//                     <Link to={`/dashboard/MyOrders/${order._id}`}>
//                       <Button>Pay</Button>
//                     </Link>
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   <Button
//                     onClick={() => handleDelete(order?._id)}
//                     variant="outlined"
//                     color="error"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default MyOrder;


import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
// import { getAddedOrder} from '../../Redux/services/serviceAction';
import { getAddedOrder} from '../../../Redux/services/serviceAction';



const styles = {
  primary: {
    background: 'linear-gradient(45deg, #27b1fc 30%, #57e2ff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: "auto",
    marginRight: "5px"
  },
}


const MyOrder = () => {
  const { user } = useAuth()
  const dispatch = useDispatch()
  const [data, setData] = useState({})
  const service = useSelector(state => state.services.service)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getAddedOrder(data))
    e.target.reset()
  }

  const getServiceData = (e) => {
    const value = e.target.value
    const property = e.target.name
    const newObj = { ...data }
    newObj[property] = value
    // newObj.name = user.displayName
    // newObj.email = user.email
    newObj.status = 'Pending'
    newObj.price = service.price
    newObj.serviceImg = service.img
    newObj.serviceName = service.name
    setData(newObj)
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Your Name"
                  id="fullWidth"
                  // value={user.displayName || ''}
                  onChange={getServiceData}
                  name='name'
                  autoFocus
                  required
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Post Title"
                  id="fullWidth"
                  // type='tytle'
                  // value={user.email || ''}
                  onChange={getServiceData}
                  name='Title'
                  autoFocus
                  required
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Img Url"
                  id="fullWidth"
                  // type='number'
                  onChange={getServiceData}
                  name='img'
                  required
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Travel Cost"
                  // value={service.name || ''}
                  id="fullWidth"
                  type='Number'
                  onChange={getServiceData}
                  name='travel cost'
                  required
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Location"
                  id="fullWidth"
                  onChange={getServiceData}
                  name='location'
                  required
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Description"
                  id="fullWidth"
                  onChange={getServiceData}
                  name='dec'
                  required
                />

                <TextField
                  sx={{ my: 1 }}
                  fullWidth label=""
                  id="fullWidth"
                  type='date'
                  onChange={getServiceData}
                  name='date'
                />

              {/* costom */}

        <InputLabel id="demo-simple-select-autowidth-label">Catagore</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={age}
          name='catagory'
          onChange={getServiceData}
          autoWidth
          sx={{ my: 1 }}
          rows={4}
          multiline
          fullWidth
          label="catagore"
        >
          
          <MenuItem value={"new"}>New</MenuItem>
          <MenuItem value={"trending"}>Trending</MenuItem>
          <MenuItem value={"cool"}>Cool</MenuItem>
        </Select>


        {/* costom */}

                <Button style={styles.primary} type='submit' variant="contained">Confirm Order</Button>
              </form>
    </div>
  );
};

export default MyOrder;
