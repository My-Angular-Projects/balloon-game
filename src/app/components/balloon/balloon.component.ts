import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { IBalloon } from '../../interfaces';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Component({
  selector: 'bl-balloon',
  standalone: true,
  imports: [],
  templateUrl: './balloon.component.html',
  styleUrl: './balloon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalloonComponent implements OnInit {
  private readonly animation = inject(AnimationBuilder);
  private readonly elementRef = inject(ElementRef);

  public balloon = input.required<IBalloon>();

  ngOnInit(): void {
    this.generateAnimation();
  }

  private generateAnimation(): void {
    const animation = this.animation.build([
      style({ translate: `0 0`, position: 'fixed', left: 0, bottom: 0 }),
      animate(`4s ease-in-out`, style({ translate: `0 -100vh` })),
    ]);
    const player = animation.create(this.elementRef.nativeElement.firstChild);
    player.play();
    player.onDone(() => console.log('all done'));
  }
}
