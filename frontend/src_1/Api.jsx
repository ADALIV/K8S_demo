import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',  // Express 서버의 주소
  timeout: 10000,  // 요청 제한 시간 설정 (옵션)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
