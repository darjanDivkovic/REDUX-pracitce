function createStore(){
     // The store should have 4 parts
     // 1. The state
     // 2. Get the state
     let state = 'a'

     const getState = () => state
     // 3. Listen to changes on the state
     // 4. Update the state

     return {
         getState
     }
}

let store = createStore();
let state = store.getState();

// Got the state
console.log(state);