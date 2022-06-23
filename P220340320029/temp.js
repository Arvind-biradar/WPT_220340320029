
const express = require('express');
const app = express();
app.use(express.static('abc'));
app.get('/poc1', function (req, res) {
	const mysql = require('mysql2');

	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'cdac',
		database: 'web',
		port:3306
	});
		let x=req.query.bookid;
		let y=req.query.bookname;
		let z=req.query.price;

    	var xyz ={ status:false,detail:{bookid:x,bookname:y,price:z}};
        
		connection.query('insert into book(bookid,bookname,price ) values(?,?,?)' ,[x,y,z],(err,rows)=>{
if(err){
	console.log(err);
}else
{
	if(rows.affectedRows>0){
		xyz.status=true;
	}
	
}
		});
		      
		connection.query('select * from book' ,[],(err,rows)=>{
			if(err){
				console.log(err);
			}else
			{
				if(rows.length>0){
					let tab=[];
					xyz.status=true;
					xyx.detail=rows;
				
				}
				
			}
					});

        res.send(xyz);
    });


	app.get('/poc2', function (req, res) {
		const mysql = require('mysql2');
	
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'cdac',
			database: 'web',
			port:3306
		});
			let x=req.query.bookid;
			let y=req.query.bookname;
			let z=req.query.price;
	
			var xyz ={ status:false,detail:{bookid:x,bookname:y,price:z}};
			
			connection.query('update book set price=? where bookid=?' ,[z,x],(err,rows)=>{
	if(err){
		console.log(err);
	}else
	{
		if(rows.affectedRows>0){
			xyz.status=true;
		}
		
	}
			});
		   console.log(xyz);
			res.send(xyz);


		});


		app.get('/poc3', function (req, res) {
			const mysql = require('mysql2');
		
			const connection = mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: 'cdac',
				database: 'web',
				port:3306
			});
				let x=req.query.bookid;
				let y=req.query.bookname;
				let z=req.query.price;
		
				var xyz ={ status:false,detail:{bookid:x,bookname:y,price:z}};
	
				connection.query('select *from  book where bookid=? ' ,[x],(err,rows)=>{
	
				if(err){
					console.log(err);
				}else{
					if(rows.length>0){
						xyz.status=true;
						xyz.detail=rows[0]
					}
				}
	
				});
			   console.log(xyz);
				res.send(xyz);
	
	
			});

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});