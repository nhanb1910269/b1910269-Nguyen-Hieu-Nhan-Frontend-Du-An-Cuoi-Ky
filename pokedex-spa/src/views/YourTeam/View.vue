<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Pokemon
                    <RouterLink to="/yourteam/create" class="btn btn-primary float end">
                        ADD
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Type1</td>
                        <td>Type2</td>
                        <td>Height</td>
                        <td>Weight</td>
                        <td>Hp</td>
                        <td>Attack</td>
                        <td>Sp Attack</td>
                        <td>Defend</td>
                        <td>Sp Defend</td>
                        <td>Speed</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(contacts,index) in this.contacts" :key="index">
                        <td>{{ contacts._id }}</td>
                        <td>{{ contacts.name }}</td>
                        <td>{{ contacts.type1 }}</td>
                        <td>{{ contacts.type2 }}</td>
                        <td>{{ contacts.height }}</td>
                        <td>{{ contacts.weight }}</td>
                        <td>{{ contacts.hp }}</td>
                        <td>{{ contacts.atk }}</td>
                        <td>{{ contacts.spatk }}</td>
                        <td>{{ contacts.def }}</td>
                        <td>{{ contacts.spdef }}</td>
                        <td>{{ contacts.speed }}</td>
                        <td><RouterLink :to="{ path: '/yourteam/' +contacts._id+'/edit'}" class="btn btn-success float end">
                        Edit
                    </RouterLink>
                    <button type="button" @click="deletePokemon(contacts._id)" class="btn btn-danger">Delete</button>
                </td>
                    
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name:'contacts',
    data(){
        return{
            contacts:[]
        }
    },
    mounted(){
        console.log("day");
        this.getPokemon();
    },
    methods:{
        getPokemon(){
            axios.get('http://localhost:3000/api/contacts').then( res=>{
                this.contacts=res.data
                console.log(this.contacts);
            })
        },
        deletePokemon(pokemonID){
            console.log(pokemonID)
            if(confirm('ok?')){
                axios.delete(`http://localhost:3000/api/contacts/${pokemonID}`)
                .then(res=>{
                    alert(res.data.message);
                    this.getPokemon();
                })
                .catch(function (error) {
                    if(error.response) {
                        if(error.response.status==422){
                            mythis.errorList=error.response.data.errors;
                        }
                        if(error.response.status==404){
                            mythis.errorList=error.response.data.message;
                        }
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
            })
            }
        }
    }
  }
</script>