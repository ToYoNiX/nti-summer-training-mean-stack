import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  name = "Assem Mohamed"
  imgUrl = "https://avatars.githubusercontent.com/u/126217978?v=4"
  email = "toyonix.assemmohamed.2005@gmail.com"
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
