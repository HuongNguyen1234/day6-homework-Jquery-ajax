$(document).ready(function() {
  $("#btn").click(function() {
    $.ajax({
      url:
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json?fbclid=IwAR2Z_oZyZt_QihXG0wJLG0E19ihHG_jbayxd2dQOOpVVRUPtUQULOQujuz0",
      success: function(result) {
        let questions = JSON.parse(result);
        let quote =
          questions.quotes[
            Math.floor(Math.random() * questions.quotes.length) + 0
          ].quote;
        $("span").html(quote);
        var letters = "0123456789ABCDEF";
        var colors = "#";
        for (var i = 0; i < 6; i++) {
          colors += letters[Math.floor(Math.random() * 16)];
        }
        console.log(colors);
        $("#text-color").css({
          color: "red",
          transition: "all 1s ease 0s"
        });
        // $("body").css({
        //   color: "red",
        //   transition: "all 1s ease 0s"
        // });
        // $("#bg-color").css({
        //   color: "red",
        //   transition: "all 1s ease 0s"
        // });
      }
    });
  });
});
