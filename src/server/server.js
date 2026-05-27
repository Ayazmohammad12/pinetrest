const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: "ayaz",
  host: "localhost",
  database: "pinterest",
  password: "1234",
  port: 5432,
})

pool.connect((err)=>{

  if(err){

    console.log("Database Error")
    console.log(err)

  }
  else{

    console.log("PostgreSQL Connected")

  }

})

// REGISTER

app.post("/register", async (req,res)=>{

  const { username,email,password } = req.body

  try{

    await pool.query(
      "INSERT INTO users(username,email,password) VALUES($1,$2,$3)",
      [username,email,password]
    )

    res.send("User Registered Successfully")

  }
  catch(err){

    console.log(err)

  }

})

// LOGIN

app.post("/login", async (req,res)=>{

  const { email,password } = req.body

  console.log(email,password)

  try{

    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    )

    if(result.rows.length === 0){

      return res.send("User Not Found")

    }

    const user = result.rows[0]

    if(user.password !== password){

      return res.send("Wrong Password")

    }

    res.send("Login Success")

  }
  catch(err){

    console.log(err)

    res.send("Login Failed")

  }

})

app.listen(5000,()=>{

  console.log("Server Running On Port 5000")

})