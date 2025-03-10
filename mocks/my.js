const my = {
  request: jest.fn((options) => {

    if (options.url.includes("success")) {

      options.success({ data: { message: "success" }, statusCode: 200 });

    } else {

      options.fail({ error: "Request failed" });
    }
    options.complete();
    
  }),

  showLoading: jest.fn((options) => {
    console.log("Mock de my.showLoading llamado con:", options);
  }),

  

  // También agregar my.hideLoading si es usado en requestAPI
  hideLoading: jest.fn(() => {
    console.log("Mock de my.hideLoading llamado");
  })

};

module.exports =  my ;
