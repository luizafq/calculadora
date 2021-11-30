function writeNumber(elementId) {
  var outputValueTo = document.getElementById('field1');

  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = elementId.textContent;
  } else {

    outputValueTo.value += elementId.textContent;
  }
}

function cleartxt() {
  document.getElementById('field1').value = '0';
  document.getElementById('dec').disabled = false;
}

function setOperator(elementId) {
  var outputValueTo = document.getElementById('field1');
  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = '0';
  } else {
    outputValueTo.value += elementId.textContent;
    document.getElementById('dec').disabled = false;
  }
}

function setDecimal(elementId, status) {
  var outputValueTo = document.getElementById('field1');
  outputValueTo.value += elementId.textContent;
  document.getElementById('dec').disabled = status;
}

function calculate() {

  try {

    var field1txt = document.getElementById('field1');
    if (field1txt.value != '') {
      var calculateResult = eval(field1txt.value);
      field1txt.value = calculateResult;
    }
  } catch (err) {

    field1txt.value = 'Syntax error';

  }

}

function removeLastNumber() {

  var field1txt = document.getElementById('field1');

  if (field1txt.value.length == 1 || field1txt.value == '0' || field1txt.value == 'Syntax error') {
    field1txt.value = '0';
    document.getElementById('dec').disabled = false;
  } else {
    field1txt.value = field1txt.value.substring(0, field1txt.value.length - 1);
  }
}
body {
  font-family: Verdana, sans-serif;
  font-size: 0.8em;
  margin: 0px;
  background: black;
}

nav,
section,
article {
  margin: 5px;
  padding: 8px;
}

#content {
  text-align: center;
}

header,
footer {
  background-color: Red;
  color: green;
  padding: 5px;
  margin: 0;
}

h1 {
  text-align: center;
}

button {
  width: 60px;
  text-align: center;
  font-size: 35px;
  background-color: red;
  color: black;
  border: cornflowerblue solid 1px;
  box-shadow: 1px 2px 3px 1px green;
  text-shadow: 1px 1px 3px green;
}

input {
  width: 250px;
  font-size: 30px;
  background-color: red;
  color: black;
  border: cornflowerblue solid 1px;
  text-align: right;
  box-shadow: 1px 2px 3px 1px green;
  text-shadow: 1px 1px 3px blue;
}

nav ul {
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 5px;
}
<section>
  <article>
    <div id='content'>
      <div id='content-app'>
        <input type='text' id='field1' readonly value='0' />
        <br /><br />
        <button onclick='writeNumber(this)' id='n1'>1</button>
        <button onclick='writeNumber(this)' id='n2'>2</button>
        <button onclick='writeNumber(this)' id='n3'>3</button>
        <button onclick='writeNumber(this)' id='n4'>4</button>
        <br /><br />
        <button onclick='writeNumber(this)' id='n5'>5</button>
        <button onclick='writeNumber(this)' id='n6'>6</button>
        <button onclick='writeNumber(this)' id='n7'>7</button>
        <button onclick='writeNumber(this)' id='n8'>8</button>
        <br /><br />
        <button onclick='writeNumber(this)' id='n9'>9</button>
        <button onclick='writeNumber(this)' id='n0'>0</button>
        <button onclick='setDecimal(this,true)' id='dec'>.</button>
        <button onclick='setOperator(this)' id='sum'>+</button>
        <br /><br />
        <button onclick='setOperator(this)' id='sustract'>-</button>
        <button onclick='setOperator(this)' id='multi'>*</button>
        <button onclick='setOperator(this)' id='divide'>/</button>
        <button onclick='cleartxt()' id='C'>C</button>
        <br /><br />
        <button onclick='calculate()' id='calcular' style='width:190px'>=</button>
        <button onclick='removeLastNumber()' id='removeLast'>B</button>
      </div>
    </div>
    <br />
    <br /><br />
  </article>
</section>
