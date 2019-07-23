export default {
    state: {
      choise: 0,
      added: [],
      subscription: null,
      like: 0,
      extensions: [
        {name: 'Ably', added: false, subscription: 0}, 
        {name: 'Pusher', added: false, subscription: 1}, 
        {name: 'Fanouts', added: false, subscription: 2}, 
        {name: 'Hydna', added: false, subscription: 3}, 
        {name: 'Pubnub', added: false, subscription: 4}, 
        {name: 'Realtime.co', added: false, subscription: 5}, 
        {name: 'Reappt', added: false, subscription: 6}, 
        {name: 'Streamdata.io', added: false, subscription: 7}, 
        {name: 'Tambur.io', added: false, subscription: 8}, 
        {name: 'Convergence', added: false, subscription: 9}, 
        {name: 'Meteor', added: false, subscription: 10}
      ],
      description: 'Real-Time Technologies',
    },
    reducers: {
      choise: (state, Payload) => {
        if(Payload === 'Like') {
          return Object.assign({}, state, {
            choise: 'UnLike'
          })
        } 
        if(Payload === 'UnLike') {
          return Object.assign({}, state, {
            choise: 'Like'
          })
        }
        if(Payload === 'vote') {
          return Object.assign({}, state, {
            // choise: state.choise,
            vote: state.vote + 1
          })
        }
      },
      read: (state, Payload) => {
        // console.log(Payload)
          switch(Payload.name) {
            case 'Ably': 
              return Object.assign({}, state, {
              description: 'Ably is a platform that makes it easy for you add realtime messaging and streaming data to your application. The global service is uniquely able to offer solutions to the most difficult aspects of messaging at scale such as limitless scale, connection state recovery, guaranteed message delivery, client library "intelligence" to work around transient network problems. The Ably service operates in more than 24 data centres globally offering the lowest latencies globally.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              }) 
            case 'Pusher':
              return Object.assign({}, state, {
              description: 'Pusher is a hosted API for quickly, easily and securely adding scalable realtime functionality to web and mobile apps.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Fanouts':
              return Object.assign({}, state, {
              description: 'For front-end applications, Fanouts JavaScript library receives realtime JSON notifications with just a few lines of code. Integration is quick and simple.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Hydna':
              return Object.assign({}, state, {
              description: 'Hydna is a hosted backend into which you can send data and have it instantly appear on other devices.Instantly move data across platforms, technologies, and devices. Hydna is ideal for building dashboards, activity streams, notification- and chat systems, real-time collaboration, live statistics, remote controls, multiplayer games, and more.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Pubnub':
              return Object.assign({}, state, {
              description: 'Pubnub is the fastest cloud-hosted realtime messaging system for web and mobile apps.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Realtime.co':
              return Object.assign({}, state, {
              description: 'The Realtime Messaging Framework is a cloud-hosted messaging system for websites and mobile apps that require constant content updates in just a few milliseconds, enabling any application to interact with millions of connected users in a fast and secure way.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Reappt':
              return Object.assign({}, state, {
              description: 'Reappt is the only enterprise-class Realtime Messaging service delivered via the cloud to power business-critical internet apps. Reappt helps you develop reactive applications faster with lower costs and reduced risks. It is designed for a broad set of internet, mobile, and IoT developers – and provides a complete set of tools, including APIs and client libraries.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Streamdata.io':
              return Object.assign({}, state, {
              description: 'Streamdata.io is a real-time cache proxy allowing you to poll JSON REST APIs and push updates to clients. But wait, there is more: Streamdata.io keeps a history of modifications that occur on the data between two pollings! This way, streamdata.io is able to give you the list of modifications which happened since last time you fetched the data.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Tambur.io':
              return Object.assign({}, state, {
              description: 'Tambur.io provides your business with a simple messaging API to build scalable realtime web and mobile apps.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Convergence':
              return Object.assign({}, state, {
              description: 'Convergence is the worlds first API specifically designed for realtime collaborative applications. It was created as a one-stop shop for realtime collaborative application development, with a rich JSON-inspired data model API, guaranteed conflict resolution, and first-class APIs for users, presence, chat, and collaboration awareness.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'Meteor':
              return Object.assign({}, state, {
              description: 'Meteor is a set of new technologies for building top-quality web apps in a fraction of the time, whether you are an expert developer or just getting started.',
              choise: Payload.rowno,
              subscription: state.extensions[Payload.rowno].subscription  
              })
            case 'subscribe':
              return {
                ...state,
                [state.extensions[state.choise]]: {
                    subscription: state.extensions[state.choise].subscription + 1
                }
              }
              // console.log(state.subscription)  
              // return Object.assign({}, state, {
              // subscription: state.subscription + 1
              // })
              // let newState = Object.assign({}, state);
              // newState.extensions[state.choise].subscription = newState.extensions[state.choise].subscription + 1 
              // return Object.assign({},state, newState)
            default:
              return Object.assign({}, state, {
              description: 'Real-Time Technologies.',
              choise: 'default'
              })     
          }
      }
    }
  }  