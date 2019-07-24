export default {
    state: {
      activeIndex: null,
      added: [],
      likesBlock: null,
      subscriptionBlock: 'subscribe',
      extensions: [
        {name: 'Ably', subscribe: false, likes: 0, added: false}, 
        {name: 'Pusher', subscribe: false, likes: 0, added: false}, 
        {name: 'Fanouts', subscribe: false, likes: 0, added: false}, 
        {name: 'Hydna', subscribe: false, likes: 0, added: false}, 
        {name: 'Pubnub', subscribe: false, likes: 0, added: false}, 
        {name: 'Realtime.co', subscribe: false, likes: 0, added: false}, 
        {name: 'Reappt', subscribe: false, likes: 0, added: false}, 
        {name: 'Streamdata.io', subscribe: false, likes: 0, added: false}, 
        {name: 'Tambur.io', subscribe: false, likes: 0, added: false}, 
        {name: 'Convergence', subscribe: false, likes: 0, added: false}, 
        {name: 'Meteor', subscribe: false, likes: 0, added: false}
      ],
      description: 'Real-Time Technologies',
    },
    reducers: {
      read: (state, Payload) => {  
        switch(Payload.name) {
          case 'Ably': 
            return Object.assign({}, state, {
            description: 'Ably is a platform that makes it easy for you add realtime messaging and streaming data to your application. The global service is uniquely able to offer solutions to the most difficult aspects of messaging at scale such as limitless scale, connection state recovery, guaranteed message delivery, client library "intelligence" to work around transient network problems. The Ably service operates in more than 24 data centres globally offering the lowest latencies globally.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            }) 
          case 'Pusher':
            return Object.assign({}, state, {
            description: 'Pusher is a hosted API for quickly, easily and securely adding scalable realtime functionality to web and mobile apps.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Fanouts':
            return Object.assign({}, state, {
            description: 'For front-end applications, Fanouts JavaScript library receives realtime JSON notifications with just a few lines of code. Integration is quick and simple.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Hydna':
            return Object.assign({}, state, {
            description: 'Hydna is a hosted backend into which you can send data and have it instantly appear on other devices.Instantly move data across platforms, technologies, and devices. Hydna is ideal for building dashboards, activity streams, notification- and chat systems, real-time collaboration, live statistics, remote controls, multiplayer games, and more.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Pubnub':
            return Object.assign({}, state, {
            description: 'Pubnub is the fastest cloud-hosted realtime messaging system for web and mobile apps.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Realtime.co':
            return Object.assign({}, state, {
            description: 'The Realtime Messaging Framework is a cloud-hosted messaging system for websites and mobile apps that require constant content updates in just a few milliseconds, enabling any application to interact with millions of connected users in a fast and secure way.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Reappt':
            return Object.assign({}, state, {
            description: 'Reappt is the only enterprise-class Realtime Messaging service delivered via the cloud to power business-critical internet apps. Reappt helps you develop reactive applications faster with lower costs and reduced risks. It is designed for a broad set of internet, mobile, and IoT developers – and provides a complete set of tools, including APIs and client libraries.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Streamdata.io':
            return Object.assign({}, state, {
            description: 'Streamdata.io is a real-time cache proxy allowing you to poll JSON REST APIs and push updates to clients. But wait, there is more: Streamdata.io keeps a history of modifications that occur on the data between two pollings! This way, streamdata.io is able to give you the list of modifications which happened since last time you fetched the data.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Tambur.io':
            return Object.assign({}, state, {
            description: 'Tambur.io provides your business with a simple messaging API to build scalable realtime web and mobile apps.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Convergence':
            return Object.assign({}, state, {
            description: 'Convergence is the worlds first API specifically designed for realtime collaborative applications. It was created as a one-stop shop for realtime collaborative application development, with a rich JSON-inspired data model API, guaranteed conflict resolution, and first-class APIs for users, presence, chat, and collaboration awareness.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'Meteor':
            return Object.assign({}, state, {
            description: 'Meteor is a set of new technologies for building top-quality web apps in a fraction of the time, whether you are an expert developer or just getting started.',
            activeIndex: Payload.i,
            likesBlock: state.extensions[Payload.i].likes,
            subscriptionBlock: state.extensions[Payload.i].subscribe ? 'unsubscribe' : 'subscribe'  
            })
          case 'like':
            let newArr = state.extensions.map((obj, index) => {
              if(index === state.activeIndex){ 
                return {...obj, likes: state.extensions[index].likes + 1}
              } 
              else return obj
            })
            console.log(newArr)
            if(state.activeIndex === null)   return state
            return Object.assign({}, state, {
              extensions: newArr,
              likesBlock: state.extensions[state.activeIndex].likes + 1
            })
          case 'subscribe':
            let newArr2 = state.extensions.map((obj, index) => {
              if(index === state.activeIndex){ 
                return {...obj, subscribe: state.extensions[index].subscribe ? false : true}
              } 
              else return obj
            })
            console.log(newArr2)
            if(state.activeIndex === null)   return state
            return Object.assign({}, state, {
              extensions: newArr2,
              subscriptionBlock: state.extensions[state.activeIndex].subscribe ? 'subscribe' : 'unsubscribe'
            })
          default:
            return Object.assign({}, state, {
            description: 'Real-Time Technologies.',
            activeIndex: 'default',
            likesBlock: null  
            })     
        }
      }
    }  
  }  