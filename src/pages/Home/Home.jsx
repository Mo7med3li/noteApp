import { useState } from "react";
import { Link } from "react-router-dom";
import NoteCard from "../../components/NoteCard/NoteCard";

export default function Home() {
  let [show, setShow] = useState(null);
  return (
    <>
      <section className="grid grid-cols-12 relative  ">
        {show && (
          <div
            className="absolute bg-black  inset-0 bg-opacity-35"
            onClick={() => {
              setShow(false);
            }}
          ></div>
        )}
        <div className="col-span-2 p-5 bg-gray-800 min-h-screen ">
          <div className="font-bold text-3xl">
            <Link to="/">
              <i className="fa-regular fa-note-sticky mr-2 text-primary"></i>
              Notes
            </Link>
          </div>
        </div>
        <div className="col-span-10  p-6 min-h-screen ">
          <div className="flex justify-end">
            <button className="btn rounded-lg  " onClick={() => setShow(true)}>
              <i className="fa-solid fa-plus mr-2"></i>Add Note
            </button>
          </div>
          <div className="grid grid-cols-9 pt-5 gap-2">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
        </div>
      </section>
    </>
  );
}
