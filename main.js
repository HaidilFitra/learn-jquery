var price = $('<p>From $300.00</p>') 


$(document).ready(function(){
  console.log("sudah jalan")
  console.log($(".sw").text())
  console.log($(".sw").html())
  console.log($(".inputan").val())

  $(".sw").text("Surabaya")
  $("#dm").html("<em>Harau</em>")
  $(".inputan").val("Jepang")
  
  $("#btn").click(function (){
    $("#destination li:first, li:last").css("background-color","blue")
  })
  $("#rm-bg").click(function(){
    $("#destination li:first,li:last").css("background-color","")
  })  

  $(".vacation > button").after(price)
  // $(".sw").remove()
  $(".sw").empty()

})
