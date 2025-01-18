import React, { useContext } from "react";
import { NoteContext } from "../../context/Note.context";

export default function NoteBox({ hideBox }) {
  let { showUpdate, formik } = useContext(NoteContext);

  return (
    <>
      <div
        className="bg-white w-1/2 h-fit rounded-lg shadow-lg p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b-2 pb-5">
          <div className="font-bold text-xl">Model Heading</div>
          <button>
            <i className="fa-solid fa-times text-xl" onClick={hideBox}></i>
          </button>
        </div>
        <form className="pt-5" onSubmit={formik.handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="title" className="cursor-pointer">
              Title
            </label>
            <input
              value={formik.values.title}
              type="text"
              id="title"
              className="form-input"
              placeholder="Add Title"
              name="title"
              onChange={formik.handleChange}
            />
          </div>
          <div className="space-y-2 border-b-2 py-3">
            <label htmlFor="desc" className="cursor-pointer">
              Description
            </label>
            <textarea
              value={formik.values.content}
              className="form-input resize-none "
              placeholder="Add Description"
              id="desc"
              name="content"
              onChange={formik.handleChange}
              rows={4}
            ></textarea>
          </div>
          <div className="pt-5 flex justify-end gap-4">
            <button
              type="button"
              className="btn rounded-lg bg-slate-700"
              onClick={hideBox}
            >
              Close
            </button>
            {!showUpdate && (
              <button type="submit" className="btn rounded-lg ">
                Add Note
              </button>
            )}
            {showUpdate && (
              <button type="submit" className="btn bg-lime-500 rounded-lg ">
                UpdateNote
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
