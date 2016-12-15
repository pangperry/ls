var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);  

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);
  }

  shop1();  
  shop2();  
  shop3();

  console.log(basket);
}

goShopping();

//'empty'
//'play station'
//'computer'
