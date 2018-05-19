<template>
  <div> <h1>What's Next?</h1>
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
      <h1>{{user.userName}}</h1> <form> <button type="submit">LogOut</button> </form>
      <div>
        <form v-on:submit.prevent="addPost;post={}">
            <input type="string" name="title" placeholder="title" v-model="post.title">
            <input type="string" name="body" placeholder="Kick ass story" v-model="post.body">
            <button type='submit'>Add post</button>
        </form>
      </div>
    
      <div>{{msg}}</div>
   
      <div class="post" v-for="post in posts" :key='post._id'>
          <!-- {{post}} -->
          <img :src="post.imgUrl">   
          <h1>Title: {{post.title}}</h1>
          <p>body: {{post.body}}</p>
          <h6>Author: {{post.userName}}</h6>
          <h6>{{post._id}}</h6>
           <form v-on:submit.prevent="addComment(post._id,  $event.target.comment.value)">
            <input type="string" name="comment" placeholder="comment" >
           
            <button type='submit'>Submit Comment</button>
        </form>
          <div class="comment" v-for="comment in comments" :key='comment._id'></div>
      </div> 
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
        userName: "",
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
      },
      comment:{
        userName: "",
       userId: 0,
       postId: 0,
       body: '',
       votes: 0
      }
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    comments() {
      return this.$store.state.comments;
    },
    user(){
      return this.$store.state.user;
    }
  },
  methods: {
    // checkUser(name){
    //   this.$store.dispatch("checkUser",this.users)

    // },
    addPost() {
      this.post.userName = this.user.userName
      this.post.userId = this.user._id
      this.$store.dispatch("addPost", this.post);
    },
    addComment(postId, newBody){
      this.comment.body=newBody
      this.comment.userId = this.user._id
      this.comment.userName = this.user.userName
      this.comment.postId = postId
      this.$store.dispatch("addComment", this.comment)

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
