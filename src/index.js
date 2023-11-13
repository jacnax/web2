const express=require('express')
const app= express()

// configuracion express
app.use(express.json())
const PORT=process.env.PORT||3000

// RUTAS
app.all('/',(req,res)=>{res.send('hola')})

app.get('/getProducts',(req,res)=>{
    console.log("PETICION /GETPRODUCTS REALIZADA")
    const read_products = [
        {"id": "1A","nombre": "coca","Precio":"4000","Cantidad":4},    
        {"id": "1B","nombre": "Papas","Precio":"3000","Cantidad":5},
        {"id": "1C","nombre": "Choco","Precio":"4500","Cantidad":6},


    ]       
    
    res.status(200).json({status:"ok",products:read_products})})

    app.get('/searchProduct',(req,res)=>{

        console.log("PETICION/SEARCHPRODUCT REALIZADA")
        if(Object.keys(req.query).length===0)     {
            res.status(400).json({error:"Se requiere ID o nombre del producto"})

        }
        let product ={}

        if (req.query.hasOwnProperty('ID')){
            if(req.query.ID==="1A"){
                product={"id": "1A","nombre": "coca","Precio":"4000","Cantidad":4} 
            }
            else if(req.query.ID==="1B"){   
                product={"id": "1B","nombre": "Papas","Precio":"3000","Cantidad":5}
            }
            else if(req.query.ID==="1C"){
                product={"id": "1C","nombre": "Choco","Precio":"4500","Cantidad":6}
            } else{
                res.status(404).json({error:"PRODUCTO NO ENCONTRADO"})

            }
                

            }else if (req.query.hasOwnProperty('name')) {
                if(req.query.name==="coca"){
                    product={"id": "1A","nombre": "coca","Precio":"4000","Cantidad":4} 
                }
                else if(req.query.name==="Papas"){   
                    product={"id": "1B","nombre": "Papas","Precio":"3000","Cantidad":5}
                }
                else if(req.query.name==="Choco"){
                    product={"id": "1C","nombre": "Choco","Precio":"4500","Cantidad":6}
                }else{
                    res.status(404).json({error:"PRODUCTO NO ENCONTRADO"})
                }
            } else{

        }
        
      

        res.status(200).json({status:"ok",product})
    })

    app.post('/createUser',(req,res)=>{
        console.log("PETICION /CREATEUSER REALIZADA")
        console.log(req.body)
        if(!req.body.hasOwnProperty('nombre') || !req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('password')){
            res.status(400).json({error:"Para crear un usuario se requiere contraseña, nombre y correo"})
        }
        res.status(201).json({status:"ok",msj:"Usuario creado con exito"})})


//ESCUCHA PUERTO

app.listen(PORT,()=>{console.log(`servidor escuchando en el puerto ${PORT}`)})