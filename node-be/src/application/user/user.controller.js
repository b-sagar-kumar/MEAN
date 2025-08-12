

export const userInfo = (req, res) => {
  res.json({ message: "Get all users" });
};
// export const userInfo = (req, res)=> {
//     let fetchedName = req.query.name;
//     console.log(fetchedName, 'backend name');
//     userModel.find({ name: fetchedName }).then(
//         (result) => {
//             console.log("Data fetched");
//             res.status(200).json({
//                 message: "User added successfully",
//                 data: result

//             })
//         }
//     ).catch(
//         (error) => {
//             console.log(error);
//             res.status(500).json({

//             })
//         }
//     )
// }