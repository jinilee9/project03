// login 
// const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginBtn');
const loginErrorMsg = document.getElementById('loginMsg');

const loginID = document.querySelector('#id');
const loginPW = document.querySelector('#pw');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();


    // const id = loginForm.id.value;
    // const pw = loginForm.pw.value;

    console.log("hello", loginID.value);
    // if (id === 'user' && pw === '')


});

loginfetch = () => {
    fetch('API URL', {
        method: 'POST',
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        }),
    })
        .then(response => response.json())
        .then(response => {
            if (response.message === 'INVALID_USER') {
                alert('아이디 또는 비밀번호가 맞지 않습니다.');
            } else if (response.message === 'SUCCESS') {
                this.props.history.push('/main-seong/');
        }
    });
};

async function login(id,pw,login_type){
    const res = await fetch("https://openmarket.weniv.co.kr/accounts/login/",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            "username": id,
            "password": pw,
            "login_type": login_type 
        })
    })
    const json = await res.json()
    console.log(json)
}


// https://kenkyuanime.com/jwt%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C_%EB%A1%9C%EA%B7%B8%EC%9D%B8%EA%B5%AC%ED%98%84/