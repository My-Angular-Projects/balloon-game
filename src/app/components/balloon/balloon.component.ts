import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IBalloon } from '../../interfaces';

@Component({
  selector: 'bl-balloon',
  standalone: true,
  imports: [],
  templateUrl: './balloon.component.html',
  styleUrl: './balloon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalloonComponent {
  public balloon = input.required<IBalloon>();
}
