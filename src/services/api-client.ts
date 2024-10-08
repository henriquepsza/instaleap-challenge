import axios, { AxiosRequestConfig } from 'axios';

// Create an axios instance with a base URL and default headers
const axiosInstance = axios.create({
  baseURL: 'https://api.xandar.instaleap.io', // Replace with your API's URL if necessary
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi',
  },
});

class APIClient<TRequest, TResponse> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // GET method to fetch all records
  getAll = async (config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<TResponse[]>(this.endpoint, config);
    return res.data;
  };

  // GET method to fetch a single record by ID
  get = async (id: number | string, config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<TResponse>(
      `${this.endpoint}/${id}`,
      config
    );
    return res.data;
  };

  // POST method to create a new record
  post = async (data: TRequest, config?: AxiosRequestConfig) => {
    const res = await axiosInstance.post<TResponse>(
      this.endpoint,
      data,
      config
    );
    return res.data;
  };

  // PUT method to update a record by ID
  put = async (
    data: TRequest,
    config?: AxiosRequestConfig,
    customEndpoint?: string
  ) => {
    const url = customEndpoint || this.endpoint;
    const res = await axiosInstance.put<TResponse>(url, data, config);
    return res.data;
  };

  // DELETE method to remove a record by ID
  delete = async (id: number | string, config?: AxiosRequestConfig) => {
    const res = await axiosInstance.delete<TResponse>(
      `${this.endpoint}/${id}`,
      config
    );
    return res.data;
  };
}

export default APIClient;
