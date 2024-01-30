const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.fillStyle = 'blue';
ctx.fillRect(20, 100, 100, 100);

ctx.fillStyle = 'red';
ctx.beginPath(); //сброс кисти
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

//очищаем canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);
{
    //creating zigzag
    let start = 50;
    let end = 50;
    let i = 1;
    
    ctx.moveTo(start,end);
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 4;
    
    while(i < 5){
        i++;
        if( i % 2 === 0){
            start += 50;
            end += 50;
            ctx.lineTo(start, end);
        } else {
            start += 50;
            end -= 50;
            ctx.lineTo(start, end);
        }
    }

    ctx.stroke();
    
}


