const pool  = require("../db");
const queries = require("../Queries/queries");

const getPosts = (req,res)=>{
    pool.query(queries.getPostsQuery, (error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    });    
}

const getPostById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getPostByIdQuery, [id], (error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    });    
}

const addPost = (req,res)=>{
    const {name , category} = req.body;
    console.log(name,category);
    pool.query(queries.addPostQuery,[name,category],(error,result)=>{
        if(error) throw error;
        res.status(201).send("New Post Created!");
    })
}

const updatePost = (req,res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;
    pool.query(queries.getPostByIdQuery, [id], (error,result)=>{
        if(error) throw error;
        if(!result.rows.length){
            res.send("No post found");
        }

        pool.query(queries.updatePostQuery,[name,id],(error,result)=>{
            if(error) throw error;
            res.status(200).send("Post updated successfully");
        });
    });     
}

const deletePost = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getPostByIdQuery, [id], (error,result)=>{
        if(error) throw error;
        if(!result.rows.length){
            res.send("No post found");
        }

        pool.query(queries.deletePostQuery,[id],(error,result)=>{
            if(error) throw error;
            res.status(200).send("Post deleted successfully");
        });
    });     
}

module.exports = {
    getPosts,
    getPostById,
    addPost,
    updatePost,
    deletePost
};