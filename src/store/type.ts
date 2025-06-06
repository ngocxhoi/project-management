export interface Project {
  id: number;
  name: string;
  description?: string;
  startdate?: string;
  enddate?: string;
}

export enum Priority {
  Urgent = "Urgent",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  Backlog = "Backlog",
}

export enum Status {
  ToDo = "To Do",
  WorkInProgress = "Work In Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}

export interface User {
  userid?: number;
  username: string;
  email: string;
  profilepictureurl?: string;
  cognitoid?: string;
  teamid?: number;
}

export interface Attachment {
  id: number;
  fileurl: string;
  filename: string;
  taskid: number;
  uploadedbyid: number;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: string;
  startdate?: string;
  duedate?: string;
  points?: number;
  projectid: number;
  authoruserid?: number;
  assigneduserid?: number;

  author?: User;
  assignee?: User;
  comments?: Comment[];
  attachments?: Attachment[];
}

export interface SearchResults {
  tasks?: Task[];
  projects?: Project[];
  users?: User[];
}

export interface Team {
  teamid: number;
  teamname: string;
  productowneruserid?: number;
  projectmanageruserid?: number;
}
