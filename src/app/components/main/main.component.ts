import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { BalloonComponent } from '../balloon/balloon.component';
import { IBalloon } from '../../interfaces';
import { BalloonModel } from '../../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'bl-main',
  standalone: true,
  imports: [BalloonComponent, JsonPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  private readonly totalBalloons = 3;
  public balloons: IBalloon[] = [];
  public score = 0;
  public missed = signal<number>(0);
  public gameOver = computed(() => this.missed() === 3);

  ngOnInit(): void {
    this.startGame();
  }

  public balloonHitHandler(id: string): void {
    this.score += 1;
    this.balloons = this.balloons.filter(
      (balloon: IBalloon) => balloon.id !== id,
    );
    this.balloons.push(new BalloonModel());
  }

  public balloonMissedHandler(): void {
    this.missed.update((missed: number) => missed + 1);
  }

  public restartGame(): void {
    this.startGame();
  }

  private startGame(): void {
    this.missed.set(0);
    this.score = 0;
    this.balloons = [
      ...Array<IBalloon | null>(this.totalBalloons)
        .fill(null)
        .map(() => new BalloonModel()),
    ];
  }
}
