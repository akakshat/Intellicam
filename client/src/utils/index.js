import { surpriseMePrompts } from '../constants';
//This function is to generate random prompts 
// among those given in [ surpriseMePrompts ]

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}