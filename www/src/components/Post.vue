<template>
    <div>
        <img :src="postProp.imgUrl">
        <h1>Title: {{postProp.title}}</h1>
        <p>body: {{postProp.body}}</p>
        <h6>Author: {{postProp.userName}}</h6>
        <h6>{{postProp._id}}</h6>
        <form v-on:submit.prevent="addComment">
            <input type="string" name="comment" placeholder="comment" v-model="comment.body">

            <button type='submit'>Submit Comment</button>
        </form>
        <div class="comment" v-for="comment in comments" :key='comment._id'>
            <h5>{{comment.body}}</h5>
        </div>
    </div>
</template>

<script>
    export default {
  name: "Post",
  props: ["postProp"],
  mounted() {
    this.$store.dispatch("getComments", this.postProp._id);
  },
  data() {
    return {
      comment: {
        userName: "",
        postId: "",
        userId: "",
        body: "",
        votes: 0
      }
    };
  },
  computed: {
    comments() {
      return this.$store.state.comments[this.postProp._id];
    },
    user(){
      return this.$store.state.user;
    }
  },
  methods: {
        addComment(){
      this.comment.userId = this.user._id
      this.comment.userName = this.user.userName
      this.comment.postId = this.postProp._id
      this.$store.dispatch("addComment", this.comment)

    },
  }
};
</script>