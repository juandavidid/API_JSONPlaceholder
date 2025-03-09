

//Importar Rutas - para URL
import config from '/utils/variables_entorno'

Page({
  data:{
    dataAPI:"",
    dataApiPosts:"",
    limit:3,
    url_img:""
    
  },

 
  getBtn(){

  },
  //2. Funcion Obtener Data API - POSTS
  getBtnPosts(){
    const resourcesUrl = config.POSTS_URL // obtener users VARIABLES ENTORNO
    requestAPI('GET',resourcesUrl).then(data =>{  // peticion a la API
      this.setData({
        dataApiPosts:data // Guardar peticion - Mostrar los datos
      })

    }).catch(error => { console.error("Error al obtener los datos:", error);})
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
