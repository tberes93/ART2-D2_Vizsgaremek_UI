export interface AppUser {

  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  lastPracticeDate: Date;
  numberOfConsecutiveDays: number;
  numberOfPracticeDays: number;
  iconImgName: string;
}