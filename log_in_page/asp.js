const usernameInput=document.getElementById("username_input");
const passwordInput=document.getElementById("password_input");

usernameInput.addEventListener('focus',function()
{
    this.placeholder="";
});
usernameInput.addEventListener('blur',function()
{
    this.placeholder="Username";
});

passwordInput.addEventListener('focus',function()
{
   this.placeholder="";
});

passwordInput.addEventListener('blur',function()
{
    this.placeholder="Password";
});