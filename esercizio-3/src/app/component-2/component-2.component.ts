import { Component } from '@angular/core';
import { Component3Component } from './component-3/component-3.component';
import { Component4Component } from './component-4/component-4.component';

@Component({
  selector: 'app-component-2',
  standalone: true,
  imports: [Component3Component,Component4Component],
  templateUrl: './component-2.component.html',
  styleUrl: './component-2.component.css'
})
export class Component2Component {
  nome1 : string = "meme uomo che pensa"
  descrizione1: string = "questo meme è nato molto tempo fa ma è tutt'ora usato e raffigura un uomo che pensa in cui si possono inserire delle frasi "
  nome2 : string = "meme balletto drake"
  descrizione2: string = "questo meme è noto perché si trovava in una canzone di drake che raffigura quest'ultimo mentre prima rifiuta un qualcosa e dopo ne accetta un'altra"
  
}
