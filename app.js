
const express= require("express"); //express lai require gareko
const app = express();  //tyo require lai call gareko
const {blogs}=require("./model/index")

require("./model/index")

app.use(express.json());
app.use(express.urlencoded({extended : true}))



app.set("view engine","ejs"); //setting up ejs to run ejs in node 


app.get("/",async(req, res)=>{  
     const allBlogs =await blogs.findAll({

     })
    res.render("home",{blogs:allBlogs});
});


app.get("/postBlog",(req, res)=>{
    res.render("postBlog");

});


app.get("/singleBlog/:id",async(req, res)=>{
    const id = req.params.id;
    const allBlogs = await blogs.findAll({
        where:{
            id,
        },
    })
    res.render("singleBlog",{allBlogs});
});

app.post("/newBlog",async(req, res)=>{
    
    await blogs.create({
        title:req.body.title,
        subtitle:req.body.subtitle,
        description:req.body.description,
    });

    res.redirect("/");
});


 

app.get("/deletePost/:id",async(req,res)=>{
    const id =  req.params.id;
    await blogs.destroy({where:{id}});

     res.redirect("/");

})





app.listen(4200 ,()=>{
    console.log("the node has started")
})








