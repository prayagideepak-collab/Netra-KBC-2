import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API: Tark Guru (Ask the Expert) reasoning guidance
// Rule: Never reveal the direct answer or option letter; guide reasoning only!
app.post('/api/tark-guru', async (req, res) => {
  try {
    const { question, options, language } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({
        advice: language === 'hi'
          ? "तर्क गुरु का सुझाव: विकल्पों को ध्यान से देखें। सबसे पहले उन दो विकल्पों को छाँटें जो तर्क की दृष्टि से पूरी तरह असंगत हैं। शेष विकल्पों में मूल सिद्धांत या पैटर्न की तुलना करें।"
          : "Tark Guru's Guidance: Look closely at the premise. Eliminate the two options that are conceptually inconsistent. Compare the remaining two against the core logic or pattern.",
        source: 'local-heuristic'
      });
    }

    const langInstruction = language === 'hi'
      ? "उत्तर केवल हिंदी में दें (हिंदी देवनागरी लिपि)।"
      : "Provide your guidance in English.";

    const prompt = `You are "Tark Guru" (तर्क गुरु), the wise AI reasoning expert in Netra KBC (TarkShastra) - "Socho, Samjho, Jeeto" by Deepak Kushwaha.
The player has used the "Ask the Expert" lifeline.

QUESTION:
"${question}"

OPTIONS:
${options.map((opt: string, i: number) => `${String.fromCharCode(65 + i)}: ${opt}`).join('\n')}

STRICT RULES:
1. NEVER reveal the direct correct answer.
2. NEVER mention which option letter (A, B, C, or D) is correct.
3. Provide a sharp, insightful logical clue, elimination strategy, or perspective to help the player deduce the answer themselves.
4. Keep the explanation concise (2 to 3 sentences, under 60 words).
5. Tone: Respectful, intellectual, encouraging, like a seasoned quiz master and logic mentor.
6. ${langInstruction}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const advice = response.text?.trim() || (
      language === 'hi'
        ? "तर्क गुरु सुझाव: मुख्य तथ्यों पर ध्यान केंद्रित करें और अतिवादी विकल्पों को निरस्त करें।"
        : "Tark Guru advice: Focus on the core premise and eliminate outlier options."
    );

    res.json({ advice, source: 'gemini-3.8-flash' });
  } catch (error) {
    console.error('Tark Guru API error:', error);
    res.status(200).json({
      advice: req.body.language === 'hi'
        ? "तर्क गुरु का सुझाव: प्रश्न के मूल नियम पर विचार करें और गलत विकल्पों को एक-एक करके हटाएं।"
        : "Tark Guru's Advice: Break down the logic step-by-step and eliminate conflicting options.",
      source: 'fallback'
    });
  }
});

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Netra KBC (TarkShastra)', version: '1.1.38' });
});

// Mount Vite middleware for dev or serve dist in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Netra KBC server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
