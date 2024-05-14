const login = prompt("Input your login");

if(login === 'Admin'){
  const password = prompt("Input your password");
  if(password === '12345'){
    alert("Ласкаво просимо");
  }else{
    alert("Невірний пароль");
  }
}else{
  alert("Доступ заборонено");
}