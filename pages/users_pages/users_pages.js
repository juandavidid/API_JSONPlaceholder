//Impotar funcion peticion API
import { requestAPI} from '/utils/function_requests'
Page({
  data: {
    arrayDataApi:"",
    filteredUsers:[], // Lista friltrada,

    
    
  },

  // Funcion Input Caputar Valor de Busqueda
  onSearchInput(e){
    console.log("Informacion del Input",e);
    const query = e.detail.value.toLowerCase(); // Convertimos el texto a minúsculas
    const filtered = this.data.arrayDataApi.filter(user =>
      user.name.toLowerCase().includes(query)
    );

    this.setData({
      searchQuery: query,
      filteredUsers: filtered
    });

    

  },

  // Funciones Ventana Modal

  

  

  onLoad() {
     // 1.Obtener Data API -USERS
     requestAPI('GET',"users").then( data =>{    // peticion a la API
      
      console.log("Respuesta de la API", data);
      this.setData({
        arrayDataApi:data.data
      })
      console.log("RESPUESTA API DATA - ARRAY",this.data.arrayDataApi)

    }).catch( error => { 
      console.error("Error al obtener los datos:", error);
    } )
  },
});
