const canvas=document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//Obtiene las dimenciones de la pantalla actual 
const window_height=window.innerHeight;
const window_width=window.innerWidth;

//El canvas tiene las mismas dimenciones que la pantalla 
canvas.height=window_height;
canvas.width=window_width;

canvas.style.background='#efab8e';

class Circle{
    constructor(x, y, radius, color, text){
        this.posX= x;
        this.posY= y;
        this.radius= radius;
        this.color= color;
        this.text=text;
    }

    draw(context){
        context.beginPath();

        context.strokeStyle=this.color; //para el color 
        context.textAlign = "center";
        context.textBaseLine="middle";
        context.font='18px Arial';
        context.fillText(this.text, this.posX, this.posY);

        context.lineWidth=5; //para el grosor del circulo 
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI*2, false);
        context.stroke();
        context.closePath();
    }
}

let arrayCircle=[];

for(let i=0; i<10; i++){

    let randomX = Math.random() * window_width;//pocision en x
    let randomY = Math.random() * window_height;//posicion en y

    let randomRadius = Math.floor(Math.random() * 100 + 5);//Tamaño

    let miCirculo=new Circle(randomX, randomY, randomRadius, '#30597a', i+1);
    //Agrega el objeto al array 
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);

}

/* let miCirculo=new Circle(100, 100, 50, 'red', 'tec');
miCirculo.draw(ctx);

let miCirculo2=new Circle(100, 270, 50, 'blue', 'pachuca');
miCirculo2.draw(ctx); */