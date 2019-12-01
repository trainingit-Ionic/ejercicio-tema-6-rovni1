import { Component, OnInit } from '@angular/core';
import {UserService} from './../services/user.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  Users ={_id: null, name: '', email: ''}

  user: any;
  id: any;
  

  constructor(public userService: UserService, private loadCtrl: LoadingController, public router: Router,
    public route: ActivatedRoute, public alertCtrl: AlertController, private callNbr: CallNumber) { }

    callNow(number: any){
      this.callNbr.callNumber(number, true)
      .then( res => console.log('lanzando dial', res))
      .catch( err => console.log('Error al lanzar el dial', err));
    }

    


  async getProduct() {
    if(this.route.snapshot.paramMap.get('id') == 'null') {
      alert('You are not choosing an item from the list');
    } else {
      const loading = await this.loadCtrl.create({
        message: 'Loading...'
      });
      await loading.present();
      this.userService.getOne(this.route.snapshot.paramMap.get('id'))
        .subscribe(res => {
          console.log(res);
          this.user = res;
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }
  }

  ngOnInit() {
    this.getProduct();
    
    
  }

}
