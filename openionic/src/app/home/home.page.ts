import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController, NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController,
              private toastCrtl: ToastController,
              private alertCtrl: AlertController,
              private navCtrl: NavController
              ) {}

  async onEdit(){
    let loading = await this.loadingCtrl.create({
      message: "please wait...!",
      cssClass: 'my-custom-class',
      duration: 2000
    });
    loading.present();
    // setTimeout(()=>{
    //   loading.dismiss();
    // }, 5000)
      // .then(loading=>{
    //   loading.present();
    //   setTimeout(()=>{
    //     loading.dismiss();
    //   }, 5000)
    // })
  }

  async onDelete(){
    let toast = await this.toastCrtl.create({
      message: "Are you sure...!?",
      duration: 2000,
      color: "danger",
      position: "top",
      buttons: [
        {
          // text: "Fermer",
          role: "cancel",
          icon: "close",
          handler: () => {
            console.log('Merci...!');
          }
        }
      ]
    })
    toast.present();
  }

  async onLetter(){
    let alert = await this.alertCtrl.create({
      header: "Subscribe",
      subHeader: "NewLetters",
      message: "Please make sure to subscribe to our newsletter. Thank you..!",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Enter your name"
        },
        {
          name: "email",
          type: "email",
          placeholder: "Enter your email",
        }
      ],
      buttons: [
        {
          text: "cancel",
          handler: () => {

          }
        },
        {
          text: "Subscribe",
          handler: (data) => {
            console.log('Success...!', data);
          }
        }
      ]
    });
    alert.present();

  }

  goToTeam(){
    this.navCtrl.navigateForward('/team')
  }

}
