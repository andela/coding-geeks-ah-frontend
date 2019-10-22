const { token } = localStorage;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};

export default axiosConfig;
