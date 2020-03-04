import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = (localStorage.getItem("_token"));

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getToken(formData, endpoint) {
    const { firstName, lastName } = formData;
    [formData.first_name, formData.last_name] = [firstName, lastName];
    delete formData.firstName;
    delete formData.lastName;
    console.log({formData, endpoint});
    let res = await this.request(endpoint, formData, 'post');
    console.log(res);
    localStorage.setItem("_token", res.token);
    localStorage.setItem("username", formData.username);
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(search) {
    const endpoint = search ? `companies/?search=${search}` : 'companies/';
    let res = await this.request(endpoint);
    return res.companies;
  }

  static async getJobs(search) {
    const endpoint = search ? `jobs/?search=${search}` : 'jobs/';
    let res = await this.request(endpoint);
    return res.jobs;
  }
}

export default JoblyApi;