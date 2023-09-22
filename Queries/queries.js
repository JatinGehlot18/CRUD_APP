const getPostsQuery = "select * from blogs order by doc desc";
const getPostByIdQuery = "select * from blogs where blogId =$1";
const addPostQuery = "insert into blogs(name,category) values($1,$2)";
const updatePostQuery = "update blogs set name = $1 where blogId = $2";
const deletePostQuery = "delete from blogs where blogId=$1";


module.exports = {
    getPostsQuery,
    getPostByIdQuery,
    addPostQuery,
    updatePostQuery,
    deletePostQuery
};