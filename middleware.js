
const middleware = (req,res,next)=>{
    const username = req.query.username;
    const password = req.query.password;

    if (!username || (username !== "talha" || password !== "123")) {
       res.render("auth",{layout: "layouts/login_layout.ejs"})
//    res.render("/index2")    
} else {
        next();
    }
}
module.exports = middleware;


