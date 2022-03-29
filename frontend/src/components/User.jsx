import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import { getAllUsers, deleteUser } from "./Server";
import swal from "sweetalert";
import List from "./List";
import Modal from "./Modal";
function User() {
  const [users, setUsers] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);
  const getUsers = async () => {
    try {
      const res = await getAllUsers();
      toast.success("Users loaded successfully", { theme: "dark" });
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUserRecord = async (id) => {
    try {
      await deleteUser(id);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUserById = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Hears! Your record has been deleted!", {
          icon: "success",
        });
        deleteUserRecord(id);
      } else {
        swal("Your have canceled the process!");
      }
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Fragment>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="card bg-dark text-white">
        <div className="card-header">Users</div>
        <div className="card-body">
          <h5 className="card-title">Module users</h5>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setDataEdit(null)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <List
            users={users}
            setDataEdit={setDataEdit}
            deleteUserById={deleteUserById}
          />
          <Modal
            getUsers={getUsers}
            setDataEdit={setDataEdit}
            dataEdit={dataEdit}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default User;
