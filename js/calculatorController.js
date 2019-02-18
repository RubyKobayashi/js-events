(function(exports){
  function CalculatorController(){
    this._calculatorModel = new CalculatorModel();
    this._calculatorView = new CalculatorView();
  }

  CalculatorController.prototype.setEventListeners = function(){
    document.getElementById('square-button')
      .addEventListener('click', this.squareNumber.bind(this));
      document.getElementById('half-button')
        .addEventListener('click', this.halfNumber.bind(this));

  }

  CalculatorController.prototype.halfNumber = function(){
    let value = document.getElementById('half-input').value;
    let result = this._calculatorModel.half(value);
    this.displayResult(result);
  }

  CalculatorController.prototype.squareNumber = function(){
    let value = document.getElementById('square-input').value;
    let result = this._calculatorModel.square(value);
    this.displayResult(result);
  }

  CalculatorController.prototype.displayResult = function(result) {
    document.getElementById('output')
      .innerHTML = this._calculatorView.buildOutput(result);
  }


  exports.CalculatorController = CalculatorController
})(this);
