import movieSchema from './models/movies.models.js'

export async function addmovies(req,res) {

    console.log(req.body);

    const{...movies}=req.body

    await  movieSchema.create({...movies}).then(()=>{
        res.status(201).send({msg:"Successfull"})
    }).catch((error)=>{
        res.status(404).send({error:error})
    })  
    
}

export async function getmovies(req, res) {
    console.log("get Movies");

    const data = await  movieSchema.find();
    console.log(data);
    res.status(200).send(data); 
}

export async function getmovie(req,res) {
    console.log(req.params);
    const {id}=req.params;
    const data=await  movieSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
    
    
}

export async function details(req,res) {
    console.log(req.params);
    const {id}=req.params;
    const data=await movieSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
    
    
}