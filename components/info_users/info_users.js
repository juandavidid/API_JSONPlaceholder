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
      this.setData({
        arrayData:data.data
      })
    }).catch( error => { 
      console.error("Error al obtener los datos:", error);
    } )
  },
  didUpdate() {
    if( this.props.filteredUsersInput.length > 0){
      this.setData({
        arrayData:this.props.filteredUsersInput
      })

    }
  },
  didUnmount() {},
  methods: {
    openModal(e){
      this.setData({
        modalOpened: true,
      });
      this.setData({
        objectUsers:e.currentTarget.dataset.value
      })
    },
    onModalClick() {
      this.setData({
        modalOpened: false,
      });
    },
    onModalClose() {
      this.setData({
        modalOpened: false,
      });
    },
  },
});
