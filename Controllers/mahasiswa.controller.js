const Mahasiswa = require("../Models/mahasiswa.model");

exports.findAll = ((req, res)=>{
  Mahasiswa.findAll((err, mahasiswa)=>{
    if (err) return res.status(400).json({
      status:400,
      message:err
    })
    res.status(200).json({
      status:200,
      message: "Succes get data",
      data: mahasiswa
    })
  });
})

exports.create = (req, res)=>{
  const new_mahasiswa = req.body;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: true, message: "Please provide all required field" })
  } else {
    Mahasiswa.create(new_mahasiswa, function (err, mahasiswa) {
      if (err) return res.status(400).json({
        status:400,
        message:"Bad Request"
      })
      res.status(201).json({
        status:201,
        message: "added successfully!",
        data: mahasiswa,
      })
    });
  }
}

exports.findById = (req, res)=> {
  Mahasiswa.findById(req.params.id, ((err, mahasiswa)=>{
    if (err) {
      return res.status(400).json({
        status:400,
        message:"nim not found"
      })
    } else {
      res.json({
        message: "Succes get data",
        status: 200,
        data: mahasiswa,
      });
    }
  }))
}

exports.update = ((req, res)=>{
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: true, message: "Please provide all required field" })
  } else {
    Mahasiswa.update(
      req.params.id,
      req.body,
      ((err, mahasiswa)=> {
        if (err) return res.status(400).json({
          status:400,
          message:err,
        })
        res.status(201).json({
          status:201,
          message: "added successfully!",
          data: mahasiswa,
        })
      }
    ))
  }
})

exports.delete = ((req, res)=>{
  Mahasiswa.delete(req.params.id, ((err, mahasiswa) =>{
    if (err) return res.status(400).json({
      status:400,
      message:err,
    })
    res.status(201).json({
      status:201,
      message: "delete successfully!",
      data: mahasiswa,
    })
  }
))
})