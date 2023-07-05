class Person{
    constructor(name,age,desegnition,email,phn,address,pincode){
        this.name=name;
        this.age=age;
        this.desegnition=desegnition;
        this.email=email;
        this.phn=phn;
        this.address=address;
        this.pincode=pincode;
    }
    toString(){
        return `Details:-
               Name:${this.name}
               Age:${this.age}
               Desgnition:${this.desegnition}
               E-mail:${this.email}
               Phone:${this.phn}
               Address:${this.address}
               Pincode:${this.pincode}`
    }
}

p=new Person("Abarnaa",26,"Full-stack Developer","abarna.balakrishanan@gmail.com",9626146500,"1/8,CBI Colony, velacherry, Chennai", 600002);
console.log(p.toString());


//>...>...............


//Convert the UML diagram to Typescript class. - use number for double

//-radius:double = 1.0
//-color:String = "red"
//+Circle()
//+Circle(radius:double)
//+Circle (radius: double, color: String)
//+getRadius(): double
//+setRadius (radius:double):void
//+getColor(): String                                 
//+setColor(color:String):void o----------------------"Circle[radius=?,color=?]"
//+toString(): String                                 
//+getArea(): double

//My code:
//-----------------------
class Circle{
    
    setRadius(radius){
      this.radius=radius;
    }
    getRadius(){
    return `radius=${this.radius}`;
    }
      
    setColor(color){
    this.color=color;
  }
  
    getColor(){
      return `color=${this.color}`;
    }
  
    toString(){
      return `circle[radius=${this.radius},color=${this.color}]`;
    }
  
    getArea(){
      return (3.14)*(this.radius*this.radius);
    }
  
    getCircumference(){
      return 2*(3.14)*this.radius;
    }
  }
  c=new Circle();
  c.setRadius(4);
  console.log(c.getRadius());
  c.setColor('red');
  console.log(c.getColor());
  console.log(c.toString());
  console.log(c.getArea());
  console.log(c.getCircumference());
  //----------------------------------
  
  //Output:
  //radius=4
  //color=red
  //circle[radius=4,color=red]
  //50.24
  //25.12


  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  class Movie{
    constructor(title,studio,rating){
        this.setMovie(title,studio,rating);
        this.setMovie1(title,studio,rating);
        this.setMovie2(title,studio,rating);
    }
    setMovie(title,studio,rating)
     {
        this.title=title;
        this.studio=studio;
        if(rating =="")
        this.rating='PG';
        else
        this.rating=rating;
     }

    setMovie1(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        if(rating =="")
        this.rating='PG';
        else
        this.rating=rating; 
    }

    setMovie2(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        if(rating =="")
        this.rating='PG';
        else
        this.rating=rating;
    }

    getPG()
    {
        return `Movie:${this.title}   Studio:${this.studio}   Rating:${this.rating}`;
        //return this.studio;
        //return this.rating;
    }

}
M1=new Movie();
M1.setMovie("Casino Royale","Eon Production","PG13");
console.log(M1.getPG());
M1.setMovie1("Diago Unchained","WB Production","");
console.log(M1.getPG());
M1.setMovie2("Shutter Island","AI1 Production","PG15");
console.log(M1.getPG());


		//OUTPUT

//Movie:Casino Royale   Studio:Eon Production   Rating:PG13
//Movie:Diago Unchained   Studio:WB Production   Rating:PG
//Movie:Shutter Island   Studio:AI1 Production   Rating:PG15


//>>>>>>>>>>>>>>>>>>>>>>


//4.write a class to calculate the uber price

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());
  
  //output
  //150
//-------------------------------------------


