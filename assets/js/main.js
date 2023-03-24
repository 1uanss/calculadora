function Calculadora(){

    this.display = document.querySelector('.display');

    this.inicia=()=>{
        this.capturaCliques();
        this.pressEnter();
    };

    this.pressEnter=()=>{
       this.display.addEventListener('keyup', e =>{
            if(e.keyCode !== 13) return;
            this.realizaConta();
        });
    }

    this.capturaCliques=()=>{
        document.addEventListener('click', e =>{
            const el = e.target;
            if(el.classList.contains('btn-num'))this.addNumDisplay(el.innerText);
            if(el.classList.contains('btn-del'))this.dellOne();
            if(el.classList.contains('btn-clear'))this.btnClear();
            if(el.classList.contains('btn-eq'))this.realizaConta();
            this.display.focus();
        });
    };
    this.addNumDisplay=(valor)=> this.display.value += valor;
    this.dellOne=()=> this.display.value = this.display.value.slice(0, -1);
    this.btnClear=()=> this.display.value = '';
    this.realizaConta=()=>{
        try {
            const conta = eval(this.display.value);
            if(!conta){
                alert('Conta inválida.')
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida.')
            return;
        }
    };
}

const calculadra = new Calculadora();
calculadra.inicia();



