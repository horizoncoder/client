import VueRouter from 'vue-router';
import Products from '@/components/Products'
import Product from '@/components/Product'
import Category from '@/components/Category'
import Checkout from '@/components/Checkout'
import Thakyou from '@/components/Thakyou'
import Admin from '@/components/Admin'
const routes = [
    {
        path: '/',
        name:'home',
        component: Products
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
        props: true
    },
    {
        path: '/category/:category',
        name: 'category',
        component: Category,
        props: true
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
    },
    {
        path: '/thankyou',
        name: 'thankyou',
        component: Thakyou,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
    }


];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
