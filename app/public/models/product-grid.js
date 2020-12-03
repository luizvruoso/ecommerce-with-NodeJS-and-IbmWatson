function mountGridProducts(){

}

function structureGrid(name, price, img, link){

    return '<div class="col-lg-4 col-sm-12">'
        +'<div class="prod">'
            +'<div class="img-prod">'
                +'<img src="img/'+img+'" width="300px">'
                +'<div class="see-more">'
                    +'<a href="'+link+'">VEJA MAIS</a>'
                +'</div>'
            +'</div>'
            +'<div class="title-prod">'
                +'<span>'+name+'</span>'
            +'</div>'
            +'<div class="price-prod">'
                +'<span>'+price+'</span>'
            +'</div>'
        +'</div>'
    +'</div>';

}