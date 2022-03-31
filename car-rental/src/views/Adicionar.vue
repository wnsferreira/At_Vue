<template>
    <div class="main-container">
        <!-- <Banner /> -->
        <H1>Adicionar carro</H1>
        <RentalForm />
    </div>
</template>
<script>
// import Banner from '../components/Banner.vue'
import RentalForm from '../components/RentalForm.vue'
export default {
    components:{
        RentalForm,
        // Banner
    }
}
</script>
<style>

</style>

<!-- <div>
<h1>ADICIONAR</h1>
<form action="">
    <div>
    <label for="marca">Marca: </label>
    <input
        type="text"
        id="marca"
        v-model="marca"
        placeholder="Informe a marca"
    />
    </div>
    <div>
    <label for="modelo">Modelo: </label>
    <input
        type="text"
        id="modelo"
        v-model="modelo"
        placeholder="Informe o modelo"
    />
    </div>
    <div>
    <label for="descricao">Descricão: </label>
    <input
        type="text"
        id="descricao"
        v-model="descricao"
        placeholder="Informe a descricao"
    />
    </div>
    <div>
    <label for="valor">Valor: </label>
    <input
        type="number"
        id="valor"
        v-model="valor"
        placeholder="Informe o valor"
    />
    </div>
    <div class="input-container">
    <input class="submit-btn" type="submit" value="Cadastrar veículo" />
    </div>
</form>
</div> -->
<!-- // </template>
// <script> -->
<!-- // export default {
//   name: "adicionar",
//   data(){
//       return{
//           marca: null,
//           modelo: null, -->
<!-- //           descricao: null,
//           valor: null,
//       }
//   },
//   methods: {
//       async getDados() {
//           const req = await fetch('http://localhost:3000/carro')
//           const data = await req.json()

//           this.marcas = data.marcas
//           this.modelos = data.modelos
//           this.descricoes = data.descricoes
//           this.valores = data.valores -->
<!-- //       },
//       async cadastrarCarro(e) {

//         e.preventDefault();
    
//         const data = {
//             marca: this.marca,
//             modelo: this.modelo,
//             descricao: this.descricao,
//             valor: this.valor
//         }

//         const dataJson = JSON.stringify(data),

//         const req = await fetch("http://localhost:3000/Carros", {
//             method: "POST",
//             headers: { "Content-Type" : "application/json" },
//             body: dataJson
//         });

//         const res = await req.json()

//         console.log(res)

//         // clear message
//         setTimeout(() => this.msg = "", 3000)

//         //limpar campos
//         this.marca = ""
//         this.modelo = ""
//         this.descricao = ""
//         this.valor = ""
//       }
//   },
//   mounted () {
//       this.getDados()
//   },
//   components:{ -->

<!-- //   }
}; -->
<!-- </script> -->