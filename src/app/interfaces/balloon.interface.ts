export const COLORS = ['red', 'green', 'blue', 'purple'] as const;

export type TColors = 'red' | 'green' | 'blue' | 'purple';

export interface IBalloon {
  id: string;
  color: string;
}
