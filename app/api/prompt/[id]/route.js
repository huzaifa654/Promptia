import { connectToDb } from "../../../../utils/database";
import Prompt from "../../../../models/prompt";


export const GET = async (req, { params }) => {

    try {
        await connectToDb();
        const prompts = await Prompt.findById(params?.id)
        console.log("prompts--------", prompts)
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response('Falied to fetch all prompts', {
            status: 500
        })
    }
};


export const PATCH = async (req, { params }) => {
    try {
        const { prompt, tag } = await req.json();
        await connectToDb();
        const existingPrompt = await Prompt.findById(params?.id);
        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), { status: 200 });
    } catch (error) {
        console.error("PATCH Error:", error);
        return new Response("Failed to update prompt", { status: 500 });
    }
};

export const DELETE = async (req, { params }) => {
    try {
        await connectToDb();
        await Prompt.findByIdAndDelete(params?.id);
        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        console.error("DELETE Error:", error);
        return new Response("Failed to delete prompt", { status: 500 });
    }
};
