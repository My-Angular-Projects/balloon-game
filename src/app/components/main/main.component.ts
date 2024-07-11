import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BalloonComponent } from '../balloon/balloon.component';
import { IBalloon } from '../../interfaces';
import { BalloonModel } from '../../models';

@Component({
  selector: 'bl-main',
  standalone: true,
  imports: [BalloonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  private readonly totalBalloons = 3;
  public readonly balloons = [
    ...Array<IBalloon | null>(this.totalBalloons)
      .fill(null)
      .map(() => new BalloonModel()),
  ];
}
