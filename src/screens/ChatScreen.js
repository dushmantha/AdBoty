// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Alert,
//   FlatList,
//   TextInput,
//   ActivityIndicator,
//   StyleSheet
// } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { useFetchAnswerFromChatgptApi,fetchAnswerFromChatgptApi, fetchAnswerFromDalleApi } from '../api/openAI';



// const ChatScreen = () => {
//   const [messages, setMessages] = useState<String>("");
//   const [input, setInput] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const sendMessage = async () => {
//     if (input.trim().length === 0) return;
  
//     setInput("");

//     setIsLoading(true); // Set loading to true before sending the message

//     try {
//       const response = await fetchAnswerFromDalleApi(input);
     
//       setMessages(response || "");
//     } catch (error) {
//       console.error("Error fetching AI reply:", error);
//     } finally {
//       setIsLoading(false); // Reset loading status once the message is sent
//     }
//   };
//   return (
//   <ScrollView>
//     <View style={styles.inputContainer}>
//     <Image
//                 style={styles.generatedImage}
//                 source={{
//                   uri: messages,
//                 }}
//               />
//       <Text>{messages}</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => setInput(text)}
//           value={input}
//           placeholder="Type your message..."
//         />
//         <TouchableOpacity
//           onPress={sendMessage}
//           style={styles.sendButton}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="#fff" />
//           ) : (
//             <Text style={styles.sendButtonText}>Send</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//       </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//       },
//       chatList: {
//         paddingHorizontal: 10,
//       },
//       inputContainer: {
       
//         backgroundColor: '#fff',
//         borderTopWidth: 1,
//         borderTopColor: '#ddd',
//         padding: 10,
//       },
//       input: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 20,
//         paddingHorizontal: 15,
//         paddingVertical: 8,
//         fontSize: 16,
//         marginRight: 10,
//       },
//       sendButton: {
//         backgroundColor: '#1a73e8',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 20,
//         width: 50,
//         height: 50,
//       },
//       sendButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 16,
//       },
//       generatedImage: {
//         width: 300,
//         height: 300,
//         resizeMode: "contain",
//       },
// });

// export default ChatScreen;

import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import uuid from 'react-native-uuid';

const MyComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  // Debounce the API call to avoid excessive requests when the user types rapidly
  const debouncedAPICall = _.debounce((input) => {
    fetchResponse(input);
  }, 1000); // Adjust the debounce delay (in milliseconds) as per your needs

  // Function to fetch response from ChatGPT
  const fetchResponse = async (input) => {
    try {
      // Replace 'YOUR_API_KEY' with your actual GPT-3.5 API key
      const apiKey = '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';
      const endpoint = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

      // Prepare the prompt and additional parameters
      const userId = uuid.v4;

        // Prepare the prompt and additional parameters
      const prompt = `User ID: ${userId}\nUser Input: ${userInput}\n`;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      };
      const data = {
        prompt,
        max_tokens: 100,
      };

      // Make the API call to ChatGPT
      const response = await axios.post(endpoint, data, { headers });

      // Handle the response data
      setResponse(response.data.choices[0].text);
    } catch (error) {
      // Handle errors, e.g., show an error message or retry the request
      console.error('Error fetching response:', error);
    }
  };

  // Handle user input change
  const handleUserInput = (text) => {
    setUserInput(text);

    // Call the debounced API function
    debouncedAPICall(text);
  };

  return (
    <View>
      <Text>Input:</Text>
      <TextInput
        value={userInput}
        onChangeText={handleUserInput}
        placeholder="Type your message..."
      />
      <Text>Response:</Text>
      <Text>{response}</Text>
      {/* Add other components and UI elements as needed */}
    </View>
  );
};

export default MyComponent;
