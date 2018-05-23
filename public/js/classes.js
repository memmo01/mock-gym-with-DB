function classesList(){
        $(".modal-dialog").css("max-width","1000px")

    
        $(".modal-body").empty()
        $(".modal-header").html("Classes offered");
        

        var classes="<div class='card' style='width:25%' ><img class='card-img-top' src='../images/cardio.jpg' alt='Card image cap' width='50' height='200'>";
        classes+="<div class='card-body'>";
        classes+="<h5 class='card-title'>Cardio Class</h5>";
        classes+="<p class='card-text'>This will contain information about the cardio class and what it entails.</p></div>";
        
        var classes2="<div class='card'style='width:25%' ><img class='card-img-top' src='../images/strength.jpg' alt='Card image cap' width='50' height='200'>";
        classes2+="<div class='card-body'>";
        classes2+="<h5 class='card-title'>Strength Class</h5>";
        classes2+="<p class='card-text'>This will contain information about the cardio class and what it entails.</p></div>";
        
            var classes3="<div class='card'style='width:25%' ><img class='card-img-top' src='../images/pilates.jpg' alt='Card image cap' width='50' height='200'>";
        classes3+="<div class='card-body'>";
        classes3+="<h5 class='card-title'>Pilates Class</h5>";
        classes3+="<p class='card-text'>This will contain information about the Pilates class and what it entails.</p></div>";
        
           var classes4="<div class='card'style='width:25%' ><img class='card-img-top' src='../images/crossFit.jpg' alt='Card image cap' width='50' height='200'>";
        classes4+="<div class='card-body'>";
        classes4+="<h5 class='card-title'>Crossfit Class</h5>";
        classes4+="<p class='card-text'>This will contain information about the Crossfit class and what it entails.</p></div>";
        
        $(".modal-body").css("display","inline-flex")
        $(".modal-body").append(classes)
         $(".modal-body").append(classes2)
         $(".modal-body").append(classes3)
         $(".modal-body").append(classes4)

}