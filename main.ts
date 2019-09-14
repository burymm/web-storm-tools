function main() {
  // todo make better

}

var jsonData = {
  "param1": "value1",
  "param2": "value2",
  "sumParam": "valueSum",
    "param4": "value1",
    "param5": "value2",
    "sumParam1": "valueSum",
        "param7": "value1",
          "param9": "value2",
        "sumParam12": "valueSum",
        "param13": "value1",
        "param20": "value2",
        "sumParam11": "valueSum",
        "param144": "value1",
        "param245": "value2",
    "sumParam55": "valueSum",
};

class BigGodClass   {
    a: number;
    b: number;

    constructor() {
        this.a = 0;
        this.b =  0;
    }
    print() {
        for (let i = 0; i < 10; i++) {
            console.log(123);
            console.log(123 + 123);
        }

        for (var i =  0; i <10; i+= 1   ) {
  console.warn('simple text');
}
    }

    /*
    * @params not needed
    * without params
    * print to console some strange text
    *
    * */
    printOut(additionalText = 'test') {
  console.warn('simple text2', additionalText);
                    }

                    setVariables(a, b) {
        this.a =    a;
        this.b =        b;
                    }
}



class GodClass {
    print() {
     console.warn('simple text');

     const instance = new BigGodClass();
     instance.setVariables(1, 2);
     instance.printOut();
    }
}

class GodTest {
    print() {
 console.warn('simple text');
    }
}
