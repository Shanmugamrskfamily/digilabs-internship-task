import React from 'react';
import Modal from 'react-modal';

const NotificationModal = ({ isOpen, onRequestClose, onAllow, onDeny }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-full max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg"
      overlayClassName="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Allow Notifications?</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onAllow}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Allow
          </button>
          <button
            onClick={onDeny}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Deny
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
