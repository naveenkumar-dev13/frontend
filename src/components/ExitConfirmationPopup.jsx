import React from "react";

const ExitConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[400px] mx-4 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-icons-outlined text-red-500 text-2xl">
            warning
          </span>
          <h2 className="text-2xl font-bold text-gray-800">Exit Interview?</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to exit? All your progress will be lost and
          cannot be recovered.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 text-white bg-[#1170CD] rounded-lg hover:bg-[#0E5BAA] transition-colors"
          >
            Exit Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitConfirmationPopup;