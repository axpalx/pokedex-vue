const requestInterceptor = config => config;

const responseSucessInterceptor = response => response.data;

const responseErrorInterceptor = error => {
  const response = error.response || error;
  return Promise.reject(response.data || response);
};

export { requestInterceptor, responseSucessInterceptor, responseErrorInterceptor };
