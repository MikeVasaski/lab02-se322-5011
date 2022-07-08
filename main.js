const app = Vue.createApp({
    data() {
        return {
            // product: 'Shoes',
            // brand: 'SE 331',
            // onSale: false,
            // inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            // variants: [
            //     { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity: 50 },
            //     { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity: 0 }
            // ],
            // selectedVariant: 0,
            cart: [],
            num_cart: 0,
            premium: true
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        removeFromCart(){
            this.$emit('remove-cart')
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        updateCart(id){
            this.cart.push(id)
            this.num_cart += 1
        },
        removeProduct(id){
            this.cart.splice(id,id)
        }

    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        status(){
            return this.brand + ' ' + this.product + ' is on sale'
            },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        
    }
})