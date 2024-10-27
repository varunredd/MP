const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


//register
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.json({ success: false, message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ userName, email, password: hashPassword });
        await user.save();
        res.status(201).json({ success:true, message: "Registration Successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


//login
const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const checkUser = await User.findOne({ email });
        if(!checkUser){
            return res.json({ success: false, message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, checkUser.password);
        if(!isPasswordValid){
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ 
             id: checkUser._id, email: checkUser.email, role: checkUser.role, userName: checkUser.userName 
        }, 'CLIENT_SECRET_KEY', { expiresIn: "1h" });

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,   
        }).json({ 
            success: true,
            message: "Login Successful",
            user: {
                id: checkUser._id,
                userName: checkUser.userName,
                email: checkUser.email,
                role: checkUser.role,
            }
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

//logout
const logoutUser = async (req,res)=>{
    res.clearCookie("token").json({ success: true, message: "Logout Successful" });
}



//auth middleware
const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, 'CLIENT_SECRET_KEY');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Unauthorized" });
    }
}







module.exports = {registerUser, loginUser, logoutUser, authMiddleware};