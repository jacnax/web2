#TEST_SERVER

Rutas activas del proyecto:
|Ruta | Metodo | Observaciones |
| --- | --- | --- |
| '/' | Cualquira | Responde con texto un saludo |
| '/getproducts' | GET | Responde un Archivo JSON con la lista de productos |
| '/searchProduct' | GET | Requiere ID o Nombre(enviado po los __querys/parmas__) y Devuelve el Producto Buscado si Existe | 
| '/createUser' | POST |  Requiere Nombre, email, y Contraseña(enviados por el __body__ de la peticion en el formato JSON) y devuelve el estado de la creación del usuario |
