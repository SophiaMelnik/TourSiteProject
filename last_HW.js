const login = prompt("Input your login");
localStorage.setItem('inputLogin', login);

if(login === 'Admin'){
  const password = prompt("Input your password");
  localStorage.setItem('inputPassword', password);
  if(password === '12345'){
    alert("Ласкаво просимо");
  }else{
    alert("Невірний пароль");
  }
}else{
  alert("Доступ заборонено");
}

const savedLogin = localStorage.getItem('inputLogin');
const savedPassword = localStorage.getItem('inputPassword');

console.log("Логін:", savedLogin);
console.log("Пароль:", savedPassword);