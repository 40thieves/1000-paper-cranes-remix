export interface Tool {
  name: string;
  url: string;
  description: string;
  image: string;
  requires?: string;
  advanced?: boolean;
}
