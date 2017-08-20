import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';

// models
import { Faq } from '../models/Faq';
import { FaqPage } from '../models/FaqPage';

const projectId = 'c93a27a6-8556-45f6-b5e0-6fa74415f3b2';

const typeResolvers: TypeResolver[] = [
    new TypeResolver('faq_page', () => new FaqPage()),
    new TypeResolver('faq', () => new Faq()),
];

export const deliveryClient = new DeliveryClient(
    new DeliveryClientConfig(projectId, typeResolvers)
);
