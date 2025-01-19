import User from "../models/user.model.js"
import Message from "../models/message.model.js"

export const getUsersForSidebar = async(req, res) =>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("_-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({error: "Internal server error"});
        
    }
};

export const getMessages = async(req, res) => {
    try {
        const { id:userToChatId } = req.params
        const myId = req.user._id;

        const message = await Message.find({
            $or:[
                {senderId:myId, recevierId:userToChatId},
                {senderId:userToChatId, recevierId:myId},
            ]
        })

        res.status(200).json(message)
    } catch (error) {
        console.log("Error is getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error"});  
    }
};


export const sendMessage = async(req, res) =>{
    try {
        const { text, image } = req.body;
        const { id: recevierId} = req.params;
    } catch (error) {
        
    }
};
