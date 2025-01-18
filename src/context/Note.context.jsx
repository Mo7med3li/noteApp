import { createContext, useContext, useState } from "react";
import { userContext } from "./User.context";
import axios from "axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { object, string } from "yup";

export let NoteContext = createContext(null);
export default function NoteProvider({ children }) {
  let [notes, setNotes] = useState(null);
  let [showUpdate, setShowUpdate] = useState(null);
  let [updateId, setUpdateId] = useState(null);

  let [show, setShow] = useState(null);
  let { token } = useContext(userContext);
  async function addNote(values) {
    let toastId = toast.loading("Adding Note... ");
    try {
      const options = {
        url: "https://note-sigma-black.vercel.app/api/v1/notes",
        method: "POST",
        data: values,
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      let { data } = await axios.request(options);
      if (data.msg === "done") {
        toast.success("Note Added Successfully");
        getNotes();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }
  const validationSchema = object({
    title: string().required("Title is required"),
    content: string().required("Content is required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      if (showUpdate) {
        updateNote(values);
      } else {
        addNote(values);
      }
      setShow(false);
    },

    validationSchema,
  });
  async function updateNote(values) {
    let toastId = toast.loading("Updating Note... ");
    console.log(updateId);

    try {
      const options = {
        url: `https://note-sigma-black.vercel.app/api/v1/notes/${updateId}`,
        method: "PUT",
        data: values,
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      let { data } = await axios.request(options);
      if (data.msg === "done") {
        toast.success("Note Updated Successfully");
        getNotes();
        formik.resetForm();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }
  async function getNotes() {
    try {
      const options = {
        url: "https://note-sigma-black.vercel.app/api/v1/notes",
        method: "GET",
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      let { data } = await axios.request(options);
      console.log(data.notes);
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
      setNotes(null);
    }
  }
  async function deleteNote(id) {
    let toastId = toast.loading("Deleting Note... ");
    try {
      const options = {
        url: `https://note-sigma-black.vercel.app/api/v1/notes/${id}`,
        method: "DELETE",
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.msg === "done") {
        toast.success("Note Deleted Successfully");
        getNotes();
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }
  return (
    <NoteContext.Provider
      value={{
        addNote,
        getNotes,
        notes,
        deleteNote,
        show,
        setShow,
        showUpdate,
        setShowUpdate,
        updateNote,
        formik,
        updateId,
        setUpdateId,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
