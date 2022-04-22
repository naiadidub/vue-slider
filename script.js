const app = new Vue (
    {
        el: '#app',
        data: {
            
            slides : [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            currentIndex : 0,
            
        },
         
        
        methods: {
            previous(){
                if(this.currentIndex === 0 ){
                    this.currentIndex = this.slides.length - 1
                    
                } else {
                    this.currentIndex --
                    
                }
            },
            prox(){
                if(this.currentIndex === this.slides.length - 1){
                    this.currentIndex = 0
                    
                } else {
                    this.currentIndex ++
                    
                }
            },
            selected(index){
                this.currentIndex = index
                console.log(index)
                console.log(this.currentIndex)
            }
        },
        mounted() {

            setInterval(()=>{
                this.prox()
            }, 3000)
        
        }
    }
)