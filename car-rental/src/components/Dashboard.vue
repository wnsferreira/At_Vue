<template>
  <div id="car-table">
    <Message :msg="msg" v-show="msg" />
    <div>
      <!--  colunas da tabela -->
      <div id="car-table-heading">
        <div class="order-id">#:</div>
        <div>Marca:</div>
        <div>Modelo:</div>
        <div>Descrição:</div>
        <div>Valor:</div>
        <div>Ações:</div>
      </div>
    </div>
    <!-- linhas da tabela -->
    <div id="car-table-rows">
      <div class="car-table-row" v-for="carro in carros" :key="carro.id">
        <div class="order-number">{{ carro.id }}</div>
        <div>{{ carro.marca }}</div>
        <div>{{ carro.modelo }}</div>
        <div>{{ carro.descricao }}</div>
        <div>{{ carro.valor }}</div>
        <button class="delete-btn" @click="deleteCar(carro.id)">Excluir</button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: "Dashboard",
  data() {
    return {
      carros: null,
      carro_id: null,
      msg: null  
    };
  },
  methods: {
    async getAdicionados() {
      const req = await fetch("http://localhost:3000/Carros");

      //   transforma a requisicao em json
      const data = await req.json();
      //   troca o valor null pelo que vem do servidor
      this.carros = data;

      //   console.log(this.carros);
    },
    async deleteCar(id) {
      // esse delete é especifico da biblioteca json server
      const req = await fetch(`http://localhost:3000/Carros/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();

      console.log(res);

      this.msg = `Item removido com sucesso!`;

      //limpar msg
      setTimeout(() => (this.msg = ""), 3000);

      this.getAdicionados();
    },
    components: {
      Message
    },
  },
  mounted() {
    this.getAdicionados();
  },
};
</script>

<style scoped>
#car-table {
  max-width: 1200px;
  margin: 0 auto;
}

/* colocar os itens na horizontal */
#car-table-heading,
#car-table-rows,
.car-table-row {
  display: flex;
  flex-wrap: wrap;
}

/* cabecalho da tabela */
#car-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.car-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

/* divide as larguras das linhas */
#car-table-heading div,
.car-table-row div {
  width: 19%;
}

#car-table-heading .order-id,
.car-table-row .order-number {
  width: 5%;
}

/* select {
  padding: 12px 6px;
  margin-right: 12px;
} */

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>