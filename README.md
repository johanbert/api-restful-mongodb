const userId = uuidv1();
const user = new User({
    _id: userId,
    ...req.body
})
PAL KAHOOTTTTT
Un modelo es una clase con la que construimos documentos. 
mongodb: comando para levantar servidor
mongo: comando para levantar cliente
diferencias entre put y patch 









// export const UserModel = {
//     _id: String,
//     email: String,
//     password: { type: String, select: false },
//     full_name: String,
//     create_at: Date,
// }

// private COLLECTION = 'users';
//     private Schema = mongooseService.getMongoose().Schema;
//     private userSchema = new this.Schema(UserModel);
//     private User = mongooseService.getMongoose().model(this.COLLECTION, this.userSchema);

