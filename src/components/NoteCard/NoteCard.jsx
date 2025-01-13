import { useContext, useEffect } from "react";
import { NoteContext } from "../../context/Note.context";

export default function NoteCard() {
  let { notes, getNotes } = useContext(NoteContext);
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {notes &&
        notes.map((note) => (
          <div
            key={note._id}
            className="lg:col-span-3 col-span-9   rounded-lg p-6 space-y-3 shadow-xl"
          >
            <h2 className="text-3xl font-semibold text-slate-800">
              {note.title}
            </h2>
            <p className="">{note.content}</p>
            <div className="space-x-6">
              <i className="fa-regular fa-pen-to-square text-3xl text-yellow-600"></i>
              <i className="fa-solid fa-trash text-red-600 text-3xl"></i>
            </div>
          </div>
        ))}
    </>
  );
}
