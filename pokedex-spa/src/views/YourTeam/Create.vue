<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Create Pokemon</h4>
            </div>
            <div class="card-body">
                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error,index) in this.errorList" :key="index" >
                        {{ error[0] }}
                    </li>
                </ul>
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" class="form-control" v-model="model.contacts.name" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Type1</label>
                    <input type="text" class="form-control" v-model="model.contacts.type1" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Type2</label>
                    <input type="text" class="form-control" v-model="model.contacts.type2" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Height</label>
                    <input type="text" class="form-control" v-model="model.contacts.height" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Weight</label>
                    <input type="text" class="form-control" v-model="model.contacts.weight" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Hp</label>
                    <input type="text" class="form-control" v-model="model.contacts.hp" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Attack</label>
                    <input type="text" class="form-control" v-model="model.contacts.atk" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Special Attack</label>
                    <input type="text" class="form-control" v-model="model.contacts.spatk" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Defend</label>
                    <input type="text" class="form-control" v-model="model.contacts.def" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Special Defend</label>
                    <input type="text" class="form-control" v-model="model.contacts.spdef" name="" id="" />
                </div>
                <div class="mb-3">
                    <label for="">Speed</label>
                    <input type="text" class="form-control" v-model="model.contacts.speed" name="" id="" />
                </div>
                <div class="mb-3">
                    <button type="button" @click="savePokemon" class="btn btn-primary">Create pokemon</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'createpokemon',
    data() {
        return {
            errorList: '',
            model: {
                contacts: {
                    name: '',
                    type1: '',
                    type2: '',
                    height: '',
                    weight: '',
                    hp: '',
                    atk: '',
                    spatk: '',
                    def: '',
                    spdef: '',
                    speed: ''
                }
            }
        }
    },
    methods:{
        savePokemon() {
            var mythis=this;
            axios.post('http://localhost:3000/api/contacts', this.model.contacts)
            .then(res => {
                console.log(res.data)
                alert(res.data.message);
                this.model.contacts = {
                    name: '',
                    type1: '',
                    type2: '',
                    height: '',
                    weight: '',
                    hp: '',
                    atk: '',
                    spatk: '',
                    def: '',
                    spdef: '',
                    speed: ''
                }
            })
            .catch(function (error) {
                    if(error.response) {
                        if(error.response.status==422){
                            mythis.errorList=error.response.data.errors;
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
</script>