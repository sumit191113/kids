
import { GoogleGenAI } from "@google/genai";

export const askSparky = async (topic: string, question: string) => {
  // Fixed: Initialize GoogleGenAI with process.env.API_KEY directly as per developer guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are Sparky, a friendly AI tutor for kids aged 3-10. 
                 The current topic is: ${topic}. 
                 The child asks: "${question}". 
                 Explain it in very simple, encouraging, and educational English. 
                 Keep it under 3 sentences. No medical advice, no scary stuff.`,
      config: {
        temperature: 0.7,
        // Removed maxOutputTokens to avoid issues with thinkingBudget requirement in Gemini 3 series models
      }
    });
    
    // Fixed: Accessed .text as a property instead of a method and removed unnecessary local API_KEY checks
    return response.text || "Sparky says: That's a great question! Let's learn more together!";
  } catch (error) {
    console.error("AI Error:", error);
    return "Sparky is a bit confused, but he loves your curiosity!";
  }
};
