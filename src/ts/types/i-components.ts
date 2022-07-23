interface IComponent {
  element: HTMLElement;
  render?: () => void;
}

export interface Iitem {
  id: number;
}
export default IComponent;
