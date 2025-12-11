const express = require('express')
const app=express()
const bodyParser= require('body-parser')
const exhbs=require('express-handlebars')
const dbo=require('./db')//db is filename of the db queries 


app.engine('hbs',exhbs.engine(
    {
        layoutsDir:'viewsfold/',//foldername
        defaultLayout:"main",//runlayout which is going to run
        extname:"hbs"// the extension of main
    }
))


app.set('view engine','hbs')
app.set('views','viewsfold')

app.use(bodyParser.urlencoded({extended:true}))//to inser the data

//let message='nivi'

app.listen(8005,()=>{console.log('listening to port 8085')})



// app.get('/',(req,res)=>{
//     // let message='test'
//     res.render('main',{message})
// })


// app.get('/',async(req,res)=>{
//     // let message='test'
//     let database=await dbo.getDataBase()
//     const collection=database.collection('books')
//     const cursor=collection.find({})//returns the cursor object
//     let mydata=await cursor.toArray()//calling the arraymethod
//     //let message='nivi'
//     res.render('main',{message,mydata})
// })

app.get('/',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    const cursor=collection.find({})//returns the cursor object
    let mydata=await cursor.toArray()//calling the arraymethod
    let message=''
    switch(req.query.status){
        case '1':
            message="inserted successfully"
            break;
        default:
            break;
    }
    res.render('main',{message,mydata})
})



app.post('/store_book',async (req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('book')
    let bookdata={title:req.body.title1,author:req.body.author1}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

