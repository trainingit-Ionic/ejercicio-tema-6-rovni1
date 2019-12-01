import { Component, ViewChild } from '@angular/core';
import { UserService} from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios: any;
  id: any;
  //@ViewChild('myNav') nav: NavController;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, public navCtrl: NavController,
    public loadCtrl: LoadingController, private router: Router) {}


  //getUno(){ this.id = this.activatedRoute.snapshot.params['id'];
    //      this.userService.getOne(this.id).subscribe(response =>{
            
      //      this.information = response;
        //    alert(response);
         // })
     // }


  //GetUsuarios(){
  //  this.userService.get().subscribe(data =>{
  //    this.information = data;
  //    console.log(this.information);
  //  });
  // }

  //async getData(){
   // const loading = await this.loadCtrl.create({
   //   message: 'Loading..',
    //  spinner: 'bubbles'
      //duration: 700
  //  });
 //   await loading.present();

   // this.userService.get().subscribe(data =>{
    //  this.information = data;
     // console.log(this.information);
    //  loading.dismiss();
   // }, (error =>{
     // console.log(error);
     // loading.dismiss();
   // })
   
 //  );



 async GetUser() {
  const loading = await this.loadCtrl.create({
   message: 'loading..',
   spinner: 'crescent'
 });
  await loading.present()

this.userService.get().subscribe(
(datos) => {this.usuarios = datos ;
console.log(this.usuarios)
loading.dismiss()
},
(error) => {console.log(error);
loading.dismiss();
}


);
console.log('usuarios');
}


goToDetalles(id) {
this.router.navigate(['/lista', id]);
}


ngOnInit()  {

this.GetUser();
this.goToDetalles(this.id);

}








  }

  




    


