<template>
<div>
    <h1>Events</h1>
    <h3 v-on:mousemove="getConsole()">Mouse Move Event</h3>
    <h2>Click Events</h2>
    <button v-on:click="getData()"> click to call function is console</button>
    <button v-on:dblclick="getDetails('Button double  clicked')"> Double Click to call the function</button>

    <br />
    <h1>Counter : {{ count }}</h1>
    <input type="text" v-model="count" />

    <br /><br />
    <h1>Getting values from input field</h1>
    <input type="text" placeholder="Enter Email" v-model="email" />
    <br /><br />
    <input type="password" placeholder="Enter Passward" v-model="password" />
    <br /><br />
    <button v-on:click="getData()" type="button">Get Data</button>

    <br />
    <h2>Email : {{ email }}</h2>
    <h2>Password : {{ password }}</h2>

    <br />
    <h1>Getting values using check box</h1>
    <h2>Technologies</h2>

    <label for="java">Java</label>
    <input type="checkbox" value="java" id="java" v-model="technology">

    <label for="php">Php</label>
    <input type="checkbox" value="php" id="php" v-model="technology">

    <label for="html">Html</label>
    <input type="checkbox" value="html" id="html" v-model="technology">
    <h3>Selected Technologies : {{ technology }}</h3>

    <br />
    <h1>Using radio button</h1>
    <h3>Who I am ?</h3>
    <label for="student">Student</label>
    <input type="radio" value="student" id="student" name="who" v-model="who">

    <label for="developer">Developer</label>
    <input type="radio" value="developer" id="developer" name="who" v-model="who">
    <h3>I am a : {{ who }}</h3>

    <br />
    <h1>if_else condition</h1>
    <h3 v-if="show">If condition</h3>
    <h3 v-else>Else condition</h3>
    <button v-on:click="show=!show">Click to Toggle</button>

    <br />
    <h1>For Loop</h1>
    <h2>Languages :</h2>
    <ul>
        <li v-for="item in language" :key="item">
            {{ item }}
        </li>
    </ul>

    <br /><br />
    <h1>For Loop for array of objects</h1>
    <ul>
        <li v-for="item in detail" :key="item.email">
            Name is : {{ item.name }}, email is : {{ item.email }} and phone no is : {{ item.phone }}
        </li>
    </ul>

    <br /> <br />

    <h1>Passing child component</h1>
    <child msg="Usama" :user="user" :setData="setData" />

    <br /><br />
    <h1>
        Reuse Component
    </h1>
    <ul>
        <li v-for="item in detail" :key="item.name">
            <user :data="item" :newData="newData" />

        </li>
    </ul>
    <button v-on:click="newData">click</button>

    <br /><br />
    <h1> HTML Binding</h1>
    <div v-html="tag"></div>
    <div v-html="tag2"></div>

    <br /><br />
    <h1>Class Binding</h1>
    <h2 :class="applyStyle">Hello Usama</h2>
    <button v-on:click="colorful=!colorful, err=!err, other=!other ">Change style</button>

    <br /><br />
    <h1>Vue Props</h1>
    <Teacher name="Hayat" :subjects="subjects" :setData="setData" />
    <!-- <Student @sendUser="sendUser" /> -->
    <Student :getUserName="sendUser" />
    <h2>{{ childUser }}</h2>

    <br /><br />
    <h1>Ref in Vue js </h1>
    <input type="text" ref="input1" />
    <br />
    <input type="text" ref="input2" />
    <br />
    <button v-on:click="refData"> Click to Focus </button>

    <form>
        <br /><br />
        <h1>Simple Form</h1>
        <br />
        <label> Email : </label>
        <input type="text" placeholder="Enter Email" v-model="form.email">
        <br />
        <label> Enter Password : </label>
        <input type="password" placeholder="Enter Password" v-model="form.password">
        <br />
        <label>Country</label>
        <select v-model="form.country">
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="UAE">UAE</option>
        </select>
        <br />

        <label for="java2">Java</label>
        <input type="checkbox" value="Java" id="java2" v-model="form.technology" />

        <label for="php2">PHP</label>
        <input type="checkbox" value="PHP" id="php2" v-model="form.technology" />

        <label for=".net">.NET</label>
        <input type="checkbox" value=".NET" id=".net" v-model="form.technology" />

        <label for="c++">C++</label>
        <input type="checkbox" value="C++" id="c++" v-model="form.technology" />
        <br />

        <label style="color:blueviolet">Select Gender : </label>
        <label for="male">Male</label>
        <input type="radio" value="Male" name="genter" id="male" v-model="form.gender">

        <label for="female">Female</label>
        <input type="radio" value="Female." name="gender" id="female" v-model="form.gender">

        <br />
        <button type="button" v-on:click="formData">Login</button>
    </form>

    <ul>
        <li v-for="item in error" v-bind:key="item">

            <h3>{{ item }} is invalid</h3>

        </li>
    </ul>
    <p>
        {{ form }}
    </p>

    <br /><br />
    <h1>Vue Modifiers</h1>
    <input type="number" v-model.lazy.trim="data" />
    <h3>Data type : {{ typeof(data) }}</h3>
    <h3>Data is : {{ data }}</h3>

    <h1>Non Props data</h1>
    <Child2 data="Some data" id="child2-cmp" />

    <h1>Computed vs data Properties</h1>
    <h2>Data property : </h2>
    <h3>(Dollar X Rupee) - Discount : {{ (dollar*rupee)-discount }}</h3>
    <h2>Computed property : </h2>
    <h3>(Dollar X Rupee) - Discount : {{ getData1 }}</h3>

    <h1>Watchers</h1>
    <h3>{{ count }}</h3>
    <button v-on:click="count=count+1"> + </button>
    <button v-on:click="count=count-1"> - </button>

    <h1>Vue Slots</h1>
    <SlotsComponent>
        <h2>hello usama</h2>
    </SlotsComponent>
    <SlotsComponent><a href="https://www.google.com/">Google</a></SlotsComponent>
    <br />
    <SlotsComponent></SlotsComponent>
    <br />
    <SlotsComponent><img :src="require('../assets/baby.jpg')" alt="Vue Logo"></SlotsComponent>

    <h1>Multiple Slots with Name in Vue JS 3</h1>

    <MultiSlot>

        <template v-slot:header>
            <h3>Vue JS 3</h3>
        </template>

        <template v-slot:main>
            <p>Vue is an JavaScript Framework</p>
        </template>

        <template v-slot:footer>
            <button>Join Course</button>
        </template>

    </MultiSlot>

    <MultiSlot>

        <template v-slot:header>
            <h3>React Js</h3>
        </template>

        <template v-slot:main>
            <p>React is an JavaScript Library</p>
        </template>

        <template v-slot:footer>

        </template>

    </MultiSlot>

    <h1>Dynamic Component</h1>
    <button @click="tab='Node'">Load Node</button>
    <button @click="tab='Java'">Load Java</button>
    <button @click="tab='Php'">Load Php</button>

<component :is="tab"/>
</div>

<h1> Teleport Component</h1>
<teleport to="#footer" >
    <h3>Hello its Teleport Component</h3>
    <Footer></Footer>
    
</teleport>




</template>

<script>
import Footer from './Footer.vue'
import Student from './Student.vue'
import User from './User.vue'
import Child from './Child.vue'
import Teacher from './Teacher.vue'
import Child2 from './Child2.vue'
import SlotsComponent from './Slots.vue'
import MultiSlot from './MultiSlot.vue'
import Node from './Node.vue'
import Java from './Java.vue'
import Php from './Php.vue'
import { warn } from 'vue'


export default {
    name: 'HomeComponent',

    
    beforeCreate(){
        warn("Before create")
    },

    
    data() {
   
        return ({

           
            tab: '',
            decFunc: 0,
            data: '',
            dollar: 100,
            rupee: 287,
            discount: 40,

            form: {
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: '',

            },
            error: [],

            tag: "<h2>usam hayat</h2>",
            tag2: "<h2>usama@gmail.com</h2>",
            count: 0,
            colorful: true,
            err: true,
            other: true,
            user: {
                name: 'usama hayat',
                email: "usama@gmail.com"
            },
            email: null,
            password: null,
            technology: [],
            who: [],
            subjects: ["OOP", "PF", "Mobile Computing", "Web Development"],
            childUser: "",

            show: true,
            language: ["java", "php", "html", "python", "c#"],
            detail: [{
                    name: "usama",
                    email: "usamahayat2012@gmail.com",
                    phone: "03485696468"
                },
                {
                    name: "shani",
                    email: "shani@gmail.com",
                    phone: "0304856465768"
                }, {
                    name: "hayat",
                    email: "hayat2@gmail.com",
                    phone: "030865658"
                },
            ]
        })
    },
    watch: {
        count(val, prev) {

            if (val > 5 && val > prev) {
                alert("Stop Clicking")
            }
            if (val >= 5 && val < prev) {
                alert("Keep decreasing")
            }

            // if (val>5)
            // {
            //     this.count=0
            // }

        }

    },
    computed: {
        getData1() {
            return (this.dollar * this.rupee) - this.discount

        },

        applyStyle() {
            return {
                green: this.colorful,
                err: this.err,
                other: this.other

            }

        }

    },
    components: {
        Child,
        User,
        Student,
        Teacher,
        Child2,
        SlotsComponent,
        MultiSlot,
        Node,
        Java,
        Php,
        Footer,

    },

    methods: {

        formData() {
            this.error = [];
            for (const item in this.form) {
                if (this.form[item] === "" || this.form[item].length === 0) {
                    this.error.push(item)
                }
            }
            if (this.error.length === 0) {
                alert("data has been submitted successfully!")
            }

            console.log(this.form, this.error)

        },

        sendUser(userName) {
            this.childUser = userName

        },
        refData() {
            this.$refs.input1.focus();
            let val1 = this.$refs.input1.value;
            console.warn(val1);
            this.$refs.input1.style.color = "blue";

            this.$refs.input2.focus();
            let val2 = this.$refs.input2.value;
            console.warn(val2);
            this.$refs.input2.style.color = "green";

        },

        getData() {

            console.warn("Values : ", this.email, this.password)
            // this.count=this .count+1
            // return {
            //     name: 'Usama Hayat',
            //     email: 'usama@gmail.com',
            //     phone: this.phone,

            // }
        },

        setData() {
            console.warn("Parent Function Called")
            alert("Hello, Parent function called")

        },

        getDetails(a) {
            alert(a);
        },

        getConsole() {
            console.warn("function called")
        },
        newData(name) {
            alert(name)

        }

    }
}
</script>

<style scoped>
h1 {
    color: rgb(15, 121, 121);
}

h2 {
    color: blue;
}

h3 {
    color: brown;
}

.green {
    background-color: green;
    width: 300px;
    padding: 10px;
}

.err {
    color: black;
}

.other {
    font-size: 50px;
}
</style>
