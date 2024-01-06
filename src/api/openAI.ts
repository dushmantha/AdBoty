
import React, {  useState, useEffect } from 'react';
import { apiKey } from "../utils/constants";
import axios from 'axios';
import { OpenAIApi, Configuration } from "openai";
import RNFS from "react-native-fs"

const client = axios.create({
    headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
    }
})

const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

const chatgptUrl = 'https://api.openai.com/v1/chat/completions';
const dalleUrl = 'https://api.openai.com/v1/images/generations';

type APIProps = {
    prompt : any
    messages: any
}

// export const apiCall = async ({prompt, messages}: APIProps)=>{
    
//     // // Logic 1 : this will check the prompt from chatgpt if user wants to create an image
//     try{
//         const res = await client.post(chatgptUrl, {
//             model: "gpt-3.5-turbo",
//             messages: [{
//                 role: 'user',
//                 content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.`
//             }]
//         });
//         let isArt = res.data?.choices[0]?.message?.content;
//         isArt = isArt.trim();
//         if(isArt.toLowerCase().includes('yes')){
//             console.log('dalle api call');
//             return dalleApiCall({prompt, messages})
//         }else{
//             console.log('chatgpt api call')
//             return chatgptApiCall({prompt, messages});
//         }

//     }catch(err: any){
//         console.log('error: ',err);
//         return Promise.resolve({success: false, msg: err.message});
//     }

//     // // Logic 2 : sometimes chatgpt does not understand the art messages but thats fine, you can use this approach :)

//     // prompt = prompt.toLowerCase();
//     // let isArt = prompt.includes('image') || prompt.includes('sketch') || prompt.includes('art') || prompt.includes('picture') || prompt.includes('drawing');
//     // if(isArt){
//     //     console.log('dalle api call');
//     //     return dalleApiCall(prompt, messages)
//     // }else{
//     //     console.log('chatgpt api call')
//     //     return chatgptApiCall(prompt, messages);
//     // }
    
// }

const chatgptApiCall = async ({prompt, messages}: APIProps)=>{
    try{
        const res = await client.post(chatgptUrl, {
            model: "gpt-3.5-turbo",
            messages
        })

        let answer = res.data?.choices[0]?.message?.content;
        messages.push({role: 'assistant', content: answer.trim()});
        // console.log('got chat response', answer);
        return Promise.resolve({success: true, data: messages}); 

    }catch(err : any){
        console.log('error: ',err);
        return Promise.resolve({success: false, msg: err.message});
    }
}

const dalleApiCall = async ({prompt, messages}: APIProps)=>{
    try{
        const res = await client.post(dalleUrl, {
            prompt,
            n: 1,
            size: "512x512"
        })

        let url = res?.data?.data[0]?.url;
        // console.log('got image url: ',url);
        messages.push({role: 'assistant', content: url});
        return Promise.resolve({success: true, data: messages});

    }catch(err: any){
        console.log('error: ',err);
        return Promise.resolve({success: false, msg: err.message});
    }
}

const useFetchImageFromDalleApi = (prompt: string, numberOfImages: Number) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>();
    const [url, setUrl] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);

          try {
            const res = await client.post(dalleUrl, {
                prompt,
                n: numberOfImages,
                size: "512x512"
            })
            const url = res?.data?.data[0]?.url;
            setUrl(url);
            setIsLoading(false);
          } catch (error) {
            setError(error);
          }
      };
      fetchData();
    });
    return { isLoading, url, error };
  };

const useFetchAnswerFromChatgptApi = (message: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState("");
    let  isFetchResult: boolean = true
    useEffect(() => {
      
      const fetchData = async () => {
        setIsLoading(true);
        isFetchResult = false
          try {
              const json = {
                model: "gpt-3.5-turbo",
                messages: [{
                  role: "user", 
                  content: message.trim() 
              }]
              };
          
            const response = await client.post(chatgptUrl, json);
            const data = response.data.choices[0].message.content;
            setData(data);
            setIsLoading(false);
          } catch (error) {
            setError(error);
            setIsLoading(false);
          }
      };
      fetchData();
    }, [isFetchResult]);
    return { isLoading, data, error };
  };

  const fetchAnswerFromChatgptApi = async (prompt: string): Promise<string | null> => {
    try {
        const json = {
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user", 
            content: prompt.trim() 
        }]
        };
    
        const result = await client.post(chatgptUrl, json);
        return result.data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      return null;
    }
  };

  const fetchAnswerFromDalleApi =  async (prompt: string): Promise<string | undefined> =>{

    try {
     
    //   const response = await openai.createImage({
    //     prompt: prompt,
    //     n: 1,
    //     size: "256x256",
    //     response_format: "b64_json",
    //   });
    
    // const image = response.data.data[0].b64_json as string;
    
    // // This is the Buffer object that contains the generated image base64
    // const buffer = Buffer.from(image, "base64");
    // // Set a `name` that ends with .png so that the API knows it's a PNG image
    // buffer.name = "image.png";
    
    // const res = await openai.createImageVariation(buffer, 1, "256x256");
    // const variation = response.data.data[0].b64_json;
    // return res.data.data[0].url;
    // } catch (e) {
    //   console.error(e);
    // } 
    

      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
      });

      const fileBin = await RNFS.readFile("https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg", "base64");

      const response = await openai.createImageVariation(
        fileBin,
        1,
        "1024x1024"
      );
      return response.data.data[0].url;
      
    } catch (e) {
      console.error(e);
    } 

}
  export {useFetchAnswerFromChatgptApi,useFetchImageFromDalleApi, fetchAnswerFromChatgptApi, fetchAnswerFromDalleApi} ;
  
