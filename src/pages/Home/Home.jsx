import { useContext } from "react";
import { Link } from "react-router-dom";
import NoteCard from "../../components/NoteCard/NoteCard";
import NoteBox from "../../components/NoteBox/NoteBox";
import { NoteContext } from "../../context/Note.context";

export default function Home() {
  let { setShow, show, setShowUpdate } = useContext(NoteContext);
  function hide() {
    setShow(false);
    setShowUpdate(false);
  }
  return (
    <>
      <section className="grid grid-cols-12">
        {show && (
          <div
            className="fixed  bg-black  inset-0 bg-opacity-35 flex justify-center"
            onClick={hide}
          >
            <NoteBox hideBox={hide} />
          </div>
        )}
        <div className="col-span-2 p-5 bg-gray-800 min-h-screen ">
          <div className="font-bold text-3xl hidden lg:block text-white">
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
          </div>
        </div>
      </section>
    </>
  );
}
