<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Carros</h2>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          @click="mostrarCarrinho"
        >
          Carrinho: {{ quantidadeNoCarrinho }} filmes
        </button>
      </div>
    </div>
    <div class="row" v-if="mostrarCarros">
      <div class="col-3" v-bind:key="carro.id" v-for="carro in carrosOrdenados">
        <div class="card">
          <img
            v-bind:src="carro.imagem"
            alt="Imagem do carro"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ carro.titulo }}</h5>
            <p class="card-text" v-html="carro.descricao" />
            <span
              class="mensagem-estoque"
              v-if="
                carro.estoqueDisponivel -
                  quantidadeNoCarrinhoPorCarro(carro) ===
                0
              "
            >
              Indisponível
            </span>
            <span
              class="mensagem-estoque"
              v-else-if="
                carro.estoqueDisponivel - quantidadeNoCarrinhoPorCarro(carro) <
                2
              "
            >
              Apenas
              {{
                carro.estoqueDisponivel - quantidadeNoCarrinhoPorCarro(carro)
              }}
              modelos no estoque.
            </span>
            <span class="mensagem-estoque" v-else> Alugue agora! </span>
            <p class="card-text">R$ {{ carro.valor }}</p>
            <a
              href="#"
              @click="adicionarAoCarrinho(carro)"
              v-if="validarPermissaoParaAdicionarNoCarrinho(carro)"
              class="btn btn-primary"
            >
              Alugar
            </a>
            <a href="#" v-else class="btn btn-primary disable">ALUGAR</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Carrinho from './components/Carrinho.vue'

export default {
  name: "ShowCar",
  data() {
    return {
      mostrarCarros: true,
      title: "Locadora de carros",
      carros: [
        {
          id: 1,
          titulo: "Golf",
          descricao: "GTI 1.4 turbo",
          valor: "160",
          imagem: "/img/carros/Golf.png",
          estoqueDisponivel: 3,
        },
        {
          id: 2,
          titulo: "BMW M2",
          descricao: "3.0 24V Competition Coupé",
          valor: "385",
          imagem: "/img/carros/M2.png",
          estoqueDisponivel: 2,
        },
        {
          id: 3,
          titulo: "Mercedes-AMG",
          descricao: "GT 63 SE Performance 843 cv",
          valor: "625",
          imagem: "/img/carros/AMG.png",
          estoqueDisponivel: 4,
        },
        {
          id: 4,
          titulo: "Volvo XC90",
          descricao: "T8 R-Design",
          valor: "915",
          imagem: "/img/carros/xc90.png",
          estoqueDisponivel: 1,
        },
        {
          id: 5,
          titulo: "Jaguar F-Pace",
          descricao: "V8",
          valor: "973",
          imagem: "/img/carros/jaguar.png",
          estoqueDisponivel: 1,
        },
      ],
      carrinho: [],
    };
  },

  computed: {
    carrosOrdenados() {
      const carros = [...this.carros];
      if (carros.length > 0) {
        return carros.sort((a, b) => {
          if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) return -1;
          if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) return 1;
        });
      } else return [];
    },
    quantidadeNoCarrinho: function () {
      return this.carrinho.length;
    },
  },

  methods: {
    quantidadeNoCarrinhoPorCarro(carro) {
      var quantidade = 0;
      for (var i = 0; i < this.carrinho.length; i++) {
        if (carro.id == this.carrinho[i]) {
          quantidade++;
        }
      }
      return quantidade;
    },
    adicionarAoCarrinho(carro) {
      this.carrinho.push(carro.id);
    },
    validarPermissaoParaAdicionarNoCarrinho(carro) {
      return carro.estoqueDisponivel > this.quantidadeNoCarrinhoPorCarro(carro);
    },

    mostrarCarrinho() {
      this.mostrarFilmes = this.mostrarFilmes ? false : true;
    },
  },
};
</script>
<style scoped>
.card img {
  width: 200px;
}
/* .mensagem-estoque{
    color: red;
} */
</style>
