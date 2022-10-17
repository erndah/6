const data = (req, res) => {
  res.status(200).json({
    message: "Data berhasil get",
    data: {
      nama: "erin",
      umur: 23,
      hobi: "nonton",
    },
  });
};
const post = (req, res) => {
  let result = {
    nama: req.body.nama,
    umur: req.body.umur,
    hobi: req.body.hobi,
  };
  res.status(200).json({
    message: "Data berhasil get",
    data: result,
  });
};
module.exports = { data, post };
