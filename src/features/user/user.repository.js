import { getDB } from "../../config/mongodb.js";

class UserRepository{

     async signUp(newUser) {
        try{
        const db = getDB();
        const collection = db.collection("users")
        // const newUser = new UserModel(
        //   name,
        //   email,
        //   password,
        //   type
        // );
        // newUser.id = users.length + 1;
        // users.push(newUser);
        await collection.insertOne(newUser);
        return newUser;
      }catch(error)
         {
             console.log(error);
         }
        
      }

      async signIn(email , password) {
        try{
        const db = getDB();
        const collection = db.collection("users")
        // const newUser = new UserModel(
        //   name,
        //   email,
        //   password,
        //   type
        // );
        // newUser.id = users.length + 1;
        // users.push(newUser);
        return await collection.findOne({email , password});
         
      }catch(error)
      {
        console.log(error);
      }
        
      }

      async findByEmail(email) {
        try{
        const db = getDB();
        const collection = db.collection("users")
        // const newUser = new UserModel(
        //   name,
        //   email,
        //   password,
        //   type
        // );
        // newUser.id = users.length + 1;
        // users.push(newUser);
        return await collection.findOne({email});
         
      }catch(error)
      {
        console.log(error);
      }
        
      }
}

export default UserRepository