$(document).ready(function() {
  const data;
  function getData(){
    $.ajax({
      url:
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json?fbclid=IwAR2Z_oZyZt_QihXG0wJLG0E19ihHG_jbayxd2dQOOpVVRUPtUQULOQujuz0",
      success: function(result) {
        data= JSON.parse(result);
      }
    })}
  getData();
  $("#btn").click(function() {
        let quotes =
          data.quotes[
            Math.floor(Math.random() * data.quotes.length) + 0
          ];
        $("span").html(quotes.quote);
        $("p").html("- " + quotes.author);
        let letters = "0123456789ABCDEF";
        let colors = "#";
        for (let i = 0; i < 6; i++) {
          colors += letters[Math.floor(Math.random() * 16)];
        }
        console.log(colors);
        $(".text-color").css({
          color: colors,
          transition: "all 1s ease 0s"
        });
        $("body").css({
          "background-color": colors,
          transition: "all 1s ease 0s"
        });
        $(".bg-color").css({
          "background-color": colors,
          transition: "all 1s ease 0s"
        });
      })});
