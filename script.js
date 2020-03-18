$(document).ready(function () {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // var lightLists = []




    // for (var i = 0; i < 10; i++) {
    //     var stateRandom = [
    //         "on",
    //         "off"
    //     ]

    //     var randomIndex = Math.floor(Math.random() * stateRandom.length);
    //     var newLight = {
    //         id: i,
    //         randomColor: getRandomColor(),
    //         state: stateRandom[randomIndex]
    //     }
    //     lightLists.push(newLight)

    // }
    getAjax()

    function getAjax() {
        
        $.get('http:///127.0.0.1:8000/api/lights/', function(data) {
            
            lightList = []
    
            $.each(data, function() {
    
                lightList.push(this)
            
            })
    
            console.log(lightList);
            
            
            newList()
    
            return lightList
            
            
        })
    
    }
    
    
    
    function newList() {
        
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var context = {

            light: lightList,

        };
        var html = template(context);

        $("#lights").html(html)
        
        $("button[id*='btn']").click(function () {
            
            var btnid = $(this).attr("id").replace("btn", "")

            if ($(this).hasClass('true')) {

                $('#light' + btnid).css("color", $('#icone' + btnid).data('color'))
                $(this).css("color", "green")
                $(this).removeClass('text-danger')
                $(this).removeClass('true')
                $(this).addClass('false')
                
            } else {

                $('#light' + btnid).css("color", "black")
                $(this).addClass('text-danger')
                $(this).removeClass('false')
                $(this).addClass('true')
                
            }
            
        })
        
        $("button[id*='btn']").click()
        
    }
    
    
    $('#createBtn').click(function () {
        
        var randState = [
            'True',
            'False'
        ]
        var randomIndex = Math.floor(Math.random() * randState.length);

        $.post('http:///127.0.0.1:8000/api/light/', {color: $('#createColor').val(), state : randState[randomIndex]}, function(data){
            
            getAjax()
        })

        
        console.log(lightList);
    })
    
    
    // $('button[id*="openModal"]').click(function() {
    //     var id = $(this).attr("id").replace("openModal", "")
    //     var idModal = $('#edit').attr('id').replace('edit', 'edit'+id+'')
    //     $('h4').html("Light "+id+"")
    //     $('#updateBtn').attr('id').replace('updateBtn', 'updateBtn'+id+'')
    //     // console.log(idModal)
    //     $('#edit').modal()
    // })
    
    
    
})




