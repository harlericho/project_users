import React, { Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { createUser, updateUser } from "./Server";
const initalFormState = {
  names: "",
  email: "",
  rol: "",
  id: null,
};
function Modal({ getUsers, setDataEdit, dataEdit }) {
  const [form, setForm] = useState(initalFormState);
  const refNames = useRef();
  const refEmail = useRef();
  const refRol = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      postUser(form);
    } else {
      putUser(form);
    }
  };
  const postUser = async (user) => {
    try {
      const response = await createUser(user);
      if (response.status === 201) {
        toast.success(response.data.user, { theme: "dark" });
        getUsers();
        setForm(initalFormState);
      }
    } catch (error) {
      if (error.response.status === 403) {
        if (error.response.data.error.names) {
          toast.error(error.response.data.error.names.msg, { theme: "dark" });
          refNames.current.focus();
        } else if (error.response.data.error.email) {
          toast.error(error.response.data.error.email.msg, { theme: "dark" });
          refEmail.current.focus();
        } else if (error.response.data.error.rol) {
          toast.error(error.response.data.error.rol.msg, { theme: "dark" });
          refRol.current.focus();
        }
      } else if (error.response.status === 409) {
        toast.warning(error.response.data.error, { theme: "dark" });
        refEmail.current.focus();
      }
    }
  };

  const putUser = async (user) => {
    try {
      const response = await updateUser(user);
      if (response.status === 200) {
        toast.success(response.data.user, { theme: "dark" });
        getUsers();
        setForm(initalFormState);
      }
    } catch (error) {
      if (error.response.status === 403) {
        if (error.response.data.error.names) {
          toast.error(error.response.data.error.names.msg, { theme: "dark" });
          refNames.current.focus();
        } else if (error.response.data.error.email) {
          toast.error(error.response.data.error.email.msg, { theme: "dark" });
          refEmail.current.focus();
        } else if (error.response.data.error.rol) {
          toast.error(error.response.data.error.rol.msg, { theme: "dark" });
          refRol.current.focus();
        }
      } else if (error.response.status === 409) {
        toast.warning(error.response.data.error, { theme: "dark" });
        refEmail.current.focus();
      }
    }
  };

  useEffect(() => {
    if (dataEdit) {
      toast.warning("It is in update mode", { theme: "dark" });
      setForm(dataEdit);
    } else {
      setForm(initalFormState);
    }
    refNames.current.focus();
  }, [dataEdit]);

  return (
    <Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title text-white" id="exampleModalLabel">
                {dataEdit ? "Edit user" : "Create user"}
              </h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDataEdit(null)}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="names" className="form-label">
                    Names
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    name="names"
                    ref={refNames}
                    value={form && form.names}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark text-white"
                    name="email"
                    aria-describedby="emailHelp"
                    ref={refEmail}
                    value={form && form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rol" className="form-label">
                    Rol
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    name="rol"
                    ref={refRol}
                    value={form && form.rol}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className={dataEdit ? "btn btn-success" : "btn btn-primary"}
                    title={dataEdit ? "Update" : "Create"}
                  >
                    {dataEdit ? (
                      <FontAwesomeIcon icon={faRefresh} />
                    ) : (
                      <FontAwesomeIcon icon={faPlus} />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
