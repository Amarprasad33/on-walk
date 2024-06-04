export default function Modal({ open, onClose, children }) {
  return (
    // backdrop
    <div
        onClick={onClose}
        className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/40" : "invisible"}`}
    >
        {/* modal */}
        <div 
            className={`bg-white rounded-xl shadow p-6 w-3/5 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            onClick={e => e.stopPropagation()}
        >
            {children}
        </div>
    </div>
  )
}