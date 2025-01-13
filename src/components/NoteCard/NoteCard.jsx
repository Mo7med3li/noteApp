export default function NoteCard() {
  return (
    <>
      {" "}
      <div className="lg:col-span-3 col-span-9   rounded-lg p-6 space-y-3 shadow-xl">
        <h2 className="text-3xl font-semibold text-slate-800">Note title</h2>
        <p className="text-sm">Note Description</p>
        <div className="space-x-6">
          <i className="fa-regular fa-pen-to-square text-3xl text-yellow-600"></i>
          <i class="fa-solid fa-trash text-red-600 text-3xl"></i>
        </div>
      </div>
    </>
  );
}
