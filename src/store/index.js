import {createStore} from 'vuex'
import {localStoragePlugin} from '../plugins/localStoragePlugin'

// function updateLocalStorage(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart))
// }

const store = createStore({
    modules: {
      //
    },
    state() {
      return {
        products: [
            {
                "id": 1,
                "name": "Eum sunt quam ut et.",
                "description": "Sint omnis ea aut aut. Expedita eum minus qui nesciunt et. Non ipsam quia est vitae autem qui.",
                "image": "http://placeimg.com/640/480/tech",
                "price": "43.13",
            },
            {
                "id": 2,
                "name": "Lorem ipsum dolor.",
                "description": "Sint omnis ea aut aut. Expedita eum minus qui nesciunt et. Non ipsam quia est vitae autem qui.",
                "image": "http://placeimg.com/640/480/tech",
                "price": "11.13",
            },
            {
                "id": 3,
                "name": "Lorem ipsum product placeholder.",
                "description": "Sint omnis ea aut aut. Expedita eum minus qui nesciunt et. Non ipsam quia est vitae autem qui.",
                "image": "http://placeimg.com/640/480/tech",
                "price": "99.9",
            }
        ],
        cart: []
      }
    },
    getters: {
        productQuantity: state => product => {
            //find() returns the value of the first element in the provided array that satisfies the provided testing function
            const item = state.cart.find(x => x.id === product.id)
            if (item) return item.quantity
            else return null
        },
        cartItems: state => {
            return state.cart
        },
        cartTotalCost: state => {
            let result = 0
            state.cart.forEach(item => {
                result += item.price * item.quantity
            });
            return (result).toFixed(2)
        }
    },
    mutations: {
        addToCart(state, payload) {
            //find() returns the value of the first element in the provided array that satisfies the provided testing function
            const item = state.cart.find(x => x.id === payload.id)
            if (item) item.quantity++
            else state.cart.push({...payload, quantity:1})
            // updateLocalStorage(state.cart)
        },
        removeFromCart(state, product) {
            const item = state.cart.find(x => x.id === product.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
        }
    },

    actions: {
        //
    },
    plugins: [
      localStoragePlugin
    ],
})

export default store;
