
// Importar Data API - Posts
import { requestAPI } from "/utils/function_requests";
//Importar Rutas - para URL
import config from '/utils/variables_entorno'

Page({
  data:{
    dataAPI:"",
    dataApiPosts:"",
    limit:3,
    url_img:"",
    modalOpened:false,
    numberRandom:1,
    posts:""
    
  },

 
  // 1.Funcion Abrir Modal - Obtener Data API - POSTS
  openModal(){

    const resourcesUrl = config.POSTS_URL // obtener users VARIABLES ENTORNO
    requestAPI('GET',resourcesUrl).then(data =>{  // peticion a la API
      this.setData({
        dataApiPosts:data // Guardar peticion - Mostrar los datos
      })

    }).catch(error => { console.error("Error al obtener los datos:", error);})

    console.log("OBTENER DATA POSTS",this.data.dataApiPosts);

    this.setData({
      modalOpened:true
    })

    // Posts Inicial Cuando Inicia la pagina
    this.setData({
      posts:this.data.dataApiPosts.data[0].body
    })
    console.log("DATO DE LA VARIABLE",this.data.posts)
  },
  onModalClick() {

    console.log("HOLA SOY LA FUNCION CLICK")

    
    this.setData({
      modalOpened: false,
    });
  },

  onModalClose() {

    console.log("HOLA SOY LA FUNCION cerrar")

    this.setData({
      modalOpened: false,
    });
  },

  // 2. Funcion - Generar numero aleatorio
  clickRandom(){
    let numeroAleatorio = Math.floor(Math.random()*100)
    console.log("NUMERO ALEATORIO",numeroAleatorio);

    this.setData({
      posts:this.data.dataApiPosts.data[numeroAleatorio].body
    })
  },

  // 3. Funcion - Copiar texto en Portapapeles
  copyBoard(){

    my.setClipboard({
      text:this.data.posts,
      success: ()=>{
        my.showToast({
          content:"Texto copiado al portapapeles"
        })
      },
      fail:(err)=> {
        console.log("Error al copiar",err);
      }
    })

  },


  
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    
    
    
  },
  onReady() {
    // Page loading is complete
    
    
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
