const mysql = require('mysql');
const express = require('express');
const { Schema } = require('mongoose');
var router= express.Router();
//Configuring express server

router.use(express.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Iamhere4u@',
    database: 'employeeschema',
    multipleStatements: true
    });

mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });
router.get('/' , (req, res) => {
    mysqlConnection.query('select * from Items;', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    //return res.console.log(rows);    
    else
    console.log(err);
    })
    } );
  
//Router to GET specific item detail from the MySQL database
router.get('/:id' , (req, res) => {
    mysqlConnection.query('SELECT * from Items WHERE id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

module.exports=router;