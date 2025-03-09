//Impotar funcion peticion API
import { requestAPI} from '/utils/function_requests'
Component({
  mixins: [],
  data: {
    arrayData:"",
    limit:10,
    modalOpened: false,
    objectUsers:"",
  },
  props: {
    filteredUsersInput: "" // Definimos el prop
  },
  didMount() {

    
     // 1.Obtener Data API -USERS
    requestAPI('GET',"users").then( data =>{    // peticion a la API
      
      console.log("Respuesta de la API", data);
      this.setData({
        arrayData:data.data
      })

    }).catch( error => { 
      console.error("Error al obtener los datos:", error);
    } )

    console.log("ESTADO VARIABLE",this.data.modalOpened);


  },
  didUpdate() {
    

    if( this.props.filteredUsersInput.length > 0){
      this.setData({
        arrayData:this.props.filteredUsersInput
      })

    }

    console.log("ESTADO VARIABLE",this.data.modalOpened);

    



    
    
  },
  didUnmount() {},
  methods: {

    openModal(e){
      console.log("DATOS ELEMENTOS",e)
     

      this.setData({
        modalOpened: true,
      });

      
      this.setData({
        objectUsers:e.currentTarget.dataset.value
      })
      
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



  },
});
