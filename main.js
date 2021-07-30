$(document).ready(function(){

    var API_KEY="AIzaSyDbK1iyFZ07Q6sYZVhI-r-Dck4GaKhNMz4"
    
    var video=``
    // for target the Form
    $("#form").submit(function(event){

        event.preventDefault()
         var search = $("#search").val()
        // Here we call the user defind function for search the video
        videoSearch(API_KEY,search,16)
    })

    function videoSearch(key,search,maxResults){
        
        $("#videos").empty()
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
            console.log(data)

            data.items.forEach(item => {
               video = `

            <iframe width="255" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
               
               `
                $("#videos").append(video)
            });
        })


    }


})