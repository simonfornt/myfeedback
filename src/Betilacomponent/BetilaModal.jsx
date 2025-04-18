import React, { useState } from "react";

function BetilaModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Blur background when modal is open */}
      <div
        className={`${isOpen ? "blur-sm pointer-events-none select-none" : ""}`}
      >
        <div className="flex justify-center mt-10 " onClick={openModal}>
          <img src="modalimg.png" alt="" />
        </div>
      </div>

      {/* Custom Modal */}
      {isOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>

            {/* Modal Content */}

            <div>
              <img src="menu.png" alt="" />
              <h2 className="text-3xl font-semibold mt-4 font-lexend text-center">
                Menu Bella Italia
              </h2>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-2  border-3 border-cyan-600 text-[#1677BD]
                 rounded-full font-robot font-medium text-lg hover:bg-slate-100">
                  Download this menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BetilaModal;
