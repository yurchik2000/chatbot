<template>
  <div class="chat_message">
    <div v-if="chat_data.type === 'other'" class="other__message">
      <div class="message__wrapper">
        <div class="about__box">
          <img
            class="about__avatar"
            :src="require('../assets/img/' + activeContactAvatar)"
          />          
        </div>
        <p class="chat__message-text">
          {{ chat_data.text }}
        </p>
      </div>
      <p class="chat__message-data">
        {{ chat_data.date }},
        {{ chat_data.time }}
      </p>
    </div>
    <div v-if="chat_data.type === 'own'" class="own__message">
      <div class="message__wrapper">        
        <p class="chat__message-text">          
          {{ chat_data.text }}
        </p>
      </div>
      <p class="chat__message-data">
        {{ chat_data.date }},
        {{ chat_data.time }}
      </p>
    </div>    
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    chat_data: {
      type: Object,
      default: () => {},
    },
    activeContactAvatar: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.message__wrapper {
  display: flex;
}
.about__avatar {
  height: 60px;
  border-radius: 50%;
  background: #dddddd;
  margin: 10px;
}
.about__check {
  width: 20px;
  margin-left: -25px;
  margin-bottom: 5px;
}
.chat__message-text {
  font-size: 20px;
  color: #fff;
  background: darkblue;
  border-radius: 30px;
  padding: 15px;
  margin: 15px 20px 10px;
}
.chat__message-data {
  color: gray;
  margin-left: 120px;
}
.own__message .chat__message-text{
    margin-left: auto;
    background: lightgray;
    color: black;
}
.own__message .chat__message-data{
    text-align: right;    
    margin-right: 20px;    
}
</style>
