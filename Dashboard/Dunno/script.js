const { createApp } = Vue

  createApp({
    data() {
      return {
        status: 'bg-green-400',
        chatbots: [
          {
            name: 'Customer Feedback',
            desc:'This chatbot provides information about surveys and customers.',
            intro: 'Hello, how can i help today',
            font: 'fa-solid fa-info',
          },
          {
            name: 'Customer Queries',
            desc: 'This chatbot provides information on the call queries from our users..',
            intro: 'Hello, how can i help you today.',
            font: 'fa-regular fa-eye'
          }
        ],
        currentChat: -1,
        currentChatId: null,
        chatObject: {},
        isChatDisabled: false,
        answer: '',
        error: null,
      }
    },
    methods: {
     selectChatBot(id) {
       this.currentChat = id;
     },
      getImage(id) {
        if ( id >= 0) {
          return 'https://dsp-studio.ro/wp-content/bg'+id+'.jpg';
        }
        return 'https://dsp-studio.ro/wp-content/bg.jpg';
      },
      startConversation() {
        if ( this.currentChat >= 0 ) {
          this.currentChatId = Math.random().toString(36).slice(2);
          this.chatObject = {
            id : this.currentChatId,
            chat : []
          }
          this.sendChatMsg(this.chatbots[this.currentChat]['intro']);
        }
      },

      async sendChatMsg(msg) {
        if (this.chatObject.chat.length % 2 === 0) {
          this.chatObject.chat.push('');
          var n = 0;
          (function loop() {
            this.chatObject.chat[this.chatObject.chat.length-1] += msg[n];
            if (++n < msg.length) {
              setTimeout(loop.bind(this), 20);
            } else {
              this.isChatDisabled = false;
            }
          }.bind(this))();
        } else {
          this.chatObject.chat.push(msg);
          this.isChatDisabled = true;

          var r = await axios.get('https://youcanseethemilkyway.com/chatbot/?id='+this.currentChatId+'&q='+msg).then( (response) => {
              // handle success
              this.sendChatMsg(response.data.trim());
            }).catch(function (error) {
              // handle error
              console.log(error);
            }).then(function () {
              // always executed
            });
        }

      },

      onSubmit(e) {
        const msg = e.target[0]['value'];
        if (msg.length <= 5) {
          return alert('Please type at least 5 chars!');
        }
        this.sendChatMsg(msg);
        e.target[0]['value'] = '';
        this.isChatDisabled = true;
      },

      downloadChatTranscript() {
        const blob = new Blob([this.chatObject.chat.join("\r\n")], { type: "text/json" });
        const link = document.createElement("a");

        link.download = this.chatObject.id + '.txt';
        link.href = window.URL.createObjectURL(blob);
        link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

        const evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
        });

        link.dispatchEvent(evt);
        link.remove()

        // const link = document.createElement('a');
        // link.href = window.URL.createObjectURL(this.jsonBlob);
        // link.download = 'file.txt';
        // link.click();
      }
    },
    computed: {
    },
    mounted() {

      // let newObject = window.localStorage.getItem("chatBot0");
      // this.chatObject = JSON.parse(newObject);
    }
  }).mount('#app')
