import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public actionSheet:ActionSheetController,public alert:AlertController,private router:Router) { }

  ngOnInit() {
  }

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
    async delete() {
      const alert = await this.alert.create({
        header: 'Done !',
        message: 'Data saved',
        buttons: ['OK']
      });
    
      await alert.present();
    }
    home(){
      this.router.navigateByUrl('home');
    }
    
}
