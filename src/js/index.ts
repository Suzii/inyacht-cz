import {deliveryClient} from "../server/deliver/deliveryClient"
import {Faq} from "../server/models/Faq";

deliveryClient.items<Faq>()
    .type('faq')
    .get()
    .subscribe(response => console.log(response));
