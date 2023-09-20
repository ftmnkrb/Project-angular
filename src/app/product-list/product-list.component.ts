import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  products: any[] = [
    {
    id: 1,
    name: "İçimizdeki Şeytan",
    price: 15,
    imgUrl: "içimizdeki şeyto.png",
    description: "İsteyip istemediğimi doğru dürüst bilmediğim, fakat neticesi aleyhime çıkarsa istemediğimi iddia ettiğim bu nevi söz ve fiillerimin daimi bir mesulünü bulmuştum: İçimizdeki şeytan pek de kurnazca olmayan bir kaçamak yolu... İçimizdeki şeytan yok... İçimizdeki aciz var... Tembellik var...",
    isActive : true
    },
    {
      id: 2,
    name: "Yeni Dünya",
    price: 25,
    imgUrl: "dünya.png",
    description: "Hala bir şey çıkmadı... Galiba bu yolu yapmayacaklar. Köylü de bana yardım etmiyor. Pek ölü mahluklar... Belki de pek akıllı mahluklar da, boşuna yere uğraşmak istemiyorlar. İçimde hiç sevk kalmadı. İnsana birkaç kelime ile cevap verseler yine neyse, fakat ne evet, ne hayır!... Sanki bu istidaları ses vermez bir derin kuyuya atmışız.",
    isActive : true
    },
    {
      id: 3,
    name: "Kürk Mantolu Madonna",
    price: 13,
    imgUrl: "madonna.png",
    description: "Her gün, daima öğleden sonra oraya gidiyor, koridorlardaki resimlere bakıyormuş gibi ağır ağır, fakat büyük bir sabırsızlıkla asıl hedefine varmak isteyen adımlarımı zorla zapt ederek geziniyor, rastgele gözüme çarpmış gibi önünde durduğum Kürk Mantolu Madonnayı seyre dalıyor, ta kapılar kapanıncaya kadar orada bekliyordum. Kimi tutkular rehberimiz olur yaşam boyunca. Kollarıyla bizi sarar. Sorgulamadan peşlerinden gideriz ve hiç pişman olmayacağımızı biliriz",
    isActive : true
    }
  ];

  getProducts () {
    return this.products.filter(p=>p.isActive)
  }


}
