function chainable(data){
  this.data = data;
  this.increase=function(){
    this.data++;
    return this;
  }
  this.double=function(){
    this.data*=2;
    return this;
  }
  this.value=function(){
    return this.data;
  }
}

function chain(data){
  return new chainable(data);
}

const n = chain(1).increase().double().value()

console.log(n)
