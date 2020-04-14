const calculator = (() => {
    
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;
    const sum = (a, b) => a + b;
    const substract = (a, b) => a - b;
  
    return {
      sum, substract, divide, multiply
    };
  })();
  
  module.exports = calculator;