const wrapper = document.querySelector(".wrapper");
const popUp = document.querySelector(".pop-up");
const body = document.querySelector("body");
const loginBtn = document.querySelector(".header__login_btn");
const acc = document.getElementById('acc');
//const singInBtn = document.querySelector(".btn-sing-in");
//const registerBtn = document.querySelector('.pop-up__register-btn');
//const loginInput = document.getElementById('login');
//const pswdInput = document.getElementById('pswd');

wrapper.addEventListener("click", (e) => {
  if (e.target !== loginBtn) {
    popUp.classList.add('pop-up_hide');
  }
})

loginBtn.addEventListener("click", loginHeandler);
acc.addEventListener("click", (e) => {
  loginHeandler();
  e.stopPropagation();
});

function loginHeandler() {
  popUp.innerHTML = `<div class="pop-up__content-container">
    <h2 class="pop-up__h2"> Log in to your account</h2>
    <button class="pop-up__btn btn-facebook"><img src="./src/assets/img/path14.png" alt="fb"> Sign In with Facebook</button>
    <button class="pop-up__btn btn-google"><img src="./src/assets/img/google.png" alt="Google">Sign In with Google</button>
    <div class="pop-up__line"><div class="pop-up__span"></div> or <div class="pop-up__span"></div></div>
    <div class="pop-up__input">
      <h4>E-mail</h4>
      <input id="login" type="text">
    </div>
    <div class="pop-up__input">
      <h4>Password</h4>
      <input id="pswd" type="text">
    </div>
    <button class="pop-up__btn btn-sing-in">Sign In</button>
    <a  class="pop-up__forgot" href="https://ya.ru" target="_blank">Forgot Your Password?</a>
    <div class="pop-up__line"> <div class="line-long"></div></div>
    <div class="pop-up__register">Don’t have an account? <a id="register" class="pop-up__register-btn" href="#">Register</a></div>
  </div>`
  popUp.classList.remove('pop-up_hide');
  const singInBtn = document.querySelector(".btn-sing-in");
  const registerBtn = document.getElementById('register');
  const loginInput = document.getElementById('login');
  const pswdInput = document.getElementById('pswd');
  singInBtn.onclick = singInBtnHeandler(loginInput, pswdInput);
  registerBtn.onclick = sinUpHandler;
}

function sinUpHandler() {
  popUp.innerHTML = `<div class="pop-up__content-container">
        <h2 class="pop-up__h2">Create account</h2>
        <div class="pop-up__input">
          <h4>E-mail</h4>
          <input id="login" type="text">
        </div>
        <div class="pop-up__input">
          <h4>Password</h4>
          <input id="pswd" type="text">
        </div>
        <button class="pop-up__btn btn-sing-in">Sing up</button>
        <div class="pop-up__line"> <div class="line-long"></div></div>
        <div class="pop-up__register">Already have an account? <a id='singin' class="pop-up__register-btn" href="#">Log in</a></div>
        </div>`
  const singInBtn = document.querySelector(".btn-sing-in");
  const loginBtn = document.getElementById('singin');
  const loginInput = document.getElementById('login');
  const pswdInput = document.getElementById('pswd');
  singInBtn.onclick = singInBtnHeandler(loginInput, pswdInput);
  loginBtn.onclick = loginHeandler;
}

function singInBtnHeandler(loginInput, pswdInput) {
  return () => alert(`Email: ${loginInput.value} Password: ${pswdInput.value}`)
}








