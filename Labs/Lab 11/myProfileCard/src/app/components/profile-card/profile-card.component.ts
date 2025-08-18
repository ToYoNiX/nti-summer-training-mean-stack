import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  name = "Assem Mohamed"
  imgUrl = "https://ts1.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&pid=15.1"
  email = "assem@email.com"
  title = "Backend Developer"
  isDisablesBtn1 = false
  count = 0

  changeBtn1 () {
    this.isDisablesBtn1 = !this.isDisablesBtn1
  }

  addCountOne () {
    this.count += 1
  }
}
