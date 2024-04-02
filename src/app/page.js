'use client'
import { useState } from 'react';
import NotificationModal from "./NotificationModal";
import Toast from "./Toast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAllow = () => {
    closeModal();
    Toast.success('Notifications allowed!');
  };

  const handleDeny = () => {
    closeModal();
    Toast.error('Notifications denied!');
  };

  return (
    
    <div className="text-4xl font-bold text-white">
      <ToastContainer/>
      <div className="flex flex-row justify-between gap-6 m-3">
        <div>
          <img src="/basic.png" alt="Time and Location" />
        </div>
        <div>
          <img src="/indicators.png" alt="Network and Battery" />
        </div>
      </div>
      <div>
        <p className="font-inter font-semibold text-[29px] text-center text-white mt-6">Lorem Ipsum...</p>
        <p className="font-inter font-normal text-white text-[19px] text-opacity-40 text-center pt-4">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="m-2 mt-12">
        <div className="relative">
          <img src="/illustration.png" alt="waves around bell" className="m-auto relative" />
          <img src="/ri_notification-2-line.png" alt="Notification" className="m-auto absolute inset-0" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 mb-6 ml-10 mr-10">
        <button onClick={openModal} className="relative w-[327px] h-[42px] rounded-md p-0 shadow-md overflow-hidden bg-gradient-to-r from-transparent via-red-600 to-transparent font-inter font-semibold text-[16px] text-center text-white small-screen  md:w-[280px] md:h-[38px] lg:w-[300px] lg:h-[38px]">
          <span className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-red-600 to-transparent border border-solid border-[1.4px] rounded-md"></span>
          <span className="text-sm">Send Notification</span>
        </button>
        <NotificationModal isOpen={modalIsOpen} onRequestClose={closeModal} onAllow={handleAllow} onDeny={handleDeny} />
      </div>
    </div>
  );
}
