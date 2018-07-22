var tools = {
  baseUrl: 'http://localhost:5500',
  // 验证手机号码
  isPoneAvailable (phoneNum) {
    var myreg = /^[1][3,4,5,6,7,8][0-9]{9}$/
    if (!myreg.test(phoneNum)) {
      return false
    } else {
      return true
    }
  }
}

export default tools
