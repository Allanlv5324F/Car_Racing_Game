canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_minage = "racing.jpg"
car_width = 120;
car_height = 70;
car_image = "car1.png";
car_x = 10;
car_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car1.png";
car2_x = 10;
car2_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar1;
    car_imgTag = car_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar()
{
    ctx.drawImage(car1_imgTag, car_x, car_y, car_width, car_height); 
} 

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height); 
} 
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPredded = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '38')
    {
        car_up();
        console.log("up arrow key");
    }

    if(keyPressed == '40')
    {
        car_down();
        console.log("down arrow key");

        if(keyPressed == '37')
    {
        car_left();
        console.log("left arrow key");    

        if(keyPressed == '39')
        {
            car_right();
            console.log("right arrow key");
        }
        
        if(keyPressed == '87')
        {
            car2_up();
            console.log("key w");
        }    
     
        if(keyPressed == '83')
        {
            car2_down();
            console.log("key s");
        }

        if(keyPressed == '65')
        {
            car2_left();
            console.log("key a");
        }

        if(keyPressed == '68')
        {
            car2_right();
            console.log("key d");
        }    
}

function car_up()
{
    if(car_y >=0)
    {
        car_y = car_y - 10;
        console.log("When up arrow is pressed, x = " + car_x + " | y =" +car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car_down()
{
    if(car2_y <=500)
    {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car_x + " | y =" +car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car_left()
{
    if(car_y >=0)
    {
        car_y = car_y - 10;
        console.log("When left arrow is pressed, x = " + car_x + " | y =" +car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car_right()
{
    if(car_y <=500)
    {
        car_y = car_y + 10;
        console.log("When right arrow is pressed, x = " + car_x + " | y =" +car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car2_up()
{
    if(car2_y >=0)
    {
        car2_y = car_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y =" +car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car2_down()
{
    if(car2_y <=500)
    {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y =" +car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car2_left()
{
    if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y =" +car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car2_right()
{
    if(car2_y <=500)
    {
        car2_y = car2_y + 10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y =" +car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}
 if(car_x > 700)
 {
     console.log("car Won");
     document.getElementById('game_status').innerHTML = "Car 1 Won !!";
 }