export interface Level {
  description: string;
  task: string;
  layout: string;
  helper: string;
}

export interface ProgressSave {
  completed: number[];
  helped: number[];
}
