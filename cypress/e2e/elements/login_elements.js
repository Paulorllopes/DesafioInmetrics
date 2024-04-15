 class LoginElements{

  btnLogin = () => {return '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a'} 
  emailAddress = () => {return '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)'}
  password = () => {return '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)'}
  loginBTN = () => {return '#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button'}
  mensagemLogin = () => {return '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b'}

 }export default LoginElements