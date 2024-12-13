import OpenAI from 'https://esm.sh/openai@4.26.0';
import { OPENAI_CONFIG, SYSTEM_PROMPT, USER_PROMPT_TEMPLATE } from '../constants.ts';
import type { OpenAIResponse } from '../types.ts';

export class OpenAIService {
  private client;

  constructor() {
    this.client = new OpenAI({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    });
  }

  async generateAnalysis(scoreData: Record<string, any>): Promise<OpenAIResponse> {
    const completion = await this.client.chat.completions.create({
      ...OPENAI_CONFIG,
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: USER_PROMPT_TEMPLATE(scoreData),
        },
      ],
    });

    return {
      content: completion.choices[0].message.content || '',
    };
  }
}