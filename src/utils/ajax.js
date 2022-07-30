// const urlPath =
//   process.env.NODE_ENV === 'development'
//     ? 'http://192.168.168.104:8324/'
//     : 'https://www.shoufacm.com/'
import $ from 'jquery'

const ajax = function (type, data, url, headersType) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: url,
      type: type || 'post',
      dataType: 'JSON',
      data: data,
      timeout: 30000,
      beforeSend: function (xhr) {
        // 可以设置token
        // if (token) {
        //   xhr.setRequestHeader('token', token)
        // }
      },
      processData: false,
      contentType: false,
      success: function (res) {
        if (res.code === '0') {
          resolve(res)
        }
      },
      error: function (res) {
        reject(res)
      }
    })
  })
}

export default ajax
