var API_url = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a02ccc34-dd28-4c5d-b527-c5433ec1a453";

function getData(cb) {
  $.ajax({
    url : API_url,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}