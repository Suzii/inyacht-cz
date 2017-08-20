import {deliveryClient} from "./deliver/deliveryClient"
import {Faq} from "./models/Faq";

deliveryClient.items<Faq>()
    .type('faq')
    .get()
    .subscribe(response => console.log(response));
