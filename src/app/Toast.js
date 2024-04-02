import { toast } from 'react-toastify';

const Toast = {
  success: (message) => {
    toast.success(message);
  },
  error: (message) => {
    toast.error(message);
  },
};

export default Toast;
