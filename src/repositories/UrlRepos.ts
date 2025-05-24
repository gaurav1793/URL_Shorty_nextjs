import Url, { Iurl } from "@/models/URL";
import connectDb from "@/config/db";

export default class UrlRepository{
    private urlModel;

    constructor(){
        connectDb();
        this.urlModel=Url;
    }

    async getUrlById(id:string): Promise<Iurl | null>{
        return await this.urlModel.findById(id).lean();
    }

    async getUrlByShortUrl(shortUrl:string):Promise<Iurl | null>{
        return await this.urlModel.findOne({shortUrl}).lean()
    }

    async getUrlByOriginalUrl(originalUrl:string):Promise<Iurl | null>{
        return await this.urlModel.findOne({originalUrl}).lean()
    }

    async getAllUrls() : Promise<Iurl[] | null>{
        return await this.urlModel.find().lean();
    }

    async deleteUrlById(id:string): Promise<Iurl | null>{
        return await this.urlModel.findByIdAndDelete(id).lean();
    }

    async UpdateUrlById(id:string): Promise<Iurl | null>{
        return await this.urlModel.findByIdAndUpdate(id).lean();
    }

    async createUrl(originalUrl:string , shortUrl:string):Promise<Iurl|null>{
        return await this.urlModel.create({originalUrl,shortUrl});
    }
}