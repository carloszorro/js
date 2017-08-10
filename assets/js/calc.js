/*var calc = {
  result : 0,
  plus : function(addend) {
    if (typeof(addend) === "number") {
      this.result = this.result + addend;
    }else {
      console.error("no es un dato numerico");
    }
  },
  minus : function(substract) {
    if (typeof(substract) === "number") {
      this.result = this.result - substract;
    }else {
      console.error("no es un dato numerico");
    }
  },
  times : function(multiplier) {
    if (typeof(multiplier) === "number") {
      this.result = this.result * multiplier;
    }else {
      console.error("no es un dato numerico");
    }
  },
  divide : function(dividing) {
    if (typeof(dividing) === "number") {
      this.result = this.result / dividing;
    }else {
      console.error("no es un dato numerico");
    }
  },
  clear : function() {
    this.result = 0;
  }
};

calc.plus(2);
calc.times(5);
calc.clear();
calc.plus("carlos");
console.log(calc.result)*/

//Forma abreviada
var calc = {
  result : 0,
  validate : function(input) {
    if (typeof(input) === "number") {
      return true;
    }else {
      console.error("La entrada no es número");
      return false;
    }
  },
  plus : function(addend) {
    var valid_number = this.validate(addend);
    if (valid_number) {
      this.result = this.result + addend;
    }
  },
  minus : function(substract) {
    var valid_number = this.validate(substract);
    if (valid_number) {
      this.result = this.result - substract;
    }
  },
  times : function(multiplier) {
    var valid_number = this.validate(multiplier);
    if (valid_number) {
      this.result = this.result * multiplier;
    }
  },
  divide : function(dividing) {
      if (this.validate(dividing)) {
      this.result = this.result / multiplier;
    }
  },
  pow : function(exp) {
    if(this.validate(exp)) {
      this.result = Math.pow(this.result,exp);
    }
  },
  clear : function() {
    this.result = 0;
  }
};

calc.minus(false);
calc.plus(20);
calc.times(30);
console.log(calc.result);
