import bcrypt from 'bcryptjs';
import User,{IUser} from '../models/User';
import { generateToken } from '../utils/authUtils';

const signup = async ( email: string, password: string): Promise<IUser> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({email,password: hashedPassword });
    await user.save();
    return user;
};

const login = async (email: string, password: string): Promise<IUser| null> => {
    const user = await User.findOne({ email });
    if (!user) throw Error("User could't find");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Password is incorrect")
    return user
};

const logout = async ()=>{

}

export { signup, login };