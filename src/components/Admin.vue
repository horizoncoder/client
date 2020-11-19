<template>
    <div class= "container">
        <center><h3>Admin Panel</h3></center>

  <div class="form-price">
    <label for="exampleFormControlInput1">Name</label>
    <input v-model="prod.name" type="Name" class="form-control" id="exampleFormControlInput1" placeholder="name" >
  </div>
  <div class="form-price">
    <label for="exampleFormControlInput1">Image</label>
    <input v-model="prod.image"  type="Name" class="form-control" id="exampleFormControlInput1" placeholder="image">
  </div>
   <div class="form-price">
    <label for="exampleFormControlInput1">category</label>
    <input v-model="prod.category"  type="Name" class="form-control" id="exampleFormControlInput1" placeholder="category">
  </div>
    <div class="form-price">
    <label for="exampleFormControlInput1">price</label>
    <input v-model="prod.price"  type="Name" class="form-control" id="exampleFormControlInput1" placeholder="price">
  </div>

  <div class="form-price">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea v-model="prod.description"  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button v-on:click = "add()" type="button" class="btn btn-primary mb-2">Add</button>

    </div>
</template>

<script>

//import Vue from 'vue'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import Api from '@/config/Api'

export default {
    
     data: function() {
           return {
                search:"",
                products: [],
                prod: {name:"", price:0, category:"", description:"",image:""},
           };
        },
        methods:{
          add: function(){
               Api().post(`/seeder/products`,{
                    name: this.prod.name,
                    price: this.prod.price,
                    category: this.prod.category,
                    description: this.prod.description,
                    image: this.prod.image

               })
              .then((response) => {
                  console.log(response.data)
              })


        },

}
}
</script>