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
