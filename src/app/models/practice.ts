import { EyePracticeType } from "../modules/shared/enum/eye-practice-enum";

export interface Practice {

  id: number;
  name: string;
  type: EyePracticeType;
  recommendedTime: number;
  disclaimer: string;
 
}