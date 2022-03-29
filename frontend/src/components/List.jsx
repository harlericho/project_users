import React, { Fragment } from "react";
import Item from "./Item";
function List({ users, setDataEdit, deleteUserById }) {
  return (
    <Fragment>
      <div className="table table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th itemScope="col">#</th>
              <th itemScope="col">Rol</th>
              <th itemScope="col">Names</th>
              <th itemScope="col">Email</th>
              <th itemScope="col" colSpan={2}>
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  No data users
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <Item
                  key={index}
                  index={index}
                  user={user}
                  setDataEdit={setDataEdit}
                  deleteUserById={deleteUserById}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default List;
