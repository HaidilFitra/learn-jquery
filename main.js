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

  $("#rm-pdg").on('click',function(){
    $(".pdg").fadeOut(2000)
    alert('padang lenyap')
  })

  $("#show-pdg").on('click',function(){
    // $(".pdg").toggle()
    // $(".pdg").fadeToggle()
    // $(".pdg").slideToggle()
    $(".pdg").animate({
      marginLeft:100
    })
  })

  $('.your-class').slick({   //bisa menggeser content ke kiri dan kanan
  });
})
