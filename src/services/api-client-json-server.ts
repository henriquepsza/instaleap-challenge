import axios, { AxiosRequestConfig } from 'axios';

// Criação de uma instância axios com a URL base do JSON Server
const jsonServerInstance = axios.create({
  baseURL: 'http://localhost:3001', // URL base do JSON Server
  headers: {
    'Content-Type': 'application/json',
  },
});

class JSONServerClient<TRequest, TResponse> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await jsonServerInstance.get<TResponse[]>(
      this.endpoint,
      config
    );
    return res.data;
  };

  get = async (id: number | string, config?: AxiosRequestConfig) => {
    const res = await jsonServerInstance.get<TResponse>(
      `${this.endpoint}/${id}`,
      config
    );
    return res.data;
  };

  post = async (data: TRequest, config?: AxiosRequestConfig) => {
    const res = await jsonServerInstance.post<TResponse>(
      this.endpoint,
      data,
      config
    );
    return res.data;
  };

  put = async (
    id: number | string,
    data: TRequest,
    config?: AxiosRequestConfig
  ) => {
    const res = await jsonServerInstance.put<TResponse>(
      `${this.endpoint}/${id}`,
      data,
      config
    );
    return res.data;
  };

  delete = async (id: number | string, config?: AxiosRequestConfig) => {
    const res = await jsonServerInstance.delete<TResponse>(
      `${this.endpoint}/${id}`,
      config
    );
    return res.data;
  };
}

export default JSONServerClient;
