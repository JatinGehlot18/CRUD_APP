//creating local database
create a local postgre database, contains table name blogs.
//this is the schema of table
 create table blogs( blogId serial primary key, name varchar(255), doc date default current_date, category text);   

//for a data inserted a data row
 insert into blogs(name,category) values('save planet','environment');

create a .env file which have three values
1) PORT
2) databasePort (on which postgre is running)
3) databasePassword (password of database)


//running the application
1)run "npm install" in terminal of current directory.
2)start the app by "node app.js" in terminal.
3)open postman send queries on localhost with PORT given in .env file.

//functions
1)GET /posts - Get all blog posts.
2)GET /posts/:id - Get a specific blog post by ID.
3)POST /posts - Create a new blog post.
4)PUT /posts/:id - Update an existing blog post.
5)DELETE /posts/:id - Delete a blog post.

tested result are in api_result folder.

