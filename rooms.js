let rooms = 1;
let adult = 1;
let child = 0;

function roomplus() {

    if (rooms < 5) {

        if ((adult + child) <= rooms) {
            rooms = rooms + 1;
            adult = adult + 1;
            document.querySelector("#numn1").innerHTML = adult;
        }
        else {
            rooms = rooms + 1;
        }
        document.querySelector("#numn0").innerHTML = rooms;
        colorIncrement();
        if(adult==2)
        {
            document.querySelector("#dec1").style.color="#00153D";

        }
    }


}

function roomminus() {
    if((adult+child)==20)
    {
        document.querySelector("#inc1").style.color="red";
        document.querySelector("#inc2").style.color="red";
    }

    if (rooms > 1) {
        if (((rooms - 1) * 4) >= child + adult) {
            rooms = rooms - 1;
        }
        else {
            let minusvalue = ((child + adult) - ((rooms - 1) * 4));

            if (child < minusvalue) {
                minusvalue = minusvalue - child;
                child = 0;
                document.querySelector("#numn2").innerHTML = child;
                adult = adult - minusvalue;
                document.querySelector("#numn1").innerHTML = adult;
            }
            else {

                child = child - minusvalue;
                document.querySelector("#numn2").innerHTML = child;
            }
            rooms = rooms - 1;

        }
        document.querySelector("#numn0").innerHTML = rooms;
        colorDecrement();
        if(men==1)
        {
            document.querySelector("#dec1").style.color="grey";

        }
        if(child==0)
        {
            document.querySelector("#dec2").style.color="grey";
        }

    }
}





function adultplus() {
    if(adult==1 && child!=19)
    {
        document.querySelector("#dec1").style.color="#00153D";
    }
     if(adult+child==19)
    {
        document.querySelector("#inc1").style.color="grey";
        document.querySelector("#inc2").style.color="grey";
    }
    if (adult + child < 20) {
        if (adult + child >= 4 * rooms) {


            adult = adult + 1;
            rooms = rooms + 1;
            document.querySelector("#numn0").innerHTML = rooms;
        }
        else {
            adult = adult + 1;
        }
        document.querySelector("#numn1").innerHTML = adult;
        colorIncrement();
         if(adult==2)
        {
         document.querySelector("#dec1").style.color="#00153D";
    
        }
    }
 

  
   
   
}

function adultminus() {
    if((adult+child)==20 && adult!=1)
    {
        document.querySelector("#inc1").style.color="red";
        document.querySelector("#inc2").style.color="red";

    }
    if (adult > 1) {
        if ((adult + child) == rooms) {
            adult = adult - 1;
            rooms = rooms - 1;
            document.querySelector("#numn0").innerHTML = rooms;

        }
        else {
            adult = adult - 1;
        }
        document.querySelector("#numn1").innerHTML = adult;
        colorDecrement();
        if(adult==1)
        {
            document.querySelector("#dec1").style.color="grey";
        }
    }

}

function childplus() {
    if((child==0) && (rooms+adult)!=20)
    {
        document.querySelector("#dec2").style.color="#00153D";
    }
    if((adult+child)==19)
    {
document.querySelector("#inc1").style.color="grey";
document.querySelector("#inc2").style.color="grey";
    }

    if ((adult + child) < 20)
     {

        if (adult + child >= 4 * rooms) {
            child = child + 1;
            rooms = rooms + 1;
            document.querySelector("#numn0").innerHTML = rooms;
        }
        else {
            child = child + 1;
        }
        document.querySelector("#numn2").innerHTML = child;
     colorIncrement();
     if(child==2)
     {
         document.querySelector("#dec2").style.color="#00153D";
     }

    
    }

}
function childminus() {
    if((child!=0) && (adult+child)==20)
    {
        document.querySelector("#inc1").style.color="red";
        document.querySelector("#inc2").style.color="red";

    }
    if (child > 0) {
        if ((child + adult) == rooms) {
            child = child - 1;
            rooms = rooms - 1;
            document.querySelector("#numn0").innerHTML = rooms;
        }
        else {
            child = child - 1;
        }
        document.querySelector("#numn2").innerHTML = child;
        colorDecrement();
        if(child==0)
        {
            document.querySelector("#dec2").style.color="grey";
        }
    }

}



function colorIncrement() {
    if (rooms == 2) {
        document.querySelector("#dec0").style.color = "#001530";
    }
    else if (rooms == 5) {
        document.querySelector("#inc0").style.color = "grey"; 
    }
}
function colorDecrement() {
    if (rooms == 1) {
        document.querySelector("#dec0").style.color = "grey";
    }
    else if (rooms == 4) {
        document.querySelector("#inc0").style.color = "red";
    }
}