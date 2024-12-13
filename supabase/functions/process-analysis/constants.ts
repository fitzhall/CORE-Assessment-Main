export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const OPENAI_CONFIG = {
  model: 'gpt-4',
  temperature: 0.7,
  max_tokens: 2000,
};

export const SYSTEM_PROMPT = `You are an expert business analyst specializing in digital businesses and tax optimization.
Provide actionable insights and recommendations based on the business metrics provided.`;

export const USER_PROMPT_TEMPLATE = (scoreData: any) => `
Generate a detailed business analysis for a digital business with:

Score Breakdown:
- Overall: ${scoreData.totalScore}/${scoreData.maxScore}
- Revenue: ${scoreData.revenueScore.score}/${scoreData.revenueScore.maxScore}
- Tax: ${scoreData.taxScore.score}/${scoreData.taxScore.maxScore}
- Growth: ${scoreData.growthScore.score}/${scoreData.growthScore.maxScore}

Business Details:
- Monthly Revenue: $${scoreData.formData.revenueAmounts.monthlyRevenue}
- Structure: ${scoreData.formData.businessStructure}
- Age: ${scoreData.formData.businessAge}
- Team Size: ${scoreData.formData.employees}

Please provide:
1. Executive Summary
2. Top 3 Priority Tax Saving Opportunities
3. 90-Day Implementation Plan
4. Tax Strategy Recommendations
5. Revenue Optimization Insights
6. Risk Management Considerations`;