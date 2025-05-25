import UrlRepository from "@/repositories/UrlRepos";
import shortid from "shortid";

export default class UrlShortnerService{
    private urlRepository;
    constructor(){
        this.urlRepository=new UrlRepository();
    }

    async shortenUrl(originalUrl:string):Promise<string>{

        let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);

        if(url){
            return url.shortUrl;
        }
        
        let shortUrl=shortid();
        url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        while(url){
            shortUrl=shortid();
            url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        }

        await this.urlRepository.createUrl(originalUrl ,`urls/${shortUrl}`);
        return shortUrl;
    }

    async getUrls(){
        const response= await this.urlRepository.getAllUrls();
        console.log("in servie res",response);
        return response;
    }

    async getUrlByShortUrl(shortUrl:string){
        return this.urlRepository.getUrlByShortUrl(shortUrl);
    }

    async getUrlByOrignalUrlService(originalUrl:string){
        return this.urlRepository.getUrlByOriginalUrl(originalUrl);
    }

    async deleteUrlById(id:string){
        return await this.urlRepository.deleteUrlById(id);
    }

    async updateUrlById(id:string){
        return await this.urlRepository.UpdateUrlById(id);
    }

}