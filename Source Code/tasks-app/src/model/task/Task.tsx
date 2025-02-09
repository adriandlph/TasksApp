export default interface Task {
  id: number;
  name: string;
  description?: string;
  start?: Date;
  end?: Date;
}
