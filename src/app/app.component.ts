import { Component, Input } from '@angular/core'
import { lorem } from 'faker'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence()
  showMessage = false
  enteredText = ''

  onInput (event: Event) {
    const { value } = event.target as HTMLInputElement
    this.enteredText = value
  }
  compare (letter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending'
    }
    return letter === enteredLetter ? 'correct' : 'incorrect'
  }
}
