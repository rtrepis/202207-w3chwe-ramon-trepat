export interface IComponent {
  element: HTMLElement;
  render?: () => void;
}

export interface IitemApiObjec {
  name: string;
  url: string;
}

export interface IlistApiObject {
  count: number;
  next: string;
  previus: string | null;
  results: [];
}
