import { connectToDb } from "../../../../utils/database"

export const GET=async(req,{params})=>{
     
    try {
        await connectToDb()
        
        
    } catch (error) {
        
    }

}

export const PATCH=async(req,{params})=>{
    const {prompt,tag}=await req?.json()
     
    try {
        await connectToDb();
        const exisitingPrompt=await prompt.findById(params?.id);
        if (!exisitingPrompt) {
             return new Response
        }
        
        
    } catch (error) {
        
    }

}