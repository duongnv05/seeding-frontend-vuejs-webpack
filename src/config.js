exports.URL_SERVER_DYNAMIC = 'http://localhost:3000'

exports.isProduction = process.env.NODE_ENV === 'production'

/*----------------------- AXIOS ----------------------*/
exports.AXIOS_CONFIG = {
  'Content-Type': 'application/x-www-form-urlencoded',
  withCredentials: true
};
exports.AXIOS_CONFIG_UPLOAD_MUlTI = {
  headers: {
    'content-type': 'multipart/form-data'
  }
};
exports.AXIOS_CONFIG_UPLOAD = {
    'content-type': 'form-data',
    withCredentials: true
};