redirect = function () {
  var queryParams = new URLSearchParams(window.location.search);
  var redirect = queryParams.get('query');
  return redirect ? redirect : error();
};

function error(message) {
  count = -1;
  document.getElementById("head_noticed").innerHTML = "Xin lỗi";
  document.getElementById("body_noticed").innerHTML = message ? message : "Không tồn tại đường dẫn";
};

function countDown() {
  var timer = document.getElementById("timer");
  if (count > 0) {
      count--;
      timer.innerHTML = "Trang đang chuyển hướng sau " + count + " giây"; // Timer Message
      setTimeout(countDown, 1000);
  } else {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'data.json', true);
      xhr.onload = function () {
          if (xhr.status === 200) {
              var data = JSON.parse(xhr.responseText);
              var item = data.find(function (item) {
                  return item.id === redirect;
              });
              console.log(item.name)
              if (item) {
                  if (item.type == 'link') {
                      // Redirect to the URL
                      window.location.href = item.url;
                      console.log('Success to redirect');
                  } else if (item.type == 'file') {
                      document.open();
                      document.write('');
                      document.close();
                      var embeddedContent = '<title> ' + (item.name) + ' </title><iframe src="' + item.url + '" width="100%" height="100%"></iframe>';
                      document.write(embeddedContent);
                      document.close();
                      console.log('Success to opening');
                  } else {
                      error("Liên kết không khả dụng ngay bây giờ");
                      console.log("Do not support");
                  }
              } else {
                  // Handle error or redirect to default page
                  console.log('Invalid query');
              }
          } else {
              console.log('Failed to load data');
          }
      };
      xhr.send();
  }
}

var count = 1; // Timer
var redirect = redirect(); // Target URL
