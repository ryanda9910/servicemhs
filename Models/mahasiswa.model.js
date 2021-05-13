const dbConn = require("../config/dbconfig");

let Mahasiswa = function (mahasiswa) {
  this.nim = mahasiswa.nim;
  this.nama = mahasiswa.nama;
  this.jnskel = mahasiswa.jnskel;
  this.tahunmsk = mahasiswa.tahunmsk;
};
Mahasiswa.create = function (newEmp, result) {
  dbConn.query("INSERT INTO mahasiswa set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Mahasiswa.findById = function (nim, result) {
  dbConn.query(
    "SELECT * from mahasiswa where nim = ? ",
    nim,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Mahasiswa.findAll = function (result) {
  dbConn.query("SELECT * from mahasiswa", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("mahasiswa : ", res);
      result(null, res);
    }
  });
};
Mahasiswa.update = function (nim, mahasiswa, result) {
  dbConn.query(
    "UPDATE mahasiswa SET nama=?,jnskel=?,tahunmsk=? WHERE nim =?",
    [
      mahasiswa.nama,
      mahasiswa.jnskel,
      mahasiswa.tahunmsk,
      nim,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Mahasiswa.delete = function (nim, result) {
  dbConn.query("DELETE FROM mahasiswa WHERE nim =?", [nim], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Mahasiswa;
