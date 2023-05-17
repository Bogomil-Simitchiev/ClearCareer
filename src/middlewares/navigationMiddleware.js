import { render } from '../lib/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerElement = document.querySelector('header');

export function navigationMiddleware(ctx, next){
    render(navigationView(ctx), headerElement);
    next();
}