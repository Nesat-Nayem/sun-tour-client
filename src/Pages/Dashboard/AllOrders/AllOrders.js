import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getAddedService } from "../../../Redux/services/serviceAction";
const AllOrders = () => {
  const dispatch = useDispatch();
  const [allOrders, setAllOrders] = useState([]);
  console.log(allOrders);
  const [isDeleted, setIsDeleted] = useState(null);
  const [isUpdated, setIsUpdated] = useState(null);
  const [userPost, serUserPost] = useState({});
  const [userData, setData] = useState({});
  // get data from database
  useEffect(() => {
    fetch("https://rocky-thicket-50900.herokuapp.com/manageOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isDeleted, isUpdated]);

  // delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to Delete");
    if (proceed) {
      fetch(
        `https://rocky-thicket-50900.herokuapp.com/allOrders/order/delete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            alert("delete success");
            // setProducts(remaining)
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };

  // costom check

  const getServiceData = () => {
    const newObj = { ...userData };

    newObj.name = userPost.name;
    newObj.title = userPost.title;
    newObj.price = userPost.price;
    newObj.location = userPost.location;
    newObj.desc = userPost.desc;
    newObj.date = userPost.date;
    newObj.category = userPost.category;
    newObj.img = userPost.img;

    setData(newObj);
  };

  // costom check

  // // update
  const handleUpdateStatus = (id) => {
    // console.log(id);
    fetch(
      `https://rocky-thicket-50900.herokuapp.com/orderStatus/update/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      // .then()

      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Admin Approved");
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
  };

  const fiendId = (id) => {
    console.log(id);
    fetch(`https://rocky-thicket-50900.herokuapp.com/manageOrders/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => serUserPost(data));

    getServiceData();

    dispatch(getAddedService(userData));
  };
  return (
    <div>
      <Container>
        <h3>User All Posts {allOrders.length}</h3>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Poster Name</TableCell>

                <TableCell>Post Title</TableCell>

                <TableCell>Status</TableCell>
                <TableCell>Post Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((order, index) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell> {index} </TableCell>
                  <TableCell> {order.name} </TableCell>

                  <TableCell> {order.title.slice(0, 40)} ...</TableCell>

                  <TableCell> {order.status} </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        fiendId(order?._id);
                      }}
                      variant="outlined"
                      color="error"
                    >
                      {order?.status === "Done" ? "Updated " : "Update"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelete(order?._id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default AllOrders;
