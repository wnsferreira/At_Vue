<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    
    <form id="rental-form" @submit="cadastrarCarro">
      <div class="input-container">
        <label for="marca">Marca: </label>
        <input
          type="text"
          id="marca"
          v-model="marca"
          placeholder="Informe a marca"
        />
      </div>
      <div class="input-container">
        <label for="modelo">Modelo: </label>
        <input
          type="text"
          id="modelo"
          v-model="modelo"
          placeholder="Informe o modelo"
        />
      </div>
      <div class="input-container">
        <label for="descricao">Descricão: </label>
        <input
          type="text"
          id="descricao"
          v-model="descricao"
          placeholder="Informe a descricao"
        />
      </div>
      <div class="input-container">
        <label for="valor">Valor: </label>
        <input
          type="number"
          id="valor"
          v-model="valor"
          placeholder="Informe o valor"
        />
      </div >
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Cadastrar veículo" />
      </div>
    </form>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: "RentalForm",
  data() {
    return {
      marca: null,
      modelo: null,
      descricao: null,
      valor: null,
    };
  },
  methods: {
    async getCarros() {
      // Faz a requisicao
      // espera um json
      // exibe o json no console
      const req = await fetch('http://localhost:3000/carros')
      const data = await req.json()

      console.log(data)
    },
    async cadastrarCarro(e) {
      
      //executa o evento pai
      e.preventDefault();

      // console.log("Carro cadastrado")

      //gera um objeto para enviar para o banco
      //tem que transformar o objeto em texto
      const data = {
        marca: this.marca,
        modelo: this.modelo,
        descricao: this.descricao,
        valor: this.valor
      }

      // console.log(data)

      // converte o objeto em texto
      const dataJson = JSON.stringify(data);

      const req = await fetch('http://localhost:3000/carros', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJson
      });

      const res = await req.json();

      console.log(res);

      // mensagem de sistema
      // this.msg="Cadastro realizado com sucesso!"

      this.msg=`Cadastro ${res.id} realizado com sucesso!`

      //limpar msg
      setTimeout(() => this.msg = "", 3000)

      //limpar os campos
      this.marca = "";
      this.modelo = "";
      this.descricao = "";
      this.valor = "";
    }
  },
  
  // Quando o componente for montado
  // chamar os dados
  mounted(){
    this.getCarros()
  },
  components:{
    Message
  }
};
</script>

<style scoped>
  #rental-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input {
    padding: 5px 10px;
    width: 300px;
  }

  .submit-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>