/* global axios */
class ApiClient {
  constructor(resource, options = {}) {
    this.options = options;
    this.resource = resource;
  }

  get url() {
    return `${import.meta.env.VITE_BASE_API_URL}/${this.resource}`;
  }

  get() {
    return axios.get(this.url);
  }

  show(id) {
    return axios.get(`${this.url}/${id}`);
  }

  create(data) {
    return axios.post(`${this.url}`, data);
  }

  update(id, data) {
    return axios.put(`${this.url}/${id}`, data);
  }

  delete(id) {
    return axios.delete(`${this.url}/${id}`);
  }
}

export default ApiClient;
