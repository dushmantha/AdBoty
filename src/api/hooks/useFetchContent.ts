
import {useRef, useState, useEffect} from 'react';
import { useChatGpt } from 'react-native-chatgpt';

const useFetchContent = (sendText: string) => {
    
  const [isLoading, setIsLoading] = useState(false);
  const [responseText, setResponseText] = useState('')
  const [adContent, setAdContent] = useState('')
  const { sendMessage } = useChatGpt();
  const [errorMessage, setErrorMessage] = useState('');
  const messageId = useRef('');
  const conversationId = useRef('');
  const aa = ""


  useEffect(() => {
    const sendMessageToChatGPT = ()=>{
        // setIsLoading(true)
        sendMessage({
            message: sendText ,
            options:
              messageId.current && conversationId.current
                ? {
                    messageId: messageId.current,
                    conversationId: conversationId.current,
                  }
                : undefined,
            onAccumulatedResponse: (accumulatedResponse) => {
              messageId.current = accumulatedResponse.messageId;
              conversationId.current = accumulatedResponse.conversationId;
              if(responseText == accumulatedResponse.message){
                setAdContent(accumulatedResponse.message)
              } else {
                setResponseText(accumulatedResponse.message)
              }
              // setIsLoading(false)
            },
       
            onError: (e) => {
              setErrorMessage(`${e.statusCode} ${e.message}`);
              // setIsLoading(false)
            },
          });
    }
    sendMessageToChatGPT()
  }, [sendText]);
  {console.log("print ----", isLoading, responseText, errorMessage)}
  return {isLoading, responseText, errorMessage, adContent}
};

export default useFetchContent;
