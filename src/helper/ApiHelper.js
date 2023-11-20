import {kApiUrlEndpoint} from '../config/WebService';

class ApiHelper {
  get = async (url, headers = {}, timeout = 5000) => {
    url = kApiUrlEndpoint + url;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        headers,
        signal: controller.signal,
      }).then(x => x.json());
      return this.handlePromise(response);
    } catch (error) {
      return this.handlePromise({error});
    } finally {
      clearTimeout(timeoutId);
    }
  };

  post = async (url, data, headers = {}, timeout = 5000) => {
    url = kApiUrlEndpoint + url;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      }).then(x => x.json());
      return this.handlePromise(response);
    } catch (error) {
      return this.handlePromise({error});
    } finally {
      clearTimeout(timeoutId);
    }
  };

  handlePromise = response => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        throw new Error('Wrong credentials');
      } else if (response.error.code === 'NETWORK_ISSUE') {
        throw new Error('Network not available');
      } else {
        throw new Error(response.error);
      }
    } else {
      return response;
    }
  };
}

export default new ApiHelper();
