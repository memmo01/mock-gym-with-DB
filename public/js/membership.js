

function populateMembershipDetails(){
    $(".modal-body").empty()
    
    $(".modal-dialog").css("max-width","1000px")

    var plan1="<div class='card memPlans'><div class='card-header'>";
    plan1+="Week Membership Plan</div>";
    plan1+="<div class='card-body'>";
    plan1+="<h5 class='card-title'>Special Weekly Prices</h5>";
    plan1+="<p class='card-text'>With supporting text below as a natural lead-in to additional content.</p>";
    plan1+="<a href='#' class='btn btn-primary'>Purchase Week Plan</a></div></div>";

    var plan2="<div class='card memPlans'><div class='card-header'>";
    plan2+="Month Membership Plan</div>";
    plan2+="<div class='card-body'>";
    plan2+="<h5 class='card-title'>Special Monthly prices</h5>";
    plan2+="<p class='card-text'>With supporting text below as a natural lead-in to additional content.</p>";
    plan2+="<a href='#' class='btn btn-primary'>Purchase Month Plan</a></div></div>";

    var plan3="<div class='card memPlans'><div class='card-header'>";
    plan3+="Year Membership Plan</div>";
    plan3+="<div class='card-body'>";
    plan3+="<h5 class='card-title'>Special Yearly Prices</h5>";
    plan3+="<p class='card-text'>With supporting text below as a natural lead-in to additional content.</p>";
    plan3+="<a href='#' class='btn btn-primary'>Purchase Year Plan</a></div></div>";

    $(".modal-body").css("display","inline-flex")
    $(".modal-header").html("Membership Plans")
    $(".modal-body").append(plan1)
    
    $(".modal-body").append(plan2)
    
    $(".modal-body").append(plan3)
}
