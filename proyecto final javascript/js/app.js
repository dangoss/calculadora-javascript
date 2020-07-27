//Daniel Gosselain NextU

var Calculadora = {

	valor: "0",
	operacion: "",
	valor1: 0,
	valor2: 0,
	valor3: 0,
	resultado: 0,
	igual: false,
  display: document.getElementById("display"),

	init: (function(){
		this.botones();
		this.ingresos();
	}),


	funpeque: function(){
		Calculadora.pequeno(event.target);
	},

	fungrande: function(){
		Calculadora.grande(event.target);
	},

  grande: function(boton){
    if (boton.id =="mas") {
      boton.style.width = "100%";
      boton.style.height = "100%";
    } else {
    boton.style.width = "75px";
    boton.style.height = "62.91px";
    }
  },

	pequeno: function(boton){
		if (boton.id=="mas") {
			boton.style.width = "90%";
			boton.style.height = "90%";
		} else {
		boton.style.width = "70px";
		boton.style.height = "60px";
		}
	},

  botones: function(){
    var a = document.querySelectorAll(".tecla");
    for (var i = 0; i<a.length;i++) {
      a[i].onclick = this.funpeque;
      a[i].onmouseleave = this.fungrande;
    };
  },

	ingresos: function(){
    document.getElementById("on").addEventListener("click", function()
    {Calculadora.borrar();});
		document.getElementById("sign").addEventListener("click", function()
    {Calculadora.signo();});
		document.getElementById("punto").addEventListener("click", function()
    {Calculadora.decimal();});
		document.getElementById("igual").addEventListener("click", function()
    {Calculadora.mostrarresultado();});
		document.getElementById("dividido").addEventListener("click", function()
    {Calculadora.operaciones("/");});
		document.getElementById("por").addEventListener("click", function()
    {Calculadora.operaciones("*");});
		document.getElementById("menos").addEventListener("click", function()
    {Calculadora.operaciones("-");});
		document.getElementById("mas").addEventListener("click", function()
    {Calculadora.operaciones("+");});
		document.getElementById("0").addEventListener("click", function()
    {Calculadora.numero("0");});
		document.getElementById("1").addEventListener("click", function()
    {Calculadora.numero("1");});
		document.getElementById("2").addEventListener("click", function()
    {Calculadora.numero("2");});
		document.getElementById("3").addEventListener("click", function()
    {Calculadora.numero("3");});
		document.getElementById("4").addEventListener("click", function()
    {Calculadora.numero("4");});
		document.getElementById("5").addEventListener("click", function()
    {Calculadora.numero("5");});
		document.getElementById("6").addEventListener("click", function()
    {Calculadora.numero("6");});
		document.getElementById("7").addEventListener("click", function()
    {Calculadora.numero("7");});
		document.getElementById("8").addEventListener("click", function()
    {Calculadora.numero("8");});
		document.getElementById("9").addEventListener("click", function()
    {Calculadora.numero("9");});
	},


	signo: function(){
		if (this.valor !="0") {
			var p;
			if (this.valor.charAt(0)=="-") {
				p = this.valor.slice(1);
			}	else {
				p = "-" + this.valor;
			}
		this.valor = "";
		this.valor = p;
		this.displaynuevo();
		}
	},

	decimal: function(){
		if (this.valor.indexOf(".")== -1) {
			if (this.valor == ""){
				this.valor = this.valor + "0.";
			} else {
				this.valor = this.valor + ".";
			}
			this.displaynuevo();
		}
	},

	numero: function(valor){
		if (this.valor.length < 8) {

			if (this.valor=="0") {
				this.valor = "";
				this.valor = this.valor + valor;
			} else {
				this.valor = this.valor + valor;
			}
		this.displaynuevo();
		}
	},

  borrar: function(){

    this.valor = "0";
    this.operacion = "";
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
    this.igual= false;
    this.valor3 = 0;
    this.displaynuevo();
  },

  operaciones: function(x){
		this.valor1 = parseFloat(this.valor);
		this.valor = "";
		this.operacion = x;
		this.igual= false;
		this.displaynuevo();
	},

  efectuaroperacion: function(valor1, valor2, operacion){
    switch(operacion){
      case "+":
        this.resultado = (valor1 + valor2);
      break;
      case "-":
        this.resultado = (valor1 - valor2);
      break;
      case "*":
        this.resultado = (valor1 * valor2);
      break;
      case "/":
        this.resultado = (valor1 / valor2);
    }
  },

	mostrarresultado: function(){

		if(!this.igual){
			this.valor2 = parseFloat(this.valor);
			this.valor3 = this.valor2;
			this.efectuaroperacion(this.valor1, this.valor2, this.operacion);

		} else {
			this.efectuaroperacion(this.valor1, this.valor3, this.operacion);
		}

		this.valor1 = this.resultado;


		if (this.resultado.toString().length < 9){
			this.valor = this.resultado.toString();
		} else {
			this.valor = this.resultado.toString().slice(0,8);
		}

		this.igual= true;
		this.displaynuevo();

	},

	displaynuevo: function(){
		this.display.innerHTML = this.valor;
	}

};

Calculadora.init();
