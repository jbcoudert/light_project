$(document).ready(function() {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    var lightLists = []
    
    
    for (var i = 0; i<100; i++) {
        var stateRandom = [
            "on",
            "off"
        ]
        
        var randomIndex = Math.floor(Math.random()*stateRandom.length);
        var newLight = {
            id: i,
            randomColor : getRandomColor(),
            state : stateRandom[randomIndex]
        }
        lightLists.push(newLight)
    }
    
    
    var divLight = $('<div id="lights" class="row no-gutters"></div>')
    $('main').append(divLight)
    
    
    for (let lightList of lightLists) {
        
    
        var card = $('<div class="card col-2 p-3 border-0">')
        $('#lights').append(card)
    
        var light = $(`<div id="light${lightList.id}" class="d-flex justify-content-center"><i id="icone${lightList.id}" class="fas fa-lightbulb" style="font-size : 5rem; " data-color="${getRandomColor()}"></i></div>`)
        $(card).append(light)
    
        var cardBody = $('<div class="card-body d-flex flex-column align-items-center justify-content-center">')
        $(card).append(cardBody)
    
        var cardTitle = $(`<h5 class="card-title"> Light ${lightList.id} </h5>`)
        $(cardBody).append(cardTitle)
    
        var btn = $(`<button id="btn${lightList.id}"class="btn btn-light ${lightList.state} " data-target="#light'+i+'"><i class="fas fa-circle"></i></button>`)
        $(cardBody).append(btn)
    
        if (lightList.state == 'on') {
            $('#icone'+lightList.id).css('color', lightList.randomColor)
    
        }
    
    }
    
    $("button[id*='btn']").click(function() {
    
        var btnid = $(this).attr("id").replace("btn", "")
        console.log($("#icone"+btnid).data("color"));
        
        if ($(this).hasClass('on')) {
    
            $('#light'+btnid).css("color", $('#icone'+btnid).attr('data-color'))
            $(this).css("color", "green")
            $(this).removeClass('text-danger')
            $(this).removeClass('on')
            $(this).addClass("off")
    
        } else {
    
            $('#light'+btnid).css("color", "black")
            $(this).addClass('text-danger')
            $(this).removeClass('off')
            $(this).addClass("on")
        
        }
    
    })
    
})
    