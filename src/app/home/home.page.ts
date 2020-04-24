import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheet:ActionSheetController,public alert:AlertController,private toast:ToastController) {}

async  opneActionSheet(){
const actionSheet=await this.actionSheet.create({
  header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.delete();
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
        }
      },
      ]
    });
    await actionSheet.present();
}

async presentAlert() {
  const alert = await this.alert.create({
    header: 'Alert',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  await alert.present();
}

async delete() {
  const alert = await this.alert.create({
    header: 'Alert',
    message: 'Message will move to trash.',
    buttons: ['OK']
  });

  await alert.present();
}

  async showToast() {
    const toast = await this.toast.create({
      message: 'clicked.',
      duration: 2000
    });
    toast.present();
  }
}
