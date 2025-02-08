const images = [
  "ảnh1.jpg",  
  "ảnh2.jpg",  
  "ảnh3.jpg",  
  "ảnh4.jpg"  
];  

const validUser = {  
  username: "admin",  
  password: "admin"  
};  

function checkLogin() {  
  const username = document.getElementById("username").value;  
  const password = document.getElementById("password").value;  
  const smiley = document.getElementById("smiley");  
  if (username === validUser.username && password === validUser.password) {  
      document.getElementById("login-container").style.display = "none";  
      document.getElementById("gallery").style.display = "flex";  
      document.getElementById("link-btn").style.display = "inline-block";  
      document.body.style.backgroundColor = "#ccffcc";  
      loadImages();  
      setTimeout(() => {  
          document.body.style.backgroundColor = "#f0f0f0";  
      }, 1500);  
  } else {  
      smiley.style.display = "block";  
      document.body.style.backgroundColor = "#ffcccc";  
      alert("Sai tài khoản hoặc mật khẩu!");  
  }  
}  

function loadImages() {  
  const gallery = document.getElementById("gallery");  
  images.forEach(src => {  
      const img = document.createElement("img");  
      img.src = src;  
      img.alt = "Ảnh dìm hài hước";  
      gallery.appendChild(img);  
  });  
}
