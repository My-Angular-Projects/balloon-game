import { COLORS, IBalloon, TColors } from '../interfaces';

export function generateRandomColor(): TColors {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export class BalloonModel implements IBalloon {
  constructor(
    readonly id = window.crypto.randomUUID(),
    readonly color = generateRandomColor(),
  ) {}
}
