<template>
  <div class="hello">  {{newUser.userName}}{{newUser.id}} <!--{{users.name}}-->
    <div v-if="!user._id">
      <!--vif="function to handle userid check"-->
      <form v-on:submit.prevent="getUser">
          <input type="text" name="name" placeholder="please enter name" v-model="checkUser.userName">
          <button type='submit'>Login</button>
      </form>
      <form  v-on:submit.prevent="addUser">
          <input type="text" name="name" placeholder="please enter name" v-model="newUser.userName">
          <button type='submit'>Register</button>
      </form>  
    </div>
    <div v-else>
      <h1>{{user.userName}}</h1>
      <div>
        <form v-on:submit.prevent="addPost">
            <input type="string" name="title" placeholder="title" v-model="post.title">
            <input type="string" name="body" placeholder="Kick ass story" v-model="post.body">
            <button type='submit'>Add post</button>
        </form>
      </div>
    
      <div>{{msg}}</div>
   
      <div class="post" v-for="post in posts" :key='post._id'>
        
          <img :src="post.imgUrl">   
          <h1>Title: {{post.title}}</h1>
          <p>body: {{post.body}}</p>
          <h6>Author: {{post.userId}}</h6>
          <!-- <button @click="addComment">Add comment</button>
          <button @click="deleteHouse(house)">Sold!</button>
          -->
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    this.$store.dispatch("getPosts");
  },
  data() {
    return {
      msg: "Tell us your story",
      post: {
        title: "",
        userId: "",
        body: "",
        votes: 0,
        imgUrl: "https://placehold.it/200x200"
      },
      newUser:{
        userName: ''
       
      },
      checkUser:{
        userName: ''

      }
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    // users() {
    //   return this.$store.state.users;
    // },
    user(){
      return this.$store.state.user;
    }
  },
  methods: {
    // checkUser(name){
    //   this.$store.dispatch("checkUser",this.users)

    // },
    addPost() {
      this.$store.dispatch("addPost", this.post);
    },
    getUser(){
      this.$store.dispatch("getUser", this.checkUser)
    },
    addUser(){
      this.$store.dispatch("addUser", this.newUser);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
