import { ExerciseImage } from "./exercise-image";

export interface Exercise {

  id: number;
  name: string;
  text: string;
  eyePracticeId: number;
  orderNumber: number;
  images: ExerciseImage[];
 
}