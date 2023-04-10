let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

$(document).ready(function(){
  // Lấy giá trị của tham số 'link' từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const link = urlParams.get('link');
  
  // Nếu có giá trị tham số 'link', gửi yêu cầu AJAX để tải ảnh lên
  if (link !== null) {
      $.ajax({
          url: `img/${link}.png`,
          type: 'GET',
          dataType: 'text',
          success: function(data){
              // Đổi đường dẫn của thẻ <img> thành đường dẫn của ảnh tải về
              $('#img-display').attr('src', `img/${link}.png`);
          },
          error: function(){
              console.log('Failed to load image');
          }
      });
  }
});