import { Document,Model,model,models,Schema } from "mongoose";


const urlSchema = new Schema ({
    originalUrl:{
        type:String,
        required:true,
        unique:true
    },
    shortUrl:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:true});

export interface Iurl extends Document{
    originalUrl:string,
    shortUrl:string
}

const Url:Model<Iurl> = models.Url || model<Iurl>('Url',urlSchema);

export default Url