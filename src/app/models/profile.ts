import { Job } from "./job";

export interface Profile {
     uid: string;
     title : string;
     salogan: string;
     address: string;
     location: [latitude:string, longitude:string];
     businessPictureUrl: string;
     profilePictureUrl: string;
     jobs: Job[];
}