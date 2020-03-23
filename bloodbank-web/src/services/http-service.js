import "whatwg-fetch";

class HttpService {
  getBloodReqs = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3004/bloodReq").then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };

  getBloodBank = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3004/bloodbank").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService;
