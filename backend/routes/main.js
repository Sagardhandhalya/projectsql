const express = require('express')
const router = express.Router()
const client = require('../db/conect_db')
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'.jpg')
    }
})

var upload = multer({ storage: storage })


router.post('/addprofile', upload.single('avatar'),(req,res)=>{

const user = req.body;
console.log(user)
const pathArray = req.file.path.split('/');
const pname = pathArray[pathArray.length-1];
const query = {
    text : 'insert into profiles(fullname , bd , contactno ,address , about ,filename) values($1,$2,$3,$4,$5,$6)',
    values:[user.fullname , user.bd , user.contactno , user.address , user.about ,pname]
}
client.query(query , (err , output)=>{
    if(err)
    {
        console.log(err.stack);
        res.json(err);
    }
    else{
        res.json(output);
    }
})

}
);

router.get('/get-all-profiles' , (req,res)=>{

    client.query('SELECT * from profiles', (err, output) => {
        console.log(output);
       let data = output.rows;
        res.json(data)
        
    })
    
})

router.get('/' , (req,res) =>{

   
    client.query('SELECT * from profile', (err, output) => {
        res.json(output.rows)
        client.end()
    })
    
})
function convert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}

router.post('/add', (req,res)=>{

    let q = req.body.query.trim();
    console.log(q);
    client.query(q).then((data) =>{

        console.log(data.rows);
        let html = `<style>
        *{
            padding : 0;
            margin:0;
        }
        .title{
            color:red;
         text-align: center;
        background-color: gray;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans - serif;
        font-size: 50px;

    }

        .slide {
            font-size:30px;
            padding : 5px;
              text-align: center;
            background-color: aquamarine;
             font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans - serif;
     
}
    </style > `;
        for (let i = 0; i < data.rows.length ; i++)
        {
            html += `<h1 class = "title" > ${i} </h1>`
            element = data.rows[i];
                
                 for (let key in element){
                     console.log(key);
                     if(key === 'birthdate')
                     {
                         html += `<p class="slide" >${key} : ${convert(element[key])}</p>` 
                     }
                     else{
                        html += `<p class="slide" >${key} : ${element[key]}</p>` 
                     }
                    }
        };

        
             res.send(html)
    }).catch((err)=>{
        res.json('err')
    })
})


module.exports = router;
