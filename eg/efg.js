class UberPrice {
    constructor (distance,duration,basefare,costPerMile,costPerMinute)
    {
        this.distance = distance;
        this.duration = duration;
        this.basefare = basefare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }
    totalPrice() {
        return this.basefare + (this.distance* this.costPerMile) + (this.duration * this.costPerMinute); 
    }
}
const myUber = new UberPrice(5,6,10,2,3);
console.log(myUber.totalPrice());