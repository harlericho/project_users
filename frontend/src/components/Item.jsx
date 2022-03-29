import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
function Item({ user, index, setDataEdit, deleteUserById }) {
  return (
    <Fragment>
      <tr>
        <th itemScope="row">{index + 1}</th>
        <td>{user.names}</td>
        <td>{user.email}</td>
        <td>{user.rol}</td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            title="Edit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            id="btnEdit"
            onClick={() => setDataEdit(user)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            type="button"
            className="btn btn-danger"
            title="Delete"
            onClick={() => deleteUserById(user.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    </Fragment>
  );
}

export default Item;
