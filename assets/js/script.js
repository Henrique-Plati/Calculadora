function Calculadora() {

    this.display =  document.querySelector('.display');
    this.btnEq = document.querySelector('.btn-eq');


    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };


    this.clearDisplay = () => {
        this.display.value = '';
    };


    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };


    this.realizaConta = () => {
        let conta = this.display.value;


        try {
            conta = eval(conta);
            if (isNaN(conta) || conta === null || conta === undefined){ alert(`Conta Invalida`) }; //return;
            this.display.value = String(conta);
        } catch (e) { alert(`Conta Invalida`) };
    };


        this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) =>{
            if(e.keyCode === 13){
            this.realizaConta();
            }
        })
    };


    this.cliqueBotoes = () =>{
        document.addEventListener(`click`, (e) =>{
            const el = e.target;
            
            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            };
            if (el.classList.contains('btn-clear')){
                this.clearDisplay();
            };
            if(el.classList.contains('btn-apaga')){
                this.apagaUm();
            };
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            };
            this.display.focus();
        })
    };
    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }; 
};

const cal = new Calculadora();
cal.inicia();

