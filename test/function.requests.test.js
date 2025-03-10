global.my = require("../mocks/my"); // Mockeado previamente



const { requestAPI } = require("../utils/function_requests");


jest.mock('../mocks/my'); // Asegura que Jest use el mock de `my.js`

test("Debe retornar éxito en la petición", async () => {
  console.log("Resultado de my.request en el test:", my.request);
  const response = await requestAPI("GET", "success");
  console.log("PRUEBA",response);
  expect(response.data.message).toBe("success");
});
