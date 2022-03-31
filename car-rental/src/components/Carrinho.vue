<template>
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
</template>
<script>
export default {
  
  methods:{
      mostrarCarrinho() {
      this.mostrarFilmes = this.mostrarFilmes ? false : true;
    },
  }
}
</script>