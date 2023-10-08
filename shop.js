function divide() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const divisionResultOutput = document.getElementById("divisionResult");
  
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
  
    if (isNaN(num1) || isNaN(num2)) {
      divisionResultOutput.textContent = "Please enter valid numbers.";
      return;
    }
  
    if (num2 === 0) {
      divisionResultOutput.textContent = "Division by zero is not allowed.";
      return;
    }
  
    const result = num1 / num2;
    divisionResultOutput.textContent = `Result (num of packs): ${result}`;
    return result;
  }
  
  function calculateActualPrice() {
    const actualPriceInput = document.getElementById("actualPrice");
    const numOfPacksInput = document.getElementById("numOfPacks");
    const actualPriceResultOutput = document.getElementById("actualPriceResult");
  
    const actualPrice = parseFloat(actualPriceInput.value);
    const numOfPacks = parseFloat(numOfPacksInput.value);
  
    if (isNaN(actualPrice) || isNaN(numOfPacks)) {
      actualPriceResultOutput.textContent = "Please enter valid numbers.";
      return;
    }
  
    const result = actualPrice * numOfPacks;
    actualPriceResultOutput.textContent = `Actual Price: ${result}`;
  }
  
  function calculateX() {
    const priceInput = document.getElementById("price");
    const numOfPacksInput = document.getElementById("numOfPacksForX");
    const xResultOutput = document.getElementById("xResult");
  
    const price = parseFloat(priceInput.value);
    const numOfPacks = parseFloat(numOfPacksInput.value);
  
    if (isNaN(price) || isNaN(numOfPacks)) {
      xResultOutput.textContent = "Please enter valid numbers.";
      return;
    }
  
    let x = 400 / (price * numOfPacks);
    x = resultx.toFixed(2); // Round to 2 decimal places
  
    xResultOutput.textContent = `result = ${x}`;
  }